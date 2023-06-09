import React from 'react'
import { Product } from '../interfaces'
import { HiOutlineTrash } from 'react-icons/hi'

interface Props {
    product: Product;
    removeItem: (id: string) => void;
    handleChangeQuantity: (id: string, operation: boolean) => void;
}

const CartItem: React.FC<Props> = ({ product, removeItem, handleChangeQuantity }) => {
  return (
    <div className='cartitem--container'>
        <div className='cartitem--thumbnail'>
            <img src={product.images[0]} alt={product.name}></img>
        </div>
        <div className='cartitem--product-info'>
            <div className='cartitem--name-price'>
                <span className='cartitem--name'>{product.name}</span>
                <span className='cartitem--price'>${product.price * product.cartQuantity}</span>
            </div>
            <div className='cartitem--color-amount'>
                <span className='cartitem--color'>Color: {product.color}</span>
                <div className='cartitem--quantity'>
                    <button 
                        className='cartitem--quantity-sub'
                        onClick={() => handleChangeQuantity(product._id, false)}
                    >-</button>
                    <span className='cartitem--amount'>Quantity: {product.cartQuantity}</span>
                    <button 
                        className='cartitem--quantity-add'
                        onClick={() => handleChangeQuantity(product._id, true)}
                    >+</button>
                </div>
            </div>
            <div className='cartitem--delete' onClick={() => removeItem(product._id)}>
                <div className='cartitem--delete-icon'>
                    <HiOutlineTrash />
                </div>
                <div className='cartitem--delete-text'>Remove</div>
            </div>
        </div>
    </div>
  )
}

export default CartItem