//import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  //baseUrl: `https://hw-nodejs-server.onrender.com/api`,
     //baseUrl: `http://localhost:3000/api`,
// baseUrl: 'https://connections-api.herokuapp.com/',
    //baseUrl:`https://brave-slug-vestments.cyclic.app/`,
// import axios from 'axios';


// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   }
// }


// export const register = createAsyncThunk(

// )



export const authAPI = createApi({
  
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
  
    baseUrl: `https://db-phonebook.onrender.com/api`,
    //baseUrl: `http://localhost:3000/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
   
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      query: () => '/users/current',
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: credentials => ({
        
        url: '/users/register',
        method: 'POST',
        body: credentials,
      }),
     
    }),
    logout: builder.mutation({
      query: credentials => ({
        url: '/users/logout',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useFetchCurrentUserQuery,
} = authAPI;
