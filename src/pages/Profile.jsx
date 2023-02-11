import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar'

const Profile = () => {
  const remember_me = Cookies.get('remember_me');

  if(remember_me === 'false'){ 
    var user = JSON.parse(sessionStorage.getItem('user'));
    var token = sessionStorage.getItem('token');
  }else{
    var token = Cookies.get('token');
    var user = JSON.parse(Cookies.get('user'));
  }

  const carts = useSelector((state) => state.cart)

  return (
    <div>
        <Navbar user={user} token={token} carts={carts} />

        <div className="flex justify-center mt-14">
          <div className=" w-5/12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <figure><img src={user?.image} alt="Album"/></figure>
              <div className="card-body">
                <h2 className="card-title">
                  <div className=' font-bold text-white'>{user?.firstName +' ' + user?.lastName} </div>
                </h2>
                <div className="">
                  @{user?.username}
                </div>
                <div className="email">
                  Email - {user?.email}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile