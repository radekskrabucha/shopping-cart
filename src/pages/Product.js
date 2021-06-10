import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useParams } from 'react-router-dom'

const Product = () => {
   const {state: {products}, addItem} = useGlobalContext()
   const {id} = useParams()
   const product = products.find((item) => item.id === parseInt(id))
   if(!product) {
      return (
         <Layout>
            <div className="max-width">
               <div className="product-error">
               <h2 className='title'>Sorry no such product</h2>

            <Link to='/products' className='btn'>
               Go to products
            </Link>
               </div>
            </div>
         </Layout>
      )
   }
   const {title, img, price, desc, id: productId} = product
   return (
      <Layout>
         <div className="max-width">
            <div className="product-container">
               <div className="product-img-container">
                  <img className='product-img' src={img} alt={title} />
               </div>
               <div className="product-info-container">
                  <p>${price}</p>
                  <h2 className='product-title'>{title}</h2>
                  <button onClick={() => addItem(productId)} className='btn'>
                     Add to cart
                  </button>
                  <p className='product-desc'>{desc}</p>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Product
