import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestStudents } from "../../services/api.js";

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