import { createSlice } from '@reduxjs/toolkit';

import { authAPI } from './authAPI';

const initialState = {
  user: { name: null, email: null, token:null },
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authAPI.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.ResponseBody.token;
        state.user = payload.ResponseBody;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.logout.matchFulfilled, (state, _) => {
      state.token = null;
      state.user.name = null;
        state.user.email = null;
        state.user.token = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      authAPI.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.ResponseBody;
        state.isLoggedIn = true;
      }
    );
  },
});

export const getIsLoggedIn = state => state.auth.isLoggedIn;
 export const getUsername = state => state.auth.user.name;

export const getToken = state => state.auth.token;

export default authSlice.reducer;
