import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { Product } from '../interfaces'
import AddedToCartPopup from './AddedToCartPopup';

interface Props {
  product: Product;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SingleProduct: React.FC<Props> = ({ product, setCartItems }) => {
  const [cartPopupTrigger, setCartPopupTrigger] = useState<boolean>(false);

  const addToCart = () => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem: Product = product;
    const isInCart: boolean = cartItems.some((item) => item._id === newItem._id);

    const newCart: Product[] = isInCart ? (
      cartItems.map(item => {
        if(item._id === newItem._id) {
          return {...item, cartQuantity: item.cartQuantity + 1}
        } else {
          return item;
        }
      })
    ) : (
      [...cartItems, {...newItem, cartQuantity: 1}]
    );

    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartItems(newCart);

    setCartPopupTrigger(!cartPopupTrigger);
  }

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setCartPopupTrigger(false);
    }, 3000);

    return () => clearTimeout(timer);
  },[cartPopupTrigger])

  return (
    <>
    {cartPopupTrigger && <AddedToCartPopup />}
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
      <button className='products--button' onClick={addToCart}>Add to Cart</button>
    </div>
    </>
  )
}

export default SingleProduct