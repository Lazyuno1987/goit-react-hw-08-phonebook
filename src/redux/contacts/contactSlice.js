
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
  

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contact'],
    }),

    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    creacteContact: builder.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query(data) {
        const { contactId, ...body } = data;
        return {
          url: `contacts/${contactId}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreacteContactMutation,
  useUpdateContactMutation,
} = contactsAPI;
