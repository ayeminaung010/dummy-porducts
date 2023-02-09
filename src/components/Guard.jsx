import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';


const Guard = ({children}) => {

    const remember_me = Cookies.get('remember_me');
    if(remember_me === 'false'){
       var token = sessionStorage.getItem('token');
    }else{
       var token = Cookies.get('token');
    }
    const nav = useNavigate();
  
    if(token) return children;
  
    useEffect(() => {
      nav('/login');
    }, []);
  };

export default Guard