import React from 'react'
import SingleProduct from './SingleProduct'
import { Product } from '../interfaces'

interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
  const showProducts = products.map((product, i) => (
    <SingleProduct key={i} product={product} />
  ))

  return (
    <div className='products--container'>
        <span className='products--header'>Products For You!</span>
        <div className='products--listofproducts'>
          {showProducts}
        </div>
    </div>
  )
}

export default Products