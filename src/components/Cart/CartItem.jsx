import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCart } from '../../services/CartSlice';
import {CiCircleRemove} from 'react-icons/ci'
import {SlMinus,SlPlus} from 'react-icons/sl'

const CartItem = ({cart,increasePrice,decreasePrice}) => {

    const dispatch =  useDispatch();
    const [count,setCount] = useState(cart?.count);
    
    const decreaseBtn = () =>{
      if(count > 1){
          setCount(pre => pre - 1);
          decreasePrice(cart?.price)
      }
    }
    const increaseBtn = () =>{
      if(count < cart?.stock){
        setCount(pre => pre + 1);
        increasePrice(cart?.price)
      }
    }
  
    const handleChange = event => {
        setCount(event.target.value);
    };

    const removeHandler = (cart) => {
        const result = dispatch(removeCart(cart));
        decreasePrice(cart?.price * count);
    }

  return (
    <div>
        <div key={cart.id} className=" flex justify-evenly my-5 items-center mx-3 bg-gray-700 rounded py-3 px-5 md:px-0"> 
            <div className=" flex flex-wrap flex-col justify-start gap-5 items-center w-32 md:w-72">
              <img src={cart?.thumbnail} className='w-14 h-14 md:w-32 md:h-32 border-2' alt="" />
              <div className="">
                <h1 className=' font-bold md:text-xl'>{cart?.title}</h1>
                <p className=' md:text-lg md:font-semibold'>{cart?.brand}</p>
              </div>
            </div>
                
            <div className=" w-20 md:w-56">
              <div className=" flex flex-wrap flex-col md:flex-row items-center justify-center gap-3">
                  <button className='' onClick={decreaseBtn} ><SlMinus className=' text-2xl hover:text-white'/></button>
                  <input type="number" className='input w-10 md:w-28 font-semibold   max-w-xs' value={count}  onChange={handleChange} />
                  <button className='' onClick={increaseBtn} ><SlPlus className=' text-2xl hover:text-white' /></button>
              </div>
            </div>
            <div className=" w-20">
              <span className=' text-warning font-semibold'>{cart?.price * count} $</span>
            </div>
            <div className="">
              <span className=' cursor-pointer' onClick={() => removeHandler(cart)}><CiCircleRemove className='text-4xl text-red-500 '/></span>
            </div>
        </div>
        
    </div>
  )
}

export default CartItem