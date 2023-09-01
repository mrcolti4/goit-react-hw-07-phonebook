import { createSlice } from '@reduxjs/toolkit';

const filterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterByName(state, { payload }) {
      return payload;
    },
  },
});

export const { filterByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
