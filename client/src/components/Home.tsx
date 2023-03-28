import React from 'react'
import Navbar from './Navbar'
import bannerImage from '../images/banner-image.png'
import Filters from './Filters'
import Products from './Products'

const Home: React.FC = () => {
  return (
    <div className='home--container'>
        <Navbar />
        <div className='home--banner'>
            <div className='home--banner-text'>
                <span>Grab Upto 50% Off On</span>
                <span>Selected Headphone</span>
                <button>Buy Now</button>
            </div>
            <div className='home--banner-image'>
                <img src={bannerImage}></img>
            </div>
        </div>

    {/* sorting options */}
    <Filters />

    {/* products */}
    <Products />

    {/* footer */}
    </div>
  )
}

export default Home;