import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Products from './Products';

const Dashboard = () => {

  const remember_me = Cookies.get('remember_me');

  if(remember_me === 'false'){ 
    var user = JSON.parse(sessionStorage.getItem('user'));
    var token = sessionStorage.getItem('token');
  }else{
    var token = Cookies.get('token');
    var user = JSON.parse(Cookies.get('user'));
  }

  const {search} =useParams();
  

  return (
    <div className=' container mx-auto'>
      <Navbar token={token} user={user}/>
      <Products  token={token} user={user} search={search}/>
    </div>
  )
}

export default Dashboard