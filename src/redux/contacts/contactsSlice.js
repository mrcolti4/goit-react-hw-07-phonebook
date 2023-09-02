import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './contactsOperations';

const contactsState = {
  items: [],
  isLoading: false,
  error: null,
};
const handleFulfilled = (state, { payload }) => {
  state.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.items = [...state.items, payload];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items = [...state.items, payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      const index = state.findIndex(item => item.id === payload);
      state.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleAddContactFulfilled);
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
