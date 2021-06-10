import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({img, price, title, id}) => {
   return (
      <article className='product-card'>
         <Link className='product-card-link' to={`/products/${id}`}>
            <div className="product-card-img-container">
               <img src={img} alt={title} className='product-card-img' />
            </div>
            <h2 className='product-card-title p-text'>{title}</h2>
            <p className='product-card-price p-text'>${price}</p>
         </Link>
         
      </article>
   )
}

export default ProductCard
