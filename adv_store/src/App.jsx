import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Brands from './components/Brands/Brands'
import Notfound from './components/Notfound/Notfound'
import Cart from './components/Cart/Cart'
import { ToastContainer } from "react-toastify";

let route = createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'categories' , element:<Categories/>},
    {path:'products' , element:<Products/>},
    {path:'brands' , element:<Brands/>},
    {path:'register' , element:<Register/>},
    {path:'login' , element:<Login/>},
    {path:'cart' , element:<Cart/>},
    {path:'*' , element:<Notfound/>},
  ]}
])


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={route}>
        <ToastContainer />
      </RouterProvider>
    </>
  );
}

export default App
