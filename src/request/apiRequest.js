import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiRequest = createApi({
    reducerPath: 'apiRequest',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers' }),
    endpoints: (builder) => ({
        getByName: builder.query({
            query: (value) => `?beer_name=${value}`,
            transformResponse: (response) => response,
        }),
        getCollection: builder.query({
            query: () => `?page=1&per_page=80`,
            transformResponse: (response) => response,
        }),
    }),
})

export const {useGetByNameQuery, useGetCollectionQuery} = apiRequest;

// https://api.punkapi.com/v2/beers?page=1&per_page=80  лист гл стр
// https://api.punkapi.com/v2/beers?beer_name=${resStr}  лист истории поиска
// https://api.punkapi.com/v2/beers/${itemID}  передача все данных одной карточки
