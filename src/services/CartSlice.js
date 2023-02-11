import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { authSlice } from "./AuthSlice";


export const CartSlice = createSlice({
    name : 'cart',
    initialState : {cart : []},
    reducers : {
        addCarts : (state,{payload}) => {
            let cart = state.cart || [];
            
            const  isExist = cart?.find(i => i.id === payload.id);
            if(!isExist){
                cart.push(payload);
            }else{
                return cart;
            }
            Cookies.set('cartItem',JSON.stringify(state.cart));
        },
        restoreCarts : (state,{payload}) => {
            state.cart = payload;
        },
        removeCart : (state,{payload}) => {
            state.cart = state.cart.filter( i => i.id !== payload.id)
            let cartItem = JSON.parse(Cookies.get('cartItem'));
            cartItem = cartItem.filter((i) => i.id !== payload?.id);
            Cookies.set('cartItem',JSON.stringify(cartItem));
        }
    }
    
})

export const {addCarts,restoreCarts,removeCart} = CartSlice.actions;
export default CartSlice.reducer 