import { createSlice } from "@reduxjs/toolkit";
import { apiRequestContacts, apiRequestDeleteContactsById } from "./operations.js";

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
    // delete User 
    .addCase(apiRequestDeleteContactsById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(apiRequestDeleteContactsById.fulfilled, (state, action) => {
      state.loading = false;
      state.contacts = state.contacts.filter(contact => contact._id !== action.payload);
    })
    .addCase(apiRequestDeleteContactsById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
});

export default contactsSlice.reducer;