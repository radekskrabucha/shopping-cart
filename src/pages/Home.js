import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

const Home = () => {
   const {state: {products}} = useGlobalContext()
   return (
      <Layout>
         <section className='hero'>
            <div className="max-width">
               <h2 className='hero-title'>
                  HAND MADE LIMITED EDITION CLOTHING AND FOOTWEAR
               </h2>
               <p className='hero-text'>We create unique clothing designs to custom enhancements of classic silhouettes. </p>

            </div>
         </section>
         <section className='featured-section max-width'>
            <h2 className='title'>featured</h2>
            <section className='products-section'>
               {products.filter((item) => item.featured).map((item) => {
                  return <ProductCard key={item.id} {...item}/>
               })}
            </section>
            <Link to='/products' className='btn'>
               See more
            </Link>
         </section>
      </Layout>
   )
}

export default Home
