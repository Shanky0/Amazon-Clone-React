import React from 'react';
import './images.css';

const Images = () => {
  return (
    <div className='imagesc'>
        <div className='imgcrd'>
            <div className='imgheading'>
                <h5>Starting ₹99 | All you need for your home & kitchen</h5>
            </div>
            <div className='img'>
                <img src={require('../images/image2.jpg')} style={{width: '100%'}} alt=''/>
            </div>
            <div className='offer'>
            <p><a href='#0'>See All Offers</a></p>
            </div>
        </div>
        <div className='imgcrd'>
            <div className='imgheading'>
                <h5>Starting ₹99 | All you need for your home & kitchen</h5>
            </div>
            <div className='img'>
                <img src={require('../images/image2.jpg')} style={{width: '100%'}} alt=''/>
            </div>
            <div className='offer'>
            <p><a href='#0'>See All Offers</a></p>
            </div>
        </div>
        <div className='imgcrd'>
            <div className='imgheading'>
                <h5>Starting ₹99 | All you need for your home & kitchen</h5>
            </div>
            <div className='img'>
                <img src={require('../images/image2.jpg')} style={{width: '100%'}} alt=''/>
            </div>
            <div className='offer'>
            <p><a href='#0'>See All Offers</a></p>
            </div>
        </div>
        <div className='imgcrd'>
            <div className='imgheading'>
                <h5>Starting ₹99 | All you need for your home & kitchen</h5>
            </div>
            <div className='img'>
                <img src={require('../images/image2.jpg')} style={{width: '100%'}} alt=''/>
            </div>
            <div className='offer'>
                <p><a href='#0'>See All Offers</a></p>
            </div>
        </div>        
    </div>
  )
}

export default Images