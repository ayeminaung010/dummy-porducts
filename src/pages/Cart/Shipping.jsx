import Cookies from 'js-cookie';
import React from 'react'
import { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
const Shipping = () => {

  const remember_me = Cookies.get('remember_me');

  let user,token;
  if(remember_me === 'false'){ 
     user = JSON.parse(sessionStorage.getItem('user'));
     token = sessionStorage.getItem('token');
  }else{
     token = Cookies.get('token');
     user = JSON.parse(Cookies.get('user'));
  }

  const carts = useSelector((state) => state.cart);

  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div>
      <Navbar user={user} token={token} carts={carts}/>
      <div className="">
        
        <div className="flex justify-center mt-10">
          <ul className="steps steps-horizontal grid-cols-6 md:grid-cols-12 ">
            <li className="step step-primary col-span-5">Cart</li>
            <li className="step col-span-4 step-primary">Shipping</li>
            <li className="step col-span-5 ">Payments</li>
          </ul>
        </div>

        <div className="">
          <Link to={'/carts'} className="btn ">
              <MdOutlineArrowBackIosNew/>
          </Link>
        </div>

        <div className="flex justify-evenly my-8">
          <div className=" w-6/12  ">
            <form action="" className=' flex flex-wrap flex-col justify-center '>
              <div className=" flex flex-wrap  gap-4">
                <div className="form-control w-64">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" placeholder="fist name" className="input input-bordered" />
                </div>
                <div className="form-control w-60">
                  <label className="label">
                    <span className="label-text">Last name</span>
                  </label>
                  <input type="text" placeholder="last name" className="input input-bordered" />
                </div>
              </div>
              <div className="">
                <div className="form-control  w-8/12">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Enter email" className="input input-bordered" />
                </div>
              </div>  
              <div className="">
                <div className="form-control  w-8/12">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" placeholder="09xxxxxxxxx" className="input input-bordered" />
                </div>
              </div>
              <div className="">
                <div className="form-control  w-8/12">
                  <label className="label">
                    <span className="label-text">Address Line 1</span>
                  </label>
                  <input type="text" placeholder="Enter address" className="input input-bordered" />
                </div>
              </div>
              <div className="">
                <div className="form-control  w-8/12">
                  <label className="label">
                    <span className="label-text">Address Line 2</span>
                  </label>
                  <input type="text" placeholder="Enter address" className="input input-bordered" />
                </div>
              </div>
              <div className=" flex flex-wrap  gap-4 mt-4">
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text">Country</span>
                  </label>
                  <CountryDropdown
                    value={country}
                    onChange={(val) => setCountry(val)}
                    className={'input input-bordered w-64'}  
                  />
                </div>

                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text">Region</span>
                  </label>
                  <RegionDropdown
                  country={country}
                  value={region}
                  className={'input input-bordered w-60'} 
                  onChange={(val) => setRegion(val)} />
                </div>
                
              </div>
              <div className=" flex flex-wrap  gap-4">
                <div className="form-control w-64">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input type="text" placeholder="Enter City" className="input input-bordered" />
                </div>
                <div className="form-control w-60">
                  <label className="label">
                    <span className="label-text">Zip/Postal Code</span>
                  </label>
                  <input type="text" placeholder="Zip/Postal" className="input input-bordered" />
                </div>
              </div>
              <div className=" mt-5 w-8/12">
                <Link to={'/carts/shipping/payment'} className=' btn btn-primary  w-full'>Next Page</Link>
              </div>
            </form>
          </div>
          <div className="  ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50018.42460144435!2d96.08389292708233!3d16.862890635382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1937d3cf979a7%3A0x72baf40b78a5cb6b!2sKaba%20Aye%20Pagoda!5e0!3m2!1sen!2smm!4v1676198080766!5m2!1sen!2smm" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping