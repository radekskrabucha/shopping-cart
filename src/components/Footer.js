import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
   return (
      <footer className='footer'>
         <div className="max-width">
            <div className="footer-container">
               <ul className="policy-links">
                  <li>
                     <Link to='#' className='social-link'>
                        REFUND POLICY
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='social-link'>
                        PRIVACY POLICY
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='social-link'>
                     SHIPPING POLICY
                     </Link>
                  </li>
               </ul>
               <ul className="social-links">
                  <li>
                     <Link to='#' className='social-link'>
                        <FaTwitter />
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='social-link'>
                     <FaInstagram />
                     </Link>
                  </li>
                  <li>
                     <Link to='#' className='social-link'>
                     <FaFacebook />
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer
