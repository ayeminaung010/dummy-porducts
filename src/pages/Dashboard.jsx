import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Products from './Products';

const Dashboard = () => {
  const token = Cookies.get('token');
  const user = JSON.parse(Cookies.get('user'));


  return (
    <div className=' container mx-auto'>
      <Navbar token={token} user={user}/>
      <Products  token={token} user={user} />
    </div>
  )
}

export default Dashboard