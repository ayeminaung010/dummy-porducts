import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CookieAccept from './components/CookieAccept'
import Guard from './components/Guard'
import CartList from './pages/Cart/CartList'
import Shipping from './pages/Cart/Shipping'
import Payment from './pages/Cart/Payment'
import CategoryProducts from './pages/CategoryProducts'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProductDetail from './pages/products/ProductDetail'
import Profile from './pages/Profile'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


let stripePromise = loadStripe('pk_test_51MWLkpHQnZfvV2v2mdtWAZr2yISkFXhUwbKex8bCGrhEor8zilzMZNlGUQJdNRTF0jMOVB1xXHrPZFxrueXEVUZ100VNfAo1Hm');
const App = () => {

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path='/dashboard/:search' element={
          <Guard>
            <Dashboard/>
          </Guard>
        } />
        <Route path='/dashboard' element={
          <Guard>
            <Dashboard/>
          </Guard>
        } />
        <Route path='/' element={
          <Guard>
            <Dashboard/>
          </Guard>
        } />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={
          <Guard>
            <Profile/>
          </Guard>
        }/>
        <Route path='/product/detail/:id' element={
          <Guard>
            <ProductDetail/>
          </Guard>
        }/>
        <Route path='/products/category/:category' element={
          <Guard>
            <CategoryProducts/>
          </Guard>
        }/>

        <Route path='/carts' element={
          <Guard>
            <CartList/>
          </Guard>
        }/>
        <Route path='/carts/shipping' element={
          <Guard>
            <Shipping/>
          </Guard>
        }/>

        <Route path='/carts/shipping/payment' element={
          <Guard>
            <Elements stripe={stripePromise} >
              <Payment/>
            </Elements>
          </Guard>
        }/>
      </Routes>
    </div>
  )
}

export default App