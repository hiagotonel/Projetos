import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Produtos from './pages/Produtos.jsx';
import Orders from './pages/Orders.jsx';
import './app.css'

function App() {
  return (
    <>
      <header id='header'>
        <Link to='/' class='links' >Inicio</Link>
        <Link to='/Admin' class='links' >Admin</Link>
        <Link to='/Login' class='links' >Login</Link>
        <Link to='/Profile' class='links' >Perfil</Link>
        <Link to='/Produtos' class='links' >Produtos</Link>
        <Link to='/Orders' class='links' >Carrinho</Link>
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/Orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
