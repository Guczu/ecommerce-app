import React from 'react'
import productimg from '../images/product_thumbnail.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { Product } from '../interfaces'

interface Props {
  product: Product;
}

const SingleProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className='products--tile'>
      <div className='products--like'>
        <AiOutlineHeart />
      </div>
      <div className='products--thumbnail'>
        <img src={product.images[0]}></img>
      </div>
      <div className='products--info'>
          <span className='products--name'>{product.name}</span>
          <span className='products--price'>${product.price}</span>
      </div>
      <div className='products--description'>
        <span>{product.description}</span>
      </div>
      <div className='products--rating'>
        <div>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <span>(121)</span>
      </div>
      <button className='products--button'>Add to Cart</button>
    </div>
  )
}

export default SingleProduct