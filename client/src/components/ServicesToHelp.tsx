import React from 'react'
import faq from '../images/faq.webp'
import payment from '../images/payment.webp'
import delivery from '../images/delivery.jpeg'

const ServicesToHelp: React.FC = () => {
  return (
    <div className='servicestohelp--container'>
        <span className='servicestohelp--header'>Services To Help You Shop</span>
        <div className='servicestohelp--cards'>
            <div className='servicestohelp--card'>
                <span className='servicestohelp--card-title'>Frequently Asked Questions</span>
                <span className='servicestohelp--card-info'>Updates on safe Shopping in our Stores</span>
                <div className='servicestohelp--card-image'>
                    <img src={faq}></img>
                </div>
            </div>
            <div className='servicestohelp--card'>
                <span className='servicestohelp--card-title'>Online Payment Process</span>
                <span className='servicestohelp--card-info'>Updates on sale Shopping in our Stores</span>
                <div className='servicestohelp--card-image'>
                    <img src={payment}></img>
                </div>
            </div>
            <div className='servicestohelp--card'>
                <span className='servicestohelp--card-title'>Home Delivery Options</span>
                <span className='servicestohelp--card-info'>Updates on safe Shopping in our Stores</span>
                <div className='servicestohelp--card-image'>
                    <img src={delivery}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesToHelp