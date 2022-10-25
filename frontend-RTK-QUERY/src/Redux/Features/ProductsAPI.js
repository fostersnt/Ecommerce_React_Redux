/*
    You need to register API service that will fetch data from the BackEnd
*/
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:2000'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => 'products'
        })
    })
})

export const {useGetAllProductsQuery} = productsApi