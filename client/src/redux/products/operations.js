import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAllProducts } from "../../services/api.js";

export const apiRequesProducts = createAsyncThunk(
  "products/get",
  async (_, thunkApi) => {
    try {
      const products = await requestAllProducts();
      return products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);