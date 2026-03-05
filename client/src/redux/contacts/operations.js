import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestAddContact, requestContacts, requestDeleteContact, requestPatchContact } from "../../services/api.js";

export const apiRequestContacts = createAsyncThunk(
    "contacts/get",
    async (_, thunkApi) => {
      try {
        const data = await requestContacts();
        return data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

  export const apiRequestDeleteContactsById = createAsyncThunk('contact/delete',
    async (id, thunkApi) => {
        try {
            await requestDeleteContact(id)
            return id;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || error.message);
        }
    }
)  

export const apiRequestAddContact = createAsyncThunk(
    'contacts/add', 
    async (contactData, thunkApi) => {
      try {
        const data = await requestAddContact(contactData); 
        return data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );

export const apiRequestEditContact = createAsyncThunk(
    'contacts/edit',
    async ({ id, updatedData }, thunkApi) => {
      try {
        const data = await requestPatchContact(id, updatedData);
        return data; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data || error.message);
      }
    }
  );  