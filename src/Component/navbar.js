import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='containers'>
    <div className='head'>
        <div className='logo'>
        <a href='#0'>
            <img src={require('../images/icon.png')} alt=''/>
        </a>
        </div>
        <div className='location'>
            <a href='#0' style={{color: 'white'}}>
            <div style={{display: 'flex'}}>
                <div><img src={require('../images/location.jpeg')} style={{height: '20px', marginTop: '15px'}} alt=''/></div>
                <div style={{marginLeft: '2px'}}><span style={{color: '#ddd', fontSize: 'small'}}>Hello</span><br/><span style={{fontSize: '15px'}}>Enter your address</span></div>
            </div>
            </a>
        </div>
        <div className='srch'>
            <div className='cateogries'>
            <select name='category' style={{width: '50px', padding: '1.5% 0%',cursor:"pointer"}} id='categ'>
                <option className='element' value='all' >All</option>
                <option className='element' value='alexa skill'>Alexa Skill</option>
                <option className='element' value='Amazon Devices'>Amazon Devices</option>
                <option className='element' value='Amazon Fashion'>Amazon Fashion</option>
                <option className='element' value='Amazon Fresh'>Amazon Fresh</option>
            </select>
            <input type='text' className='eles' style={{width: '75%'}} /><button id='srcbtn' className='eles'><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </div>
        <div className='lang'>
            <a href='#0'>
            <img src={require('../images/flag.png')} style={{height: '20px'}} alt=''/>&nbsp;
            <img src={require('../images/arrow-204-16.png')} style={{height: '10px'}} alt=''></img>
            </a>
            <div className='dropdown1'>
                <input name='drop' type='radio'/><label>&nbsp; English</label>
                <hr/>
                <input name='drop' type='radio'/><label>&nbsp; हिन्दी-HI</label><br/>
                <input name='drop' type='radio'/><label>&nbsp; தமிழ்-TA</label><br/>
                <input name='drop' type='radio'/><label>&nbsp; తెలుగు-Te</label><br/>
                <input name='drop' type='radio'/><label>&nbsp; मराठी-MR</label><br/>
                <hr/>

                <span style={{color: 'black'}}><img src={require('../images/flag.png')} style={{height:'10px'}} alt=''/>&nbsp;You are Shopping on amazon.in</span>
                <hr/>
            </div>
        </div>
        <div className='hellosign'>
            <a href='#0'>
            <span style={{fontSize: 'small' , color: '#ddd'}}>Hello,Sign in</span><br/><span style={{fontSize: '15px'}}>Account & Lists <img src={require('../images/arrow-204-16.png')} style={{height: '10px'}} alt=''></img></span>
            </a>
            <div className='dropdown2'>
                <div style={{textAlign: 'center'}}>
                    <input type='button' value='Sign in' style={{padding: '0% 3%', backgroundColor: 'yellow', border: '1px solid yellow'}}/><br/>
                    <span style={{color: 'black'}}>New Customers? <a style={{textDecoration: 'none',color: 'blue'}} href='#0'>Start here</a></span>
                </div>
                <hr/>
                <div className='dropdown2_2'>
                    <div className='dropdown2_2_1'>
                        <h5>Your Lists</h5>
                        <li>Create a wish list</li>
                        <li>Wish From Any Website</li>
                        <li>Baby Wishlist</li>
                        <li>Discover your style</li>
                        <li>Explore Showroom</li>
                    </div>
                    <div className='dropdown2_2_2'>
                        <h5>Your Account</h5>
                        <li>Your accounts</li>
                        <li>Your orders</li>
                        <li>Your wishlist</li>
                        <li>Your Recommendations</li>
                        <li>Your Prime membership</li>
                        <li>Your Prime Video</li>
                        <li>Your Subscribers</li>
                        <li>Memberships</li>
                    </div>
                </div>
            </div>
        </div>
        <div className='rtrn'>
        <a href='#0'>
            <span style={{fontSize: 'small' , color: '#ddd'}}>Returns</span><br/>
            <span style={{fontSize: '15px'}} >& Orders</span>
        </a>
        </div>
        <div className='cart'>
            <a href='#0'>
            <img src={require('../images/cart.png')} alt='' style={{height: '30px'}}/><span style={{fontSize: '15px'}}>Cart</span>
            </a>
        </div>
    </div>
    <div className='navbarsec'>
        <div className='nav2category'>
            <div>
                <a href='#0'><i className="fa fa-bars" style={{fontSize: "15px", color: '#ddd'}}></i> All</a>
            </div>
            <div>
                <a href='#0'>Best Sellers</a>
            </div>
            <div>
                <a href='#0'>Today's Deals</a>
            </div>
            <div>
                <a href='#0'>Mobiles</a>
            </div>
            <div>
                <a href='#0'>Books</a>
            </div>
            <div>
                <a href='#0'>Customer Service</a>
            </div>
            <div>
                <a href='#0'>Electronics</a>
            </div>
            <div className='drpprime'>
                <a href='#0'>Prime <img src={require('../images/arrow-204-16.png')} style={{height: '10px'}} alt=''></img></a><br/>
                <div className='drpdwn3'><a href='#0'><img src={require('../images/prime.png')} alt=''/></a></div>
            </div>
            <div>
                <a href='#0'>Fashion</a>
            </div>
            <div>
                <a href='#0'>New Releases</a>
            </div>
        </div>
        <div className='shopnow'>
            <a href='#0'><img src={require('../images/shownow.jpg')} style={{width: '120%', height:'35px'}} alt=''/></a>
        </div>
    </div>
    </div>
  )
}

export default Navbar