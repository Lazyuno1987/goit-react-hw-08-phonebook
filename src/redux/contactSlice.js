
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://631881c4ece2736550cbd951.mockapi.io/contacts' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
     getContactById: builder.query({
      query: id => `/contacts/${id}`,
      providesTags: ['Contact'],
     }),
      addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
      }),
       deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
       }),
       filterContact: builder.mutation({
      query:values => ({
        url: `/contacts`,
        method: 'PUT',
       
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
})


export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation, useFilterContactMutation } = contactApi;

// const { data } = useGetContactsQuery();
// console.log(data)
// const state = useSelector()
// console.log(state)

// const initialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact({ items }, action) {
//       items.push(action.payload);
//     },
//     filterContact(state, action) {
//       state.filter = action.payload;
//     },
//     deletedContact(state, action) {
//       state.items = state.items.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// // };

// // export const contactsReducer = persistReducer(
// //   persistConfig,
// //   contactSlice.reducer
// // );

// export const { addContact } = contactSlice.actions;
// export const { filterContact } = contactSlice.actions;
// export const { deletedContact } = contactSlice.actions;

// export const getContacts = ({ contacts }) => contacts.items;
// export const getFilteredContact = ({ contacts }) => contacts.filter;
