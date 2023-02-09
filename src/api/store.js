import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/Auth/authApi";
import { categoryApi } from "../features/Category/CategoryApi";
import { productApi } from "../features/Products/productApi";
import authSlice from "../services/AuthSlice";

export const store = configureStore({
    reducer : {
        [authApi.reducerPath] : authApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer,
        auth : authSlice,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,productApi.middleware,categoryApi.middleware),
})