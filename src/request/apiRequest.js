import { createApi, fetchBaseQuery } from '@reduxjs/toolkit';


export const apiRequest = createApi({
    reducerPath: 'apiRequest',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers' }),
    endpoints: (build) => ({
        getName: build.query({
            query: () => "/beer_name",
            transformResponse: (response) => response,
        }),
        getFood: build.query({
            query: (value) => `?food=${value}`,
            transformResponse: (response) => response,
        }),
    }),
})

export const {getNameData, getFoodData} = apiRequest;