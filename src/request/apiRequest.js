import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiRequest = createApi({
    reducerPath: 'apiRequest',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers' }),
    endpoints: (builder) => ({
        getByName: builder.query({
            query: (value) => `?beer_name=${value}`,
            transformResponse: (response) => response,
        }),
        getByFood: builder.query({
            query: (value) => `?food=${value}`,
            transformResponse: (response) => response,
        }),
    }),
})

export const {useGetByName, useGetByFood} = apiRequest;
