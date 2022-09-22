import { createSlice } from '@reduxjs/toolkit';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter: (state, action) => void (state.value = action.payload),
  },
});

export const { setFilter } = contactsFilterSlice.actions;
