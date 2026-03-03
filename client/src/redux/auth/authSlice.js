import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isSignedIn: false,
  userData: null,
  token: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
      
});

export default authSlice.reducer;