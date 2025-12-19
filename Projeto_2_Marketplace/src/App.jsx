import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Services from './pages/Services.jsx';
import Orders from './pages/Orders.jsx';

function App() {
  return (
    <>
      menu
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
