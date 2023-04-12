import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='footer--container'>
        <div className='footer--cols'>
            <div className='footer--col'>
                <span>HELP AND INFORMATION</span>
                <a>Help</a>
                <a>Track order</a>
                <a>Delivery & returns</a>
                <a>Shopcart Premier</a>
                <a>10% Student Discount</a>
                <a>Sitemap</a>
            </div>
            <div className='footer--col'>
                <span>ABOUT SHOPCART</span>
                <a>About us</a>
                <a>Careers at Shopcart</a>
                <a>Corporate responsibility</a>
                <a>Investors' site</a>
            </div>
            <div className='footer--col'>
                <span>MORE FROM SHOPCART</span>
                <a>Mobile and Shopcart apps</a>
                <a>Shopcart Marketplace</a>
                <a>E-gifts cards</a>
                <a>Black Friday</a>
                <a>Refer A Friend</a>
            </div>
            <div className='footer--col'>
                <span>SHOPPING FROM</span>
                <p className='footer-col-location'>You're in POLAND | <b>CHANGE</b></p>
            </div>
        </div>
        <div className='footer--domain'>
            <span>2023 SHOPCART</span>
            <div>
                <a>Privacy & Cookies</a>|
                <a>Ts&Cs</a>|
                <a>Accessibility</a>
            </div>
        </div>
    </div>
  )
}

export default Footer