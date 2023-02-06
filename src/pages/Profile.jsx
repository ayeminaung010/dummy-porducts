import React from 'react'
import Navbar from '../components/Navbar'

const Profile = ({user,token}) => {
  console.log(user);
  return (
    <div>
        <Navbar user={user} token={token} />

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