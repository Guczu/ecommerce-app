import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Product } from './interfaces';
import Cart from './components/Cart';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get('http://localhost:4000/products');
      setProducts(products.data);
    }
    fetchProducts();
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App