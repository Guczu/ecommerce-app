import React, { useEffect, useState } from 'react'
import SingleFilter from './SingleFilter'
import { BsFilter } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Product, FiltersList } from '../interfaces'
import applyFilters from '../utils/applyFilters'

interface Props {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Filters: React.FC<Props> = ({ products, setProducts }) => {
  const [filters, setFilters] = useState<FiltersList>({
    category: null,
    price: null,
    color: null,
    sortBy: null
  });

  useEffect(() => {
    applyFilters(filters)
    .then(filteredProducts => setProducts(filteredProducts))
    .catch(error => console.error(error));
  }, [filters])

  return (
    <div className='filters--container'>
      <div className='filters--wrapper'>
        <SingleFilter type={"category"} filters={filters} setFilters={setFilters}/>
        <SingleFilter type={"price"} filters={filters} setFilters={setFilters}/>
        <SingleFilter type={"color"} filters={filters} setFilters={setFilters}/>
      </div>
      <div className='filters--label allfilters'>
          <span>All Filters</span>
          <div className='filters--icon'><BsFilter /></div>
      </div>

      <div className='filters--label empty'>
        <span>Sort by</span>
        <div className='filters--icon'><MdKeyboardArrowDown /></div>
        <div className='filters--dropdown'>
          <span onClick={() => setFilters({...filters, sortBy: 'high-to-low'})}>Price high to low</span>
          <span onClick={() => setFilters({...filters, sortBy: 'low-to-high'})}>Price low to high</span>
        </div>
      </div>
    </div>
  )
}

export default Filters