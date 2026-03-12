import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./students/studentsSlice.js";
import authReducer from "./auth/authSlice.js";
import contactsReducer from "./contacts/contactSlice.js";
import productsReduser from './products/productsSlice.js'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["isSignedIn", "token", "userData"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    products: productsReduser,
    students: studentsReducer,
    auth: persistedAuthReducer,
    contacts: persistedContactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);