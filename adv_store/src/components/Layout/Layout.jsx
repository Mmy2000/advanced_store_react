import React, { useEffect, useState } from 'react';
import Style from './Layout.module.css';
import Footer from '../Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return (
    <>
    <Navbar/>
      
      <div className="container  mx-auto py-10  my-6">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
}
