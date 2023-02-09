import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import ProductDetailLoader from '../../components/Loading/ProductDetailLoader';
import Navbar from '../../components/Navbar';
import RelatedProducts from '../../components/proudcts/RelatedProducts';
import {  useGetSingleProuctsQuery } from '../../features/Products/productApi'

const ProductDetail = () => {
    const remember_me = Cookies.get('remember_me');
    if(remember_me === 'false'){ 
        var user = JSON.parse(sessionStorage.getItem('user'));
        var token = sessionStorage.getItem('token');
    }else{
        var token = Cookies.get('token');
        var user = JSON.parse(Cookies.get('user'));
    }
    const {id} = useParams();
    const {data,isLoading} = useGetSingleProuctsQuery({id,token});

    const [count,setCount] = useState(0);
    //count
    const decreaseBtn = () =>{
        if(count > 1){
            setCount(pre => pre - 1);
        }
    }
    const increaseBtn = () =>{
        if(count < data?.stock ) {
            setCount(pre => pre + 1);
        }
    }

    //image handle
    const imageHandler = (src) =>{
        const thumbnail = document.querySelector('.thumbnail');
        thumbnail.src = src;
    }

    const [category,setCategory] = useState('');

    useEffect(() =>{
        setCategory(data?.category);
    },[data])

    const nav = useNavigate()

  return (
    <div>
        <Navbar user={user} token={token} />
        {isLoading ? (<ProductDetailLoader/>) : (
        <div className="mt-10 ">
            
        <div className="my-3">
            <button className='btn ' onClick={() => nav('/dashboard')}>Back</button>
        </div>
        <div className="flex justify-evenly items-center flex-col md:flex-row ">
        
            {/* image  */}
            <div className=" flex flex-col gap-5 justify-between items-center ">
                <div className=" border-2">
                    <img src={ data?.thumbnail} className='thumbnail rounded h-80 w-96 object-full ' alt="" />
                </div>
                <div className=" flex flex-wrap gap-2 justify-evenly">
                    {data?.images.map((i,index) => (
                        <img src={i}  alt="" key={index} onClick={() => imageHandler(i)}  className='rounded w-12 h-12  md:w-20 md:h-20 object-cover'/>
                    ))}
                </div>
            </div>
            {/* details  */}
            <div className="flex flex-wrap flex-col gap-5 px-2 my-3 md:w-5/12"> 
                <div className="  ">
                    <p className=' badge badge-outline'>{data?.category}</p>
                </div>
                <div className="">
                    <h1 className=' text-2xl font-bold'>{data?.title}</h1>
                </div>
                <div className="">
                    <p className=' text-lg font-medium '>{data?.description}</p>
                </div>
                <div className="">
                    <div className=" flex flex-wrap gap-5">
                        <div className="rating">
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="">
                            <span className='text-lg '>({data?.rating} rating)</span>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-wrap gap-5 items-center">
                    <p className=' font-semibold text-2xl'>$ {data?.price}</p>
                    <p  className='badge badge-secondary'>{data?.discountPercentage} % discount</p>
                </div>
                <div className=" flex flex-wrap gap-5">
                    <div className=" flex flex-wrap gap-3">
                        <button className=' btn btn-outline' onClick={decreaseBtn}>-</button>
                        <input type="number" className='input w-28 font-semibold   max-w-xs' value={count}  />
                        <button className=' btn btn-outline' onClick={increaseBtn}>+</button>
                    </div>
                    <div className="">
                        <button className=' btn btn-warning'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="you-may-also-like">
            <RelatedProducts id={id} category={category} token={token}/>
        </div>  
    </div>
        )}
    </div>
  )
}

export default ProductDetail