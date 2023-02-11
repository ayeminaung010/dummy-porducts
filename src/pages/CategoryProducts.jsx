import Cookies from 'js-cookie'
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardCategory from '../components/categories/CardCategory';
import Navbar from '../components/Navbar';

const CategoryProducts = () => {
  const remember_me = Cookies.get('remember_me');
  const {category} =useParams();

  if(remember_me === 'false'){ 
    var user = JSON.parse(sessionStorage.getItem('user'));
    var token = sessionStorage.getItem('token');
  }else{
    var token = Cookies.get('token');
    var user = JSON.parse(Cookies.get('user'));
  }

  const carts = useSelector(state => state.cart)
  return (
    <div className=' container mx-auto'>
      <Navbar token={token} user={user} carts={carts}/>
      <CardCategory category={category}  token={token} user={user}/>
    </div>
  )
}

export default CategoryProducts