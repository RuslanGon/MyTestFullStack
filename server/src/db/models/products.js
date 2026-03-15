import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    currency: { type: String, default: "грн" },
    rating: { type: Number, default: 0 },
    category: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

export const Product = model("Product", productsSchema);
