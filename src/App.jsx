import Cookies from 'js-cookie'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Guard from './components/Guard'
import CategoryProducts from './pages/CategoryProducts'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ProductDetail from './pages/products/ProductDetail'
import Profile from './pages/Profile'

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
        
      </Routes>
    </div>
  )
}

export default App