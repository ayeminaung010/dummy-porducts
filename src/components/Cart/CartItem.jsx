import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCart, restoreCarts } from '../../services/CartSlice';

const CartItem = ({cart}) => {

    const dispatch =  useDispatch();
    const [count,setCount] = useState(1);
    const decreaseBtn = () =>{
      if(count > 1){
          setCount(pre => pre - 1);
      }
    }
    const increaseBtn = () =>{
      if(count < cart?.stock){
        setCount(pre => pre + 1);
      }
    }
  
    const handleChange = event => {
        setCount(event.target.value);
    };

    const removeHandler = (cart) => {
        const result = dispatch(removeCart(cart));
    }


  return (
    <div>
        <div key={cart.id} className=" flex justify-evenly my-5 items-center bg-gray-700 rounded py-3"> 
            <div className=" flex justify-start gap-4 items-center w-72">
              <img src={cart?.thumbnail} className='w-40 h-40 border-2' alt="" />
              <div className="">
                <h1 className=' font-bold'>{cart?.title}</h1>
                <p>{cart?.brand}</p>
              </div>
            </div>
                
            <div className=" w-56">
              <div className=" flex flex-wrap gap-3">
                  <button className=' btn btn-outline' onClick={decreaseBtn} >-</button>
                  <input type="number" className='input w-28 font-semibold   max-w-xs' value={count}  onChange={handleChange} />
                  <button className=' btn btn-outline' onClick={increaseBtn} >+</button>
              </div>
            </div>
            <div className="">
              <span className=' text-warning'>{cart?.price * count} $</span>
            </div>
            <div className="">
              <button className='btn' onClick={() => removeHandler(cart)}>remove</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem