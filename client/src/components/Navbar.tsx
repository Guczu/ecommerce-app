import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { BsFillBagFill } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxPerson } from 'react-icons/rx'
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SearchProduct from './SearchProduct'
import { Product } from '../interfaces'
import fetchAllProducts from '../utils/fetchAllProducts'

interface Props {
    cartAmount: number;
}

const Navbar: React.FC<Props> = ({ cartAmount }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

    useEffect(() => {
        const searchBar: HTMLElement | null = document.querySelector('.navbar--search-dropdown');
        if(searchText.length && foundProducts.length > 0) {
            searchBar && (searchBar.style.display = 'flex');
        } else {
            searchBar && (searchBar.style.display = 'none');
        }
    }, [searchText])

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts: Product[] = await fetchAllProducts();
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, [])

    useEffect(() => {
        const dropdown = document.querySelector('.navbar--search-dropdown') as HTMLElement;
        if(isSearchFocused && foundProducts.length > 0) {
            dropdown.style.display = 'flex';
        } else {
            setTimeout(() => {
                dropdown.style.display = 'none';
            }, 100)
        }
    }, [isSearchFocused])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value;
        setSearchText(searchText);

        const foundProducts: Product[] = products.filter(product => (
            product.name.toLowerCase().includes(searchText.toLowerCase()) || 
            product.description.toLowerCase().includes(searchText.toLowerCase())
        ));

        setFoundProducts(foundProducts);
    }

  return (
    <header className='navbar--container'>
        <Link to="/" className='navbar--logo'>
            <img src={logo} alt="Shopping cart logo"></img>
            <span>Shopcart</span>
        </Link>
        <div className='navbar--links'>
            <span>Categories</span>
            <span>Deals</span>
            <span>What's New</span>
            <span>Delivery</span>
        </div>
        <div className='navbar--search'>
            <label htmlFor="searchInput"></label>
            <input 
                type="input" 
                id="searchInput" 
                value={searchText} 
                onChange={(e) => handleSearch(e)} 
                placeholder='Search Product'
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                ></input>
            <div className='navbar--search-dropdown'>
                {foundProducts.length > 0 && (
                    foundProducts.slice(0,5).map((product, i) => {
                        return (
                            <SearchProduct key={i} product={product} setSearchText={setSearchText} />
                        )
                    })
                )}
            </div>
            <div className='search--icon'><AiOutlineSearch /></div>
        </div>
        <div className='navbar--account'><RxPerson /></div>
        <Link to='/favourites' className='navbar--favourites'><AiOutlineHeart /></Link>
        <Link to="/cart" className='navbar--cart'>
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
                <Link to='/favourites'>Favourites</Link>
                <Link to='/cart'>Cart</Link>
                <a href='#'>Account</a>
            </div>
        </div>
    </header>
  )
}

export default Navbar