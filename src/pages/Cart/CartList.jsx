import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/Cart/CartItem';
import Navbar from '../../components/Navbar';
import { restoreCarts } from '../../services/CartSlice';


const CartList = () => {

  const remember_me = Cookies.get('remember_me');
  if(remember_me === 'false'){ 
    var user = JSON.parse(sessionStorage.getItem('user'));
    var token = sessionStorage.getItem('token');
  }else{
    var token = Cookies.get('token');
    var user = JSON.parse(Cookies.get('user'));
  }

  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart);


  useEffect(() => {
    if(Cookies.get('cartItem')){
      let cartItem = JSON.parse(Cookies.get('cartItem'));
      dispatch(restoreCarts(cartItem));
    }
  },[])

  return (
    <div>
      <Navbar user={user}  token={token}  />

      <div className="">
        {carts.cart && carts.cart?.length !== 0 ? (
        <div className="">
          <div className="flex justify-center mt-10">
            <ul className="steps steps-horizontal grid-cols-12 ">
              <li className="step step-primary col-span-4">Cart</li>
              <li className="step col-span-4">Shipping</li>
              <li className="step col-span-5">Payments</li>
            </ul>
          </div>

          <div className=" mt-10">
            {carts.cart?.map((cart) => (
              <CartItem cart={cart} key={cart.id}/>
            ))}
          </div>
        </div>
        ) : (
          <div className="">
            NO cart here
          </div>
        )}
      </div>
    </div>
  )
}

export default CartList