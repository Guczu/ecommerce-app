import React from 'react'
import bannerImage from '../images/banner-image.png'
import Filters from './Filters'
import Products from './Products'
import { Product } from '../interfaces'
import SimilarItemsSlider from './SimilarItemsSlider'

interface Props {
  products: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Home: React.FC<Props> = ({ products, setCartItems }) => {
  return (
    <div className='home--container'>
        <div className='home--banner'>
            <div className='home--banner-text'>
                <span>Grab Upto 50% Off On</span>
                <span>Selected Headphone</span>
                <button>Buy Now</button>
            </div>
            <div className='home--banner-image'>
                <img src={bannerImage} alt="Banner"></img>
            </div>
        </div>

    {/* sorting options */}
    <Filters />

    {/* products */}
    <Products products={products} setCartItems={setCartItems} />

    {/* similar items slider */}
    <SimilarItemsSlider products={products} setCartItems={setCartItems}/>

    {/* footer */}
    </div>
  )
}

export default Home;