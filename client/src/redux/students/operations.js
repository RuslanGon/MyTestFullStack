import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAddUser, requestDeleteUser, requestPatchStudent, requestStudentById, requestStudents } from "../../services/api.js";

export const apiRequestStudents = createAsyncThunk(
    "students/get",
    async (_, thunkApi) => {
      try {
        const data = await requestStudents();
        return data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

export const apiRequestDeleteStudentById = createAsyncThunk('students/delete',
    async (id, thunkApi) => {
        try {
            await requestDeleteUser(id)
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || error.message);
        }
    }
)  

export const apiRequestAddUser = createAsyncThunk(
  'students/add', 
  async (studentData, thunkApi) => {
    try {
      const data = await requestAddUser(studentData); 
      return data; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const apiRequestEditStudent = createAsyncThunk(
  'students/edit',
  async ({ id, updatedData }, thunkApi) => {
    try {
      const data = await requestPatchStudent(id, updatedData);
      return data; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const apiRequestStudentById = createAsyncThunk(
  "students/getById",
  async (id, thunkApi) => {
    try {
      const data = await requestStudentById(id);
      return data.data; 
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);