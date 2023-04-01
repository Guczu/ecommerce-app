import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import CartItem from './CartItem'
import { Product } from '../interfaces'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { MdOutlineExpandMore } from 'react-icons/md'
import { MdOutlineExpandLess } from 'react-icons/md'

const Cart: React.FC = () => {
    const [productsInCart, setProductsInCart] = useState<Product[] | []>([]);
    const [expandCartItems, setExpandCartItems] = useState<boolean>(false);

    useEffect(() => {
        const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
        setProductsInCart(cartItems);
    }, [])

    const removeItem = (id: string) => {
        console.log(productsInCart);
        const newProductsInCart: Product[] = productsInCart.filter(product => product._id !== id);
        console.log(newProductsInCart)
        setProductsInCart(newProductsInCart);
        localStorage.setItem('cart', JSON.stringify(newProductsInCart));
    }

    const expandCart = () => {
        setExpandCartItems(!expandCartItems);
    }

    const showProducts = productsInCart.slice(0, expandCartItems === false ? 2 : productsInCart.length).map((product, i) => (
        <CartItem key={i} product={product} removeItem={removeItem}/>
      ))

  return (
    <div className='cart--container'>
        <Navbar />
        {productsInCart.length !== 0 ? (
            <div className='cart--wrapper'>
            <div className='cart--left-wrapper'>
                <div className='cart--items'>
                    <div className='cart--items-title'>
                        <div className='cart--items-total'>Review Item And Shipping</div>
                        <div className='cart--items-total'>Total price: $9</div>
                    </div>
                    {showProducts}
                    <div className='cart--items-expand' onClick={expandCart}>
                        {productsInCart.length > 2 ? (
                            expandCartItems ? (
                                <>
                                    <span>Hide products</span>
                                    <div><MdOutlineExpandLess /></div>
                                </>
                            ) : (
                                <>
                                    <span>Show all products</span>
                                    <div><MdOutlineExpandMore /></div>
                                </>
                            )
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className='cart--delivery-info'>
                    <div className='cart--title-label'>
                        <span>Delivery information</span>
                        <button>Edit Information</button>
                    </div>
                    <div className='cart--personal-info'>
                        <div className='cart--personal-label'>Name:</div>
                        <span>Information</span>
                    </div>
                    
                    <div className='cart--personal-info'>
                        <div className='cart--personal-label'>Address:</div>
                        <span>Information</span>
                    </div>
                    
                    <div className='cart--personal-info'>
                        <div className='cart--personal-label'>City:</div>
                        <span>Information</span>
                    </div>
                    
                    <div className='cart--personal-info'>
                        <div className='cart--personal-label'>Zip Code:</div>
                        <span>Information</span>
                    </div>
                    
                    <div className='cart--personal-info'>
                        <div className='cart--personal-label'>Mobile:</div>
                        <span>Information</span>
                    </div>
                    
                    <div className='cart--personal-info'>
                        <div className='cart--personal-label'>Email:</div>
                        <span>Information</span>
                    </div>
                    
                </div>
            </div>
            <div className='cart--right-wrapper'>
                <div className='cart--summary'>
                    <span>Order Summary</span>
                    <div className='cart--discount-code'>
                        <input type="text" placeholder="Enter Coupon Code"></input>
                        <button>Apply coupon</button>
                    </div>
                    <span>Payment Details</span>
                    <div className='cart--payment'>
                        <input type="radio" name="payment"></input>
                        <span>Cash on Delivery</span>
                    </div>
                    <div className='cart--payment'>
                        <input type="radio" name="payment"></input>
                        <span>Shopcart Card</span>
                    </div>
                    <div className='cart--payment'>
                        <input type="radio" name="payment"></input>
                        <span>Paypal</span>
                    </div>
                    <div className='cart--payment'>
                        <input type="radio" name="payment"></input>
                        <span>Credit or Debit card</span>
                    </div>
                    <div className='cart--submit'>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
        ) : (
            <div className='cart--empty'>
                <span>You cart is empty!</span>
                <div><HiOutlineShoppingBag /></div>
                <Link to="/" className='cart--empty-button'>Continue shopping</Link>
            </div>
        )}
    </div>
  )
}

export default Cart