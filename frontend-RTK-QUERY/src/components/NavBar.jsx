import React from 'react'
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import "../css/NavBar.css";

//import { Cart, Cart4 } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <div className='my-nav'>
      <Link to='/'>
        <h1>Online Shop</h1>
      </Link>
      <Link to = '/cart'>
      <div className='cart-icon-container'>
        <Icons.Cart4 className='cart-icon' />
        <span className='cart-quantity'>
            <span>3</span>
        </span>
       </div>
       </Link>
    </div>
  )
}

export default NavBar
