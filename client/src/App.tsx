import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Product } from './interfaces';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Favourites from './components/Favourites';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartAmount, setCartAmount] = useState<number>(0);

  useEffect(() => {
      const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(cartItems);
      cartItems && setCartAmount(cartItems.length)
  }, [])

  useEffect(() => {
    const cartQuantity:number = cartItems.reduce((total,item) => {
      return total + item.cartQuantity;
    }, 0)
    setCartAmount(cartQuantity);
  }, [cartItems])

  useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get('http://localhost:4000/products');
      setProducts(products.data);
    }
    fetchProducts();
  }, [])

  return (
    <div className='App'>
      <Navbar cartAmount={cartAmount}/>
      <Routes>
        <Route path="/" element={<Home products={products} setCartItems={setCartItems}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/favourites" element={<Favourites setCartItems={setCartItems} />} />
      </Routes>
    </div>
  )
}

export default App