import { createSlice } from "@reduxjs/toolkit";
import { apiRequestContacts } from "./operations.js";

const initialState = {
  contacts: [],
  error: null,
  loading: false
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
  .addCase(apiRequestContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(apiRequestContacts.fulfilled, (state, action) => {
    state.loading = false;
    state.contacts = action.payload.data;
  })
  .addCase(apiRequestContacts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })
    
});

export default contactsSlice.reducer;