import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactSlice'
import { contactsFilterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
   [contactApi.reducerPath]:contactApi.reducer,
   filter: contactsFilterSlice.reducer
  },
  middleware:getDefaultMiddleware=> [
     ...getDefaultMiddleware(),
     contactApi.middleware,
  ],
 
});




