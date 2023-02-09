import Cookies from 'js-cookie'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Guard from './components/Guard'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {

  return (
    <div className="container mx-auto">
      <Routes>
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
      </Routes>
    </div>
  )
}

export default App