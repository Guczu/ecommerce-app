import React, { useEffect, useRef, useState } from 'react'
import SingleProduct from './SingleProduct'
import { Product } from '../interfaces'

interface Props {
  products: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  isLoading: boolean;
}

const Products: React.FC<Props> = ({ products, setCartItems, isLoading }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [productsPerPage, setProductsPerPage] = useState<number>(10);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const scrollToProducts = useRef<HTMLInputElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showProducts = products.slice((currentPage-1)*productsPerPage,currentPage*productsPerPage).map((product, i) => (
    <SingleProduct key={i} product={product} setCartItems={setCartItems} isLoading={isLoading} />
  ))

  useEffect(() => {
    if(isMounted) {
      scrollToProducts?.current?.scrollIntoView({behavior: 'smooth'});
    }
    setIsMounted(true);
  }, [currentPage])

  return (
    <div className='products--container' ref={scrollToProducts}>
        <span className='products--header'>Products For You!</span>
        <div className='products--listofproducts'>
          {showProducts}
        </div>
        <div className='products--pagination'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} className={currentPage === page ? 'products--pagination-button green-button' : 'products--pagination-button'} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ))}
        </div>
    </div>
  )
}

export default Products