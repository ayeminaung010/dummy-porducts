import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const CartApi = createApi({
    reducerPath : 'CartApi',
    baseQuery : fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    tagTypes : ['cart'],
    endpoints: (builder) => ({
        getUserCarts : builder.query({
            query : ({id,token}) => ({
                url : `/carts/user/${id}`,
                headers : {authorization : `Bearer ${token}`},
            }),
            providesTags: ['cart'],
        }),
        
    })
})

export const { useGetUserCartsQuery } = CartApi;