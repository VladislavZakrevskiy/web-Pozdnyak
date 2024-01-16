import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../App.consts';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API,
  }),
  endpoints: () => ({}),
});
