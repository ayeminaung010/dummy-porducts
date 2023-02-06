import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://dummyjson.com/auth'}),
    tagTypes: ['Auth'],
    endpoints : (builder) => ({
        login : builder.mutation({
            query:  (user) => ({
                url : '/login',
                method: 'POST',
                body : user,
            }),
            invalidatesTags: ['Auth'],
        }),

    })
})

export const {useLoginMutation} = authApi;