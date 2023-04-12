import React, { useEffect, useState } from 'react';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Product } from '../interfaces';
import AddedToCartPopup from './AddedToCartPopup';
import { useNavigate } from 'react-router-dom';
import addToCart from '../utils/addToCart';
import handleFavourites from '../utils/handleFavourites';
import LoadingProduct from './LoadingProduct';

interface Props {
  product: Product;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  isLoading: boolean;
}

const SingleProduct: React.FC<Props> = ({ product, setCartItems, isLoading }) => {
  const [cartPopupTrigger, setCartPopupTrigger] = useState<boolean>(false);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const navigate = useNavigate();

  const addProductToCart = () => {
    const newCart: Product[] = addToCart(product, 1);
    setCartItems(newCart);
    setCartPopupTrigger(!cartPopupTrigger);
  }

  const handleFavouritesProducts = () => {
    handleFavourites(product);
    setIsFavourite(!isFavourite);
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
    {isLoading ? (
      <LoadingProduct />
    ) : (
      <div className='products--tile'>
      <div className='products--like' onClick={handleFavouritesProducts}>
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
    )}
    </>
  )
}

export default SingleProduct