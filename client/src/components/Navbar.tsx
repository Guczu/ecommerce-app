import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Product } from '../interfaces'

const Navbar: React.FC = () => {
    const [cartAmount, setCartAmount] = useState<number>(0);

    useEffect(() => {
        const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
        cartItems && setCartAmount(cartItems.length)
    },[])

  return (
    <header className='navbar--container'>
        <div className='navbar--logo'>
            <img src={logo}></img>
            <span>Shopcart</span>
        </div>
        <div className='navbar--links'>
            <span>Categories</span>
            <span>Deals</span>
            <span>What's New</span>
            <span>Delivery</span>
        </div>
        <div className='navbar--search'>
            <input type="input" placeholder='Search Product'></input>
            <div className='search--icon'><AiOutlineSearch /></div>
        </div>
        <div className='navbar--cart'>
            {cartAmount !== 0 && (
                <div className='navbar--cart-amount'>
                    {cartAmount}
                </div>
            )}
            <BsCartCheck />
            <span>Cart</span>
        </div>
        <div className='navbar--hamburger'>
            <RxHamburgerMenu />
        </div>
    </header>
  )
}

export default Navbar