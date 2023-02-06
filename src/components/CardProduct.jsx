import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {GiPriceTag} from 'react-icons/gi'
const CardProduct = ({product}) => {
  return (
    <div>
        <div className="card w-96 h-[500px] bg-gray-800 shadow-xl ">
            <figure className=' '><img src={product?.thumbnail} className='h-72 w-full  rounded' /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product?.brand.substring(0,40)}...
                </h2>
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
                    <button className='btn btn-warning py-1'>Add to Cart</button>
                </div>
              </div>
        </div>
    </div>
  )
}

export default CardProduct