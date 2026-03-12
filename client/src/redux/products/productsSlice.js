import { createSlice } from "@reduxjs/toolkit";
import { apiRequesProducts } from "./operations.js";


const initialState = {
  products: [],
  error: null,
  loading: false
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
  .addCase(apiRequesProducts.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(apiRequesProducts.fulfilled, (state, action) => {
    state.loading = false;
    state.products = action.payload;
  })
  .addCase(apiRequesProducts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })
});

export default productsSlice.reducer;