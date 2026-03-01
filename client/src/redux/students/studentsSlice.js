import { createSlice } from "@reduxjs/toolkit";
import { apiRequestDeleteStudentById, apiRequestStudents } from "./operations.js";

const initialState = {
  students: [],
  error: null,
  loading: false
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder
      .addCase(apiRequestStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRequestStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(apiRequestStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiRequestDeleteStudentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRequestDeleteStudentById.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(student => student._id !== action.payload);
      })
      .addCase(apiRequestDeleteStudentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
});

export default studentsSlice.reducer;