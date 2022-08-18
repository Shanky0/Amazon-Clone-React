import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <div className='foot'>
        <div className='btt'>
            <a href="#top" id='btot' >Back to top</a>
        </div>
            <div className='linksft'>
                <table>
                    <thead>
                        <tr>
                            <th>Get to Know Us</th>
                            <th>Connect with Us</th>
                            <th>Make Money with Us</th>
                            <th>Let us help You</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>About us</td>
                            <td>Facebook</td>
                            <td>Sell on Amazon</td>
                            <td>Covid-19 and Amazon</td>
                        </tr>
                        <tr>
                            <td>Careers</td>
                            <td>Twitter</td>
                            <td>Sell under Amazon Accelerator</td>
                            <td>Your Account</td>
                        </tr>
                        <tr>
                            <td>Press Releases</td>
                            <td>Instagram</td>
                            <td>Amazon Globel Selling</td>
                            <td>Returns center</td>
                        </tr>
                        <tr>
                            <td>Amazon Cares</td>
                            <td></td>
                            <td>Become an Affiliate</td>
                            <td>100% Purchase Protection</td>
                        </tr>
                        <tr>
                            <td>Gift A Smile</td>
                            <td></td>
                            <td>Fulfilment by Amazon</td>
                            <td>Amazon download App</td>
                        </tr>
                        <tr>
                            <td>Amazon Science</td>
                            <td></td>
                            <td>Advertise your Products</td>
                            <td>Amazon Assistant Download</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Amazon pay on merchants</td>
                            <td>Help</td>
                        </tr>
                    </tbody>

                </table>
            </div>
            
   </div>
  )
}

export default Footer