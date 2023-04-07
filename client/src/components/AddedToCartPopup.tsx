import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const AddedToCartPopup: React.FC = () => {
  return (
    <div className='addedtocart--container'>
      <div className='addedtocart--icon'>
        <HiOutlineShoppingBag />
      </div>
      <div className='addedtocart--info'>
        <span>Added!</span>
      </div>
    </div>
  )
}

export default AddedToCartPopup