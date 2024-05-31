import React, { useEffect, useState } from 'react';
import Style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return (
    <>
      <nav className="p-3 fixed top-0 left-0 right-0 z-50 shadow-md bg-white dark:bg-gray-950 dark:text-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="container flex md:justify-between items-center ">
            <h1>
              <span className="text-lg font-semibold">E Shopper</span>
            </h1>
            <ul className="hidden md:flex gap-8">
              <li className=" relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to=''
                  
                  className="font-semibold text-gray-800 dark:text-white "
                >
                  Home
                </NavLink>
              </li>
              <li className=" relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to='products/'
                  
                  className="font-semibold text-gray-800 dark:text-white "
                >
                  Products
                </NavLink>
              </li>
              <li className=" relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to='categories/'
                  
                  className="font-semibold text-gray-800 dark:text-white "
                >
                  Categories
                </NavLink>
              </li>
              <li className=" relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to='brands/'
                  
                  className="font-semibold text-gray-800 dark:text-white "
                >
                  Brands
                </NavLink>
              </li>
              <li className=" relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to='cart/'
                  
                  className="font-semibold text-gray-800 dark:text-white "
                >
                  Cart
                </NavLink>
              </li>
              
            </ul>
            <ul className="hidden md:flex gap-8">
              <li className=" cursor-pointer relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to='login/'>Login</NavLink>
              </li>
              <li className=" cursor-pointer relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to='register/'>Register</NavLink>
              </li>
              <li className=" cursor-pointer relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink to=''>Profile</NavLink>
              </li>
              <li className=" cursor-pointer relative hover:before:w-full dark:before:bg-white before:transition-[width] before:duration-300 before:w-0 before:h-[2px] before:bg-purple-600 before:absolute before:left-0 before:-bottom-1">
                <NavLink >Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
