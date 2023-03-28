import React from 'react'
import SingleProduct from './SingleProduct'

const Products: React.FC = () => {
  return (
    <div className='products--container'>
        <span className='products--header'>Headphones For You!</span>
        <div className='products--listofproducts'>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
    </div>
  )
}

export default Products