import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiLogout, apiRegister } from "./operations.js";


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
  .addCase(apiRegister.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(apiRegister.fulfilled, (state, action) => {
    state.loading = false;
    state.isSignedIn = true;
    state.userData = action.payload
    state.token = action.payload.accessToken
  })
  .addCase(apiRegister.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })
    //   login user 
    .addCase(apiLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isSignedIn = true;
        state.userData = action.payload
        state.token = action.payload.accessToken
      })
      .addCase(apiLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // user logout
      .addCase(apiLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiLogout.fulfilled, () => {
       return initialState
      })
      .addCase(apiLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
});

export default authSlice.reducer;