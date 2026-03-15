import { Product } from "../db/models/products.js";

export const getAllProducts = async () => {
    return await Product.find({});
  };
