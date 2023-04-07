import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxPerson } from 'react-icons/rx'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface Props {
    cartAmount: number;
}

const Navbar: React.FC<Props> = ({ cartAmount }) => {
  return (
    <header className='navbar--container'>
        <Link to="/" className='navbar--logo'>
            <img src={logo}></img>
            <span>Shopcart</span>
        </Link>
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
        <div className='navbar--account'><RxPerson /></div>
        <div className='navbar--favourites'><AiOutlineHeart /></div>
        <Link to="cart" className='navbar--cart'>
            {cartAmount !== 0 && (
                <div className='navbar--cart-amount'>
                    {cartAmount}
                </div>
            )}
            {cartAmount > 0 ? (
                <>
                    <BsFillBagFill />
                </>
            ) : (
                <>
                    <BsBag />
                </>
            )}
        </Link>
        <div className='navbar--hamburger'>
            <RxHamburgerMenu />
            <div className='navbar--hamburger-dropdown'>
                <a href='#'>Categories</a>
                <a href='#'>Deals</a>
                <a href='#'>What's New</a>
                <a href='#'>Delivery</a>
                <a href='#'>Favourites</a>
                <Link to='/cart'>Cart</Link>
                <a href='#'>Account</a>
            </div>
        </div>
    </header>
  )
}

export default Navbar