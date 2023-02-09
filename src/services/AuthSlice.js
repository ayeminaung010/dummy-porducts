import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


export const authSlice = createSlice({
    name: 'auth',
    initialState: { user : null ,token : null , remember_me : false},
    reducers: {
        addUser : (state,{payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.remember_me = payload.remember_me;

            Cookies.set('remember_me',state.remember_me,{ expires: 10 });
            if(state.remember_me === true){
              Cookies.set('user',JSON.stringify(state.user),{ expires: 10 });
              Cookies.set('token', state.token,{ expires: 10 }); 
            }else{
              sessionStorage.setItem('user', JSON.stringify(state.user));
              sessionStorage.setItem('token', state.token);
            }
        },
        removeUser : (state,{payload}) => {
            state.user = null;
            state.token = null;
            if(state.remember_me === false ){
              sessionStorage.removeItem('token');
              sessionStorage.removeItem('user');
            }else{
              Cookies.remove('token');
              Cookies.remove('user');
            }
            state.remember_me = false;
            Cookies.remove('remember_me');
        }
    },
})

export const {addUser,removeUser} = authSlice.actions;
export default authSlice.reducer