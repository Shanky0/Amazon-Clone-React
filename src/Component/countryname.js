import React from 'react'
import './countryname.css'

const Countryname = () => {
  return (
    <div className='ctry'>
        <div className='footlang'>
            <div>
                <img src={require('../images/footerlogo.png')} alt=''/>
            </div>
            <div className='langdiv' style={{color: '#ddd',cursor:"pointer"}}><i class="fa fa-globe" aria-hidden="true"></i><span style={{fontSize: '15px'}}>&emsp;English</span></div>
        </div>
        <div className='countryname'>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>france</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherland</li>
            <li>Poland</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
        </div>
    </div>
  )
}

export default Countryname