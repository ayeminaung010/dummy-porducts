import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/Auth/authApi";
import { CartApi } from "../features/Carts/CartApi";
import { categoryApi } from "../features/Category/CategoryApi";
import { productApi } from "../features/Products/productApi";
import authSlice from "../services/AuthSlice";
import CartSlice from "../services/CartSlice";

export const store = configureStore({
    reducer : {
        [authApi.reducerPath] : authApi.reducer,
        [productApi.reducerPath] : productApi.reducer,
        [categoryApi.reducerPath] : categoryApi.reducer,
        [CartApi.reducerPath] : CartApi.reducer,
        auth : authSlice,
        cart : CartSlice,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,productApi.middleware,categoryApi.middleware,CartApi.middleware),
})