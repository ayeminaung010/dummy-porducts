import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItem';
import Navbar from '../../components/Navbar';
import { restoreCarts } from '../../services/CartSlice';
import {MdDeleteSweep} from 'react-icons/md'

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

  let subTotal = carts?.cart?.reduce((pv,cv) => pv+cv.price,0);
  return (
    <div>
      <Navbar user={user}  token={token} carts={carts} />

      <div className="">
        {carts.cart && carts.cart?.length !== 0 ? (
        <div className="">
          <div className="flex justify-center mt-10">
            <ul className="steps steps-horizontal grid-cols-6 md:grid-cols-12 ">
              <li className="step step-primary col-span-4">Cart</li>
              <li className="step col-span-4">Shipping</li>
              <li className="step col-span-5">Payments</li>
            </ul>
          </div>

          <div className=" mt-10">
            {carts.cart?.map((cart) => (
              <CartItem cart={cart} key={cart.id} subTotal={subTotal}/>
            ))}
          </div>
        </div>
        ) : (
          <div className="flex mt-20 justify-center items-center">
            <div className="flex  flex-col gap-5 ">
              <h1 className=' text-2xl font-bold'>There is no Cart</h1>
              <Link to={'/dashboard'} className=' btn btn-warning'>GO SHOPPING</Link>
            </div>
          </div>
        )}
      </div>

      <div className=" flex flex-wrap gap-3 mx-3 justify-center md:justify-between mb-10">
        <div className="">
          <button className=' btn bg-red-500'><MdDeleteSweep className=' text-3xl mr-2'/> Clear All Cart</button>
        </div>
        <div className="flex  justify-end  mb-5">
            <div className=" bg-gray-700 p-5 px-10 w-80 md:w-96 text-center rounded shadow ">
              <h1 className=' text-2xl font-bold'>Order Summay</h1>
              <div className="flex  mt-5 justify-between items-end font-semibold text-xl">
                <span >SubTotal  </span>
                <span className=' text-warning'>{subTotal} $</span>
              </div>
              <div className="flex  mt-5 justify-between items-end font-semibold text-xl">
                <span >Delivery  </span>
                <span className=' text-warning'>5000 $</span>
              </div>
              <hr  className=' text-red-500 mt-3'/>
              <div className="flex  mt-5 justify-between items-end font-semibold text-xl">
                <span >Total  </span>
                <span className=' text-warning'>{subTotal + 5000} $</span>
              </div>
              <div className="flex flex-col mt-5">
                <button className=' btn btn-primary'>Check Out </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartList