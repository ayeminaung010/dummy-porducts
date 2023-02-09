import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { GiPriceTag } from 'react-icons/gi';
import { Link } from 'react-router-dom';


const Slider = ({thumbnail,description,title,price,discountPercentage,rating,id}) => {

  return (
    <div>
        <div className="">
            <div className="card card-compact w-64 md:w-96 bg-gray-800 shadow-xl">
              <figure><img src={thumbnail} className=' h-60 w-full ' alt="Shoes" /></figure>
              <div className="card-body">
                <Link to={`/product/detail/${id}`}>
                  <h2 className="card-title">{title}</h2>
                </Link>
                <p>{description.substring(0,40)}...</p>
                
                <div className="badge badge-outline">{rating} <AiFillStar className=' text-warning ml-1' /></div> 
                <div className=" flex flex-wrap gap-5 my-2">
                    <span className=' flex gap-2 items-center font-bold'> <GiPriceTag className=' text-red-500 text-xl'/> {price} $</span>
                    <div className="badge badge-secondary">{discountPercentage} % discount</div>
                </div>
                <div className="card-actions my-2 justify-end">
                  <Link to={`/product/detail/${id}`}>
                    <button className="btn btn-primary">Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default Slider