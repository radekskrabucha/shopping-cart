import React from 'react'
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
                     <a className='social-link' href="/">
                        REFUND POLICY
                     </a>
                  </li>
                  <li>
                     <a className='social-link' href="/">
                        PRIVACY POLICY
                     </a>
                  </li>
                  <li>
                     <a className='social-link' href="/">
                     SHIPPING POLICY
                     </a>
                  </li>
               </ul>
               <ul className="social-links">
                  <li>
                     <a className='social-link' href="/">
                        <FaTwitter />
                     </a>
                  </li>
                  <li>
                     <a className='social-link' href="/">
                     <FaInstagram />
                     </a>
                  </li>
                  <li>
                     <a className='social-link' href="/">
                     <FaFacebook />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer
