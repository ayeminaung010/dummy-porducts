import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const categoryApi = createApi({
    reducerPath : 'categoryApi',
    baseQuery : fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    tagTypes : ['category'],
    endpoints: (builder) => ({
        getAllCategories : builder.query({
            query : ({token}) => ({
                url : '/products/categories',
                headers : {authorization : `Bearer ${token}`},
            }),
            providesTags: ['category'],
        }),
        
    })
})

export const { useGetAllCategoriesQuery} = categoryApi;