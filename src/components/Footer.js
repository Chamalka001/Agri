import React from 'react'
import './footer.css';
import { FaFacebook, FaTwitter, FaYoutube, FaGooglePlusG, FaEnvelope } from 'react-icons/fa';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

export default function Footer() {
  return (
    <div>
      <div className='footer'>
      <div className='footer-det'>
        <div>
          <h1>LOGO</h1>
          <p>Slogan Company</p>
        </div>
        <div>
          <p>Weekly themes</p>
          <p>Pre sales</p>
          <p>Submit a ticket</p>
        </div>
        <div>
          <p>Weekly themes</p>
          <p>Pre sales</p>
          <p>Submit a ticket</p>
          <p>Submit a ticket</p>
        </div>
        <div>
          <p>Weekly themes</p>
          <p>Pre sales</p>
          <p>Submit a ticket</p>
        </div>
        <div>
          <p>Weekly themes</p>
          <p>Pre sales</p>
          <p>Submit a ticket</p>
          <p>Submit a ticket</p>
        </div>
      </div>
      
      <hr className='linebreak-footer'/>

      <div className='footer-icons' style={{ display: 'flex', gap: '10px' }}>
      <FaFacebook size={30} color="#4267B2" />  {/* Facebook Icon */}
      <FaTwitter size={30} color="#1DA1F2" />   {/* Twitter Icon */}
      <FaYoutube size={30} color="#FF0000" />   {/* YouTube Icon */}
      <FaGooglePlusG size={30} color="#DB4437" /> {/* Google+ Icon */}
      <FaEnvelope size={30} color="#333" />      {/* Email Icon */}
    </div>
    </div>
    </div>
  )
}

