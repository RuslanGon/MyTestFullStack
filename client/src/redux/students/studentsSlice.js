import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
  error: false,
  loading: false
};

export const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
       
    }
});

export default studentsSlice.reducer;