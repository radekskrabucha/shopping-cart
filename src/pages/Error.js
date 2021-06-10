import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Error = () => {
   return (
      <Layout>
         <h2 className='title'>
            Oopsss..we can't find the page you're looking for..
         </h2>
         <Link to='/' className='btn'>
               Take me back home
            </Link>
      </Layout>
   )
}

export default Error