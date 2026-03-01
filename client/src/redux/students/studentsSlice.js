import { createSlice } from "@reduxjs/toolkit";
import { apiRequestAddUser, apiRequestDeleteStudentById, apiRequestEditStudent, apiRequestStudentById, apiRequestStudents } from "./operations.js";

const initialState = {
  students: [],
  currentStudent: null,
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
        state.students = action.payload.data;
      })
      .addCase(apiRequestStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete user
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
      //  Add user
      .addCase(apiRequestAddUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRequestAddUser.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload.data)
      })
      .addCase(apiRequestAddUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Edit user 
      .addCase(apiRequestEditStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiRequestEditStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.map(s =>
          s._id === action.payload._id ? action.payload : s
        );
        if (state.currentStudent && state.currentStudent._id === action.payload._id) {
          state.currentStudent = action.payload;
        }
      })
      .addCase(apiRequestEditStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // By id user 
      .addCase(apiRequestStudentById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.currentStudent = null;
      })
      .addCase(apiRequestStudentById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStudent = action.payload; 
      })
      .addCase(apiRequestStudentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
});

export default studentsSlice.reducer;