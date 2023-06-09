import React from 'react'
import bannerImage from '../images/banner-image.png'
import Filters from './Filters'
import Products from './Products'
import { Product } from '../interfaces'
import SimilarItemsSlider from './SimilarItemsSlider'
import ServicesToHelp from './ServicesToHelp'

interface Props {
  products: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isLoading: boolean;
}

const Home: React.FC<Props> = ({ products, setCartItems, setProducts, isLoading }) => {
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
    <Filters products={products} setProducts={setProducts} />

    {/* products */}
    <Products products={products} setCartItems={setCartItems} isLoading={isLoading}/>

    {/* similar items slider */}
    <SimilarItemsSlider setCartItems={setCartItems} isLoading={isLoading}/>

    {/* services to help you shop */}
    <ServicesToHelp />
    
    </div>
  )
}

export default Home;