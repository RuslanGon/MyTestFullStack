import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectProductsError, selectProductsLoading } from "../redux/products/selectors.js";
import { apiRequesProducts } from "../redux/products/operations.js";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    dispatch(apiRequesProducts());
  }, [dispatch]);

  const handleClick = () => setQuery(filter);
  const onChange = (e) => setFilter(e.target.value);

  const filteredProducts = (products || []).filter(
    (product) => product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Products</h1>
      {loading && <Loader />}
      {error && <Error />}
      <div className={styles.container}>
        <div className={styles.list}>
          {filteredProducts.length > 0 ? filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <p>Price: {product.price} грн</p>
              <p>Rating: {product.rating}</p>
              <p>Category: {product.category}</p>
            </div>
          )) : <p className={styles.empty}>Продуктов нет</p>}
        </div>

        <div className={styles.sidebar}>
          <h3>Search product</h3>
          <input className={styles.input} type="text" placeholder="Enter name" value={filter} onChange={onChange} />
          <button className={styles.button} onClick={handleClick}>Find</button>
        </div>
      </div>
    </div>
  );
};

export default Products;