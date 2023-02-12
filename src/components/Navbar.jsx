import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSearchProductsQuery } from '../features/Products/productApi';
import { removeUser } from '../services/AuthSlice';
import CardProduct from './CardProduct';
import {BiSearch} from 'react-icons/bi';

const Navbar = ({user,token,carts}) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler= () =>{
    dispatch(removeUser());
    nav('/login');
  }
  const [search,setSearch] = useState('');
  const {data,isLoading} = useSearchProductsQuery({search,token});

  // data search
   const searchHandler= () => {
    data?.products.map((product) => {
      <CardProduct key={product?.id} product={product}/>
    })
    nav(`/dashboard/${search}`);
   }

   let totalPrice = carts?.cart?.reduce((pv,cv) => pv+cv.price,0);

   const location = useLocation();
   const category = useParams();

  return (
    <div>
          <div className="navbar bg-gray-700 rounded-lg mt-5 ">
            <div className="flex-1 gap-2">
              <label htmlFor="my-drawer" className={ location.pathname !== '/dashboard' && location.pathname !== '/' && location.pathname !== `/products/category/${category.category}` ? 'hidden' : "btn btn-outline drawer-button "}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              <Link to={'/dashboard'} className="btn btn-ghost normal-case text-white text-xl font-bold">Daisy SHOP</Link>
            </div>

            <div className=" flex-none  ">
              {/* search box  */}
              <div className="form-control hidden md:block md:mr-5 ">
                <div className=" flex justify-center items-center">
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Search" className="input input-bordered " />
                  <button className='btn bg-gray-800 ml-2' onClick={searchHandler}><BiSearch className=' text-lg'/></button>
                </div>
              </div>
              {/* mobile search  */}
              <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </label>
            </div>
            <div className="flex-none ">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{carts?.cart?.length}</span>
                  </div>
                </label>
                
                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                    <div className="card-actions">
                      <span className=' font-semibold text-xl my-3'>SubTotal - <span className=' text-warning'>{totalPrice} $</span></span>
                        <Link to={'/carts'} className="btn btn-primary btn-block">View cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.image} />
                  </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li >
                    <Link to={'/profile'} className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li><button onClick={logOutHandler}>Log Out</button></li>
                </ul>
              </div>
            </div>
          </div>
          
    </div>
  )
}

export default Navbar
