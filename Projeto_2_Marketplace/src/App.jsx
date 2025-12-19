import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Services from './pages/Services.jsx';
import Orders from './pages/Orders.jsx';
import './app.css'

function App() {
  return (
    <>
      <div id='menu'>
        <Link to='/Admin' class='links' >Admin</Link>
        <Link to='/Login' class='links' >Login</Link>
        <Link to='/Profile' class='links' >Perfil</Link>
        <Link to='/Services' class='links' >Services</Link>
        <Link to='/Orders' class='links' >Carrinho</Link>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
