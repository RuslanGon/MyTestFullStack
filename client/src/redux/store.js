import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from './students/studentsSlice.js'

export const store = configureStore({
    reducer: {
        students: studentsReducer,
    }
});