import React, { useEffect, useState } from 'react';
import Style from './Layout.module.css';
import Footer from '../Footer/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import { Avatar, Dropdown , Navbar } from "flowbite-react";


export default function Layout() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return (
    <>
      <Navbar className="bg-gray-100 shadow-lg" fluid rounded>
        <Navbar.Brand>
          {/* <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <NavLink to="">E Shopper</NavLink>
          </span>
        </Navbar.Brand>

        <Navbar.Collapse>
          <Navbar.Link >
            <NavLink  to="">Home</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="products/">Products</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="categories/">Categories</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="brands/">Brands</NavLink>
          </Navbar.Link>
          <Navbar.Link>
            <NavLink to="cart/">Cart</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
        {/* <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div> */}
        <div className="flex md:order-2">
          <Navbar.Collapse>
            <NavLink to="login/">Login</NavLink>
            <NavLink to="register/">Register</NavLink>
          </Navbar.Collapse>
        </div>
        <Navbar.Toggle />
      </Navbar>
      <div className="container mx-auto bg-red-400 py-6 my-6">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
}
