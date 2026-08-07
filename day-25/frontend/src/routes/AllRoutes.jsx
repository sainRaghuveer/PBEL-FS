import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}> </Route>
    </Routes>
  )
}

export default AllRoutes