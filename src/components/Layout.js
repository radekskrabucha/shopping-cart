import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'

import { useGlobalContext } from '../context'

const Layout = ({children}) => {
   const {state: {isCartOpen}} = useGlobalContext()
   
   return (
      <div className='layout-container'>
         {isCartOpen && <Cart/>}
         <div className="max-width">
            <Header />
         </div>
         <main className='main'>
               {children}
         </main>
         <Footer />
      </div>
   )
}

export default Layout