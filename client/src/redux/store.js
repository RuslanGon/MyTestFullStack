import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from './students/studentsSlice.js'
import authReducer from "./auth/authSlice.js";

export const store = configureStore({
    reducer: {
        students: studentsReducer,
        auth: authReducer
    }
});