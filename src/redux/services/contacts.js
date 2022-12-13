import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626f94efc508beec4885c167.mockapi.io/contacts/',
  }),
  tageTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
        body: contactId,
      }),
      invalidatesTags: ['Contact'],
    }),
    createContact: builder.mutation({
      query: contactId => ({
        url: `contacts/`,
        method: 'POST',
        body: contactId,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
