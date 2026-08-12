import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import FourOFour from '../pages/FourOFour';
import DrawerPage from '@/pages/DrawerPage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/drawer" element={<DrawerPage/>}></Route>
        <Route path="*" element={<FourOFour/>}></Route>
    </Routes>
  )
}

export default AllRoutes