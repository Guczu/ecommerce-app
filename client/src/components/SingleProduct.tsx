import React from 'react'
import productimg from '../images/product_thumbnail.png'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

const SingleProduct: React.FC = () => {
  return (
    <div className='products--tile'>
      <div className='products--like'>
        <AiOutlineHeart />
      </div>
      <div className='products--thumbnail'>
        <img src={productimg}></img>
      </div>
      <div className='products--info'>
          <span className='products--name'>Wireless Earbuds, IPX8</span>
          <span className='products--price'>$89.00</span>
      </div>
      <div className='products--description'>
        <span>Short description of product</span>
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