import React from 'react'
import './Copyrights.css';

const Coprrights = () => {
  return (
    <div className='cpyr'>
        <div className='cpytable'>
            <table>
                 <tr>
                    <td>AbeBooks<br/><span>Books, art<br/>& collections</span></td>
                    <td>Amazon Web Services<br/><span>Scalable Cloud<br/>Company Services</span></td>
                    <td>Audible<br/><span>Download<br/>Audio books</span></td>
                    <td>DPReview<br/><span>Digital<br/>Photography</span></td>
                    <td>IMDB<br/><span>Movies,Tv<br/>& Celebrities</span></td>
                </tr>
                <tr style={{marginTop: '20px'}}>
                    <td>Shopbop<br/><span>Designer<br/>Fashion Brands</span></td>
                    <td>Amazon Business<br/><span>Everthing for<br/>Your Bussiness</span></td>
                    <td>Prime Now<br/><span>2 Hour Delivery<br/>On Every Item</span></td>
                    <td>Amazon Prime Music<br/><span>90 Million Songs, ad-free<br/>Over 15 million podcast episodes</span></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div className='lsttable'>
            <ul className='lists'>
                <li><a href='#0'>Conditions of use & Sale</a></li>
                <li><a href='#0'>Privacy Notice</a></li>
                <li><a href='#0'>Interest-Baxsed Ads</a></li>
            </ul>
            <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </div>
    </div>
  )
}

export default Coprrights