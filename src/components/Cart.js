import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../context'


const Cart = () => {
   const {state: {cart, total}, toggleCart, clearCart} = useGlobalContext()

   const alertCheckout = () => {
      alert('Actualy this shop is just a demo. You\'re not allowed to buy anything here, but maybe you would like to hire me?🤔')
   }

   return (
      <div className='cart-container'>
         <button onClick={toggleCart} className='close-cart-btn'>
            <IoClose />
         </button>
         <div className="background" onClick={toggleCart}>
         </div>
         <div className="cart">
            {
               cart.length>0 
               ?
                  <section className='cart-items'>
                  {cart.map((item) => <CartItem key={item.id} {...item} />)}
                     <p>Total: ${total}</p>
                     <button className='cart-item-remove' onClick={() => clearCart()}>Clear cart</button>
                     <Link onClick={toggleCart} to='/products' className='btn'>
                        add more products
                     </Link>
                     <button onClick={alertCheckout} to='/products' className='btn'>
                        Checkout
                     </button>
                  </section> 
               :
                  <section className='cart-items'>
                     <h2 className='title'>
                        Your cart is empty
                     </h2>
                     <svg class="cart-empty-svg" xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path></svg>
                     <Link onClick={toggleCart} to='/products' className='btn'>
                        Browse products
                     </Link>
                  </section>
            }
         </div>
      </div>
   )
}

export default Cart
