import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from './contacts/contactSlice';
import { contactsFilterSlice } from './filterSlice';
import { authAPI } from './auth/authAPI';
import authReducer from '../redux/auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    filter: contactsFilterSlice.reducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsAPI.middleware,
    authAPI.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
