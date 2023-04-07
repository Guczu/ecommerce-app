import React, { useState } from 'react'
import SingleProduct from './SingleProduct'
import { Product } from '../interfaces'

interface Props {
  products: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Products: React.FC<Props> = ({ products, setCartItems }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showProducts = products.slice((currentPage-1)*productsPerPage,currentPage*productsPerPage).map((product, i) => (
    <SingleProduct key={i} product={product} setCartItems={setCartItems} />
  ))

  return (
    <div className='products--container'>
        <span className='products--header'>Products For You!</span>
        <div className='products--listofproducts'>
          {showProducts}
        </div>
        <div className='products--pagination'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} className='products--pagination-button' onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ))}
        </div>
    </div>
  )
}

export default Products