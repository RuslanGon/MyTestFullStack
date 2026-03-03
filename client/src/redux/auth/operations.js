import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mytestfullstack.onrender.com'
})

export const setToken = (token) => {
instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
instance.defaults.headers.common.Authorization = ''
}

export const apiRegister = createAsyncThunk(
    "auth/register",
    async (formData, thunkApi) => {
      try {
        const { data } = await instance.post("/auth/register", formData)
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

  export const apiLogin = createAsyncThunk(
    "auth/login",
    async (loginData, thunkApi) => {
      try {
        const { data } = await instance.post("/auth/login", loginData);
        return data;
      } catch (error) {return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

  export const apiLogout = createAsyncThunk(
    "auth/logout",
    async (_, thunkApi) => {
      try {
        const { data } = await instance.post("/auth/logout");
        return data;
      } catch (error) {return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );