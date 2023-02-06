import Cookies from 'js-cookie'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Guard from './components/Guard'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Products from './pages/Products'
import Profile from './pages/Profile'

const App = () => {
  const token = Cookies.get('token');
  const user = JSON.parse(Cookies.get('user'));

  return (
    <div className="container mx-auto">
      <Routes>
        <Route path='/dashboard' element={
          <Guard>
            <Dashboard/>
          </Guard>
        } />
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile token={token} user={user}/>} />
      </Routes>
    </div>
  )
}

export default App