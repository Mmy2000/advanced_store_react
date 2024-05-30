import React, { useEffect, useState } from 'react';
import Style from './Navbar.module.css';


export default function Navbar() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>
    <h1>Navbar</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi eligendi accusantium libero quae sit ex reiciendis eaque voluptatem. Sed architecto, voluptatibus ab nobis praesentium laudantium consequatur assumenda error odio maiores!</p>
  </>
}
