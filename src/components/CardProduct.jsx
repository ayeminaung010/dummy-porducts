import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {GiPriceTag} from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCarts } from '../services/CartSlice'


const CardProduct = ({product}) => {
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const sendData = {'id' : product?.id,'count' : 1, 'brand' : product?.brand, 'category' : product?.category , 'description' : product?.description, 'discountPercentage' : product?.discountPercentage ,'price' : product?.price ,'rating' : product?.rating ,'stock' : product?.stock ,'thumbnail' : product?.thumbnail ,'title' : product?.title} ;
    console.log(sendData);
    dispatch(addCarts(sendData));
  }

  return (
    <div>
        <div className="card w-96 h-[500px] bg-gray-800 shadow-xl  ">
            <figure className=' '><img src={product?.thumbnail} className='h-72 w-full  rounded' /></figure>
              <div className="card-body">
                <Link to={`/product/detail/${product?.id}`}>
                  <h2 className="card-title text-white">
                    {product?.title.substring(0,20)}
                  </h2>
                </Link>
                
                <div className="">
                  <span className=' text-lg'>Brand Name - {product?.brand.substring(0,20)} </span>
                </div>
                <div className="badge badge-secondary">{product?.discountPercentage} % discount</div>
                <p>{product?.description.substring(0,50)}...</p>
                <div className="mt-2">
                    <div className="card-actions justify-start">
                      <div className="badge badge-outline">{product?.rating} <AiFillStar className=' text-warning ml-1' /></div> 
                      <div className="badge badge-outline">{product?.category}</div>
                    </div>
                </div>
                <div className=" flex justify-between items-center mt-2">
                    <div className="">
                        <span className=' flex gap-2 items-center font-bold'> <GiPriceTag className=' text-red-500 text-xl'/> {product?.price} $</span>
                    </div>
                    <button className='btn btn-warning py-1' onClick={() => addToCartHandler(product) }>Add to Cart</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default CardProduct