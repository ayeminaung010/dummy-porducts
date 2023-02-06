import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export const authSlice = createSlice({
    name: 'auth',
    initialState: { user : null ,token : null},
    reducers: {
        addUser : (state,{payload}) => {
            state.user = payload.user;
            state.token = payload.token;
        },
    },
})

export const {addUser} = authSlice.actions;
export default authSlice.reducer