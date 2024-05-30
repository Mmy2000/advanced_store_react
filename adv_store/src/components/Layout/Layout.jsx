import React, { useEffect, useState } from 'react';
import Style from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Layout() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>
    <Navbar/>
    <div className="container mx-auto bg-red-400 py-6 my-6">
        <Outlet></Outlet>
    </div>

    <Footer/>
  </>
}
