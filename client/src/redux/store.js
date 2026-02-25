import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './students/studentsSlice.js'

export const store = configureStore({
    reducer: {
        students: studentReducer,
    }
});