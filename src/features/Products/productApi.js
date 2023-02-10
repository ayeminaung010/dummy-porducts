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
        getSingleProucts : builder.query({
            query : ({id,token}) => ({
                url : `/products/${id}`,
                headers : {authorization : `Bearer ${token}`},
            }),
            providesTags: ['Product'],
        }),
        getProductsCategory : builder.query({
            query : ({category,token}) => ({
                url : `/products/category/${category}`,
                headers : {authorization : `Bearer ${token}`},
            }),
            providesTags: ['Product'],
        }),
        searchProducts : builder.query({
            query : ({search,token}) => ({
                url : `/products/search?q=${search}`,
                headers : {authorization : `Bearer ${token}`},
            }),
            providesTags: ['Product'],
        })
    })
})

export const { useGetProductsQuery,useGetSingleProuctsQuery,useGetProductsCategoryQuery,useSearchProductsQuery} = productApi;