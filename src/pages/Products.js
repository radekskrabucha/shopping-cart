import React from 'react'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

import { useGlobalContext } from '../context'

const Products = () => {
   const {state: {products}} = useGlobalContext()
   return (
      <Layout>
         <h2 className='title'>All products</h2>
         <div className="max-width">
            <section className='products-section'>
               {products.map((item) => {
                  return <ProductCard key={item.id} {...item}/>
               })}
            </section>
         </div>
      </Layout>
   )
}

export default Products
