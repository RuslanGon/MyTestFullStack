import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../redux/products/selectors.js";
import { apiRequesProducts } from "../redux/products/operations.js";
import Loader from "../components/Loader.jsx";
import Error from "../components/Error.jsx";
import styles from "./Products.module.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProducts);

  // Загружаем продукты, если их ещё нет
  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(apiRequesProducts());
    }
  }, [dispatch, products]);

  // Находим нужный продукт
  const product = products.find((p) => p.id === productId);

  if (!products.length) return <Loader />;
  if (!product) return <Error message="Product not found" />;

  return (
    <div className={styles.page}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{product.name}</h1>
        <p><strong>Price:</strong> {product.price} грн</p>
        <p><strong>Rating:</strong> {product.rating}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Old Price:</strong> {product.old_price ? product.old_price + " грн" : "-"}</p>
        <p><strong>In Stock:</strong> {product.in_stock ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default ProductDetails;