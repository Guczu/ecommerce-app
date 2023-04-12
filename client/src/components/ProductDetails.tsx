import React, { useState, useEffect } from 'react';
import { Product } from '../interfaces';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineAssignmentReturned } from 'react-icons/md';
import addToCart from '../utils/addToCart';
import AddedToCartPopup from './AddedToCartPopup';
import handleFavourites from '../utils/handleFavourites';

interface Props {
    products: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductDetails: React.FC<Props> = ({ products, setCartItems }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [itemCounter, setItemCounter] = useState<number>(1);
    const [cartPopupTrigger, setCartPopupTrigger] = useState<boolean>(false);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const {id} = useParams();

    useEffect(() => {
        const foundProduct = products.find(obj => obj._id === id);
        foundProduct && setProduct(foundProduct);
    }, [products])

    const handleCounter = (operation: boolean) => {
        if(product) {
            operation ? itemCounter < product.amount && setItemCounter(itemCounter + 1) : itemCounter > 1 && setItemCounter(itemCounter - 1);
        }
    }

    const addProductToCart = () => {
        if(product) {
            const newCart: Product[] = addToCart(product, itemCounter);
            setCartItems(newCart);
            setCartPopupTrigger(!cartPopupTrigger);
        }
    }

    const handleFavouritesProducts = () => {
        if(product) {
            handleFavourites(product);
            setIsFavourite(!isFavourite);
        }
    }

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
          setCartPopupTrigger(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      },[cartPopupTrigger])

      useEffect(() => {
        if(product) {
            const favouriteItems: Product[] = JSON.parse(localStorage.getItem('favourites') || '[]');
            const newItem: Product = product;
            const isInFavourites: boolean = favouriteItems.some((item) => item._id === newItem._id);
        
            isInFavourites ? setIsFavourite(true) : setIsFavourite(false);
        }
      }, [product])

  return (
    <>
    {cartPopupTrigger && itemCounter !== 0 && <AddedToCartPopup />}
    <div className='productdetails--container'>
        <div className='productdetails--wrapper'>
            <div className='productdetails--wrapper-left'>
                <div className='productdetails--thumbnail'>
                    <div className='productdetails--like' onClick={handleFavouritesProducts}>
                    {isFavourite ? (
                        <AiFillHeart />
                        ) : (
                        <AiOutlineHeart />
                        )}
                    </div>
                    <img src={product && product.images[0] || undefined} alt={product && product.name || "Product image"}></img>
                </div>
            </div>
            <div className='productdetails--wrapper-right'>
                <span className='productdetails--name'>{product && product.name}</span>
                <span className='productdetails--description'>{product && product.description}</span>
                <div className='productdetails--review'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>(121)</span>
                </div>
                <hr></hr>
                <span className='productdetails--price'>${product && product.price} or {product && product.price/5}/month</span>
                <span className='productdetails--price-info'>Suggested payments with 6 months special financing</span>
                <hr></hr>
                <span className='productdetails--colors-header'>Choose a Color</span>
                <div className='productdetails--colors'></div>
                <hr></hr>
                <div className='productdetails--quantity'>
                    <button className='productdetails--quantity-sub' onClick={() => handleCounter(false)}>-</button>
                    <div className='productdetails--quantity-amount'>{itemCounter}</div>
                    <button className='productdetails--quantity-add' onClick={() => handleCounter(true)}>+</button>
                    <span className='productdetails--quantity-info'>Only <span> {product && product.amount} items</span> Left!</span>
                </div>
                <div className='productdetails--buy-buttons'>
                    <button className='productdetails--buy-now'>Buy Now</button>
                    <button className='productdetails--buy-addtocart' onClick={addProductToCart}>Add to Cart</button>
                </div>
                <div className='productdetails--delivery'>
                    <div className='productdetails--delivery-header'>
                    <div><TbTruckDelivery /></div>
                        <span>Free Delivery</span>
                    </div>
                    <div className='productdetails--delivery-info'>
                        <span><u>Enter your Postal code for Delivery Availability</u></span>
                    </div>
                </div>
                <div className='productdetails--return'>
                    <div className='productdetails--return-header'>
                        <div><MdOutlineAssignmentReturned /></div>
                        <span>Return Delivery</span>
                    </div>
                    <div className='productdetails--return-info'>
                        <span>Free 30days Delivery Returns. <u>Details</u></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails