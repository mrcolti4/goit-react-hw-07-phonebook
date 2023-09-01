import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        return [...state, payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      const index = state.findIndex(item => item.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
