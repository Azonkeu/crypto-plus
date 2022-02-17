import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.nomics.com/v1',
  }),
  endpoints: (builder) => ({
    getCurrencies: builder.query({
      query: () => 'currencies?key=7042094d67ed99093139284f9357e6f3bfd6a3d7',
    }),
  }),
});

export const { useGetCurrenciesQuery } = currencyApi;
