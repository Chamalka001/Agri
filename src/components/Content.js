import React from 'react'
import './content.css';

export default function Content() {
  return (
    <div>
    <div className='container'>
      <div className="text-box">
        <h1>Welcome to <span className='spec-text'>AGRI</span></h1>
        <h2>Fresh Vegetables Delivered to Your Doorstep</h2>
        <p>Experience the freshest vegetables directly from local farmers. 
            At AGRI, we connect you to the heart of agriculture 
            by offering sustainable, high-quality produce delivered straight from 
            the fields to your home. Skip the middlemen, support your community, 
            and enjoy the taste of nature with every bite.</p>
      </div>
    </div>
    <div className="content-pic">
        <div>
            <img className='front-img' src='/images/Farmer.png' alt='farmer'
            style={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '400px', 
                borderRadius: '10px', 
                objectFit: 'cover' 
            }}></img>
        </div>
    </div>
    </div>
  )
}
