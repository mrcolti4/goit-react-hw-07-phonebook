import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsApi } from 'js/contacts_api/API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = ContactsApi.fetchContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      ContactsApi.addContact(data);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      ContactsApi.deleteContact(id);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
