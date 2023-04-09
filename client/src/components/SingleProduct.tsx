import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { Product } from '../interfaces'
import AddedToCartPopup from './AddedToCartPopup';
import { useNavigate } from 'react-router-dom';
import addToCart from '../utils/addToCart';

interface Props {
  product: Product;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SingleProduct: React.FC<Props> = ({ product, setCartItems }) => {
  const [cartPopupTrigger, setCartPopupTrigger] = useState<boolean>(false);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const navigate = useNavigate();

  const addProductToCart = () => {
    const newCart: Product[] = addToCart(product, 1);
    setCartItems(newCart);
    setCartPopupTrigger(!cartPopupTrigger);
  }

  const handleFavourites = () => {
    const favouriteItems: Product[] = JSON.parse(localStorage.getItem('favourites') || '[]');
    const newItem: Product = product;
    const isInFavourites: boolean = favouriteItems.some((item) => item._id === newItem._id);
    let newFavourites: Product[];

    if(!isInFavourites) {
      newFavourites = [...favouriteItems, newItem];
      setIsFavourite(true);
    } else {
      newFavourites = favouriteItems.map(item => {
        if(item._id === newItem._id) {
          setIsFavourite(false);
          return {...item, cartQuantity: -1};
        } else {
          return item;
        }
      }).filter(item => item.cartQuantity !== -1);
    }

    localStorage.setItem('favourites', JSON.stringify(newFavourites));
  }

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setCartPopupTrigger(false);
    }, 3000);

    return () => clearTimeout(timer);
  },[cartPopupTrigger])

  useEffect(() => {
    const favouriteItems: Product[] = JSON.parse(localStorage.getItem('favourites') || '[]');
    const newItem: Product = product;
    const isInFavourites: boolean = favouriteItems.some((item) => item._id === newItem._id);

    isInFavourites ? setIsFavourite(true) : setIsFavourite(false);
  }, [product])

  return (
    <>
    {cartPopupTrigger && <AddedToCartPopup />}
    <div className='products--tile'>
      <div className='products--like' onClick={handleFavourites}>
        {isFavourite ? (
          <AiFillHeart />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
      <div className='products--thumbnail' onClick={() => navigate(`/product/${product._id}`)}>
        <img src={product.images[0]} alt={product.name}></img>
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
      <button className='products--button' onClick={addProductToCart}>Add to Cart</button>
    </div>
    </>
  )
}

export default SingleProduct