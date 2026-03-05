import { createSlice } from "@reduxjs/toolkit";

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
    
});

export default contactsSlice.reducer;