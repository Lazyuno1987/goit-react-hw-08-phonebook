import { createSlice } from '@reduxjs/toolkit';
import { contactsAPI } from './contactApi';

const initialState = {
  contacts: [],
  token: null,
  isLoggedIn: false,
  error: null,
};




export const contactsSlise = createSlice({
   name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      contactsAPI.endpoints.fetchContacts.matchFulfilled,
      (state, { payload }) => {

       state.contacts = payload
     } 
    )
    }
  

})

export default contactsSlise.reducer