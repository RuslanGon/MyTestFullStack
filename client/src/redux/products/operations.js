import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAllProducts } from "../../services/api.js";

export const apiRequesProducts = createAsyncThunk(
    "students/get",
    async (_, thunkApi) => {
      try {
        const data = await requestAllProducts();
        return data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );