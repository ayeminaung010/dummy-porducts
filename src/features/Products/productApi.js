import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    tagTypes : ['Product'],
    endpoints: (builder) => ({
        getProducts : builder.query({
            query : ({token}) => ({
                url : '/products',
                headers : {authorization : `Bearer ${token}`},
            }),
            providesTags: ['Product'],
        }),
    })
})

export const { useGetProductsQuery} = productApi;