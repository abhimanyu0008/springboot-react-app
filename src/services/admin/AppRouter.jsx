import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from '../../components/admin/navbar';
import Home from '../../components/admin/Home';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path='/' element={<Home/>}/> 
    </Routes>
  );
}

export default AppRouter;
