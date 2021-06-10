import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import { useGlobalContext } from '../context'


const Header = () => {
   const {toggleCart, state: {amount}} = useGlobalContext()

   return (
      <header className='header'>
         <Link className='nav-link' to='/'>
            <img src={logo} alt="logo" className='logo' />
         </Link>
         <nav className="nav">
            <ul className='nav-list'>
               <li  className='nav-item'>
                  <Link className='nav-link' to='/'>Home</Link>
               </li>
               <li  className='nav-item'>
                  <Link className='nav-link' to='/products'>Products</Link>
               </li>
            </ul>
            <button onClick={toggleCart} className='cart-btn btn-reset'>
               <FaShoppingCart />
            </button>
            <p>{amount}</p>
         </nav>
      </header>
   )
}

export default Header
