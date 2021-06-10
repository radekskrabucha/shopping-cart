import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useGlobalContext } from '../context'


const CartItem = ({id, title, price, amount, img}) => {
   const {increase, decrease, removeItem} = useGlobalContext()

   return (
      <article className='cart-item'>
         <div className="cart-item-img-container">
            <img className='cart-item-img' src={img} alt={title} />
         </div>
         <div className="cart-item-info">
            <h2 className='p-text cart-item-title'>{title}</h2>
            <p>${price}</p>
         </div>
         <div className="cart-item-amount-container">
            <button className='cart-item-btn' onClick={() => decrease(id)}>
               <FaAngleLeft />
            </button>
            <p>{amount}</p>
            <button className='cart-item-btn' onClick={() => increase(id)}>
               <FaAngleRight />
            </button>
         </div>
         <button className='cart-item-remove' onClick={() => removeItem(id)}>Remove item</button>
      </article>
   )
}

export default CartItem
