import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Product, FiltersList } from '../interfaces';
import fetchAllProducts from '../utils/fetchAllProducts';

interface Props {
    type: string;
    filters: FiltersList;
    setFilters: React.Dispatch<React.SetStateAction<FiltersList>>;
}

const SingleFilter: React.FC<Props> = ({ type, filters, setFilters }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(0);

  const unsortedFilters: string[] = products.map(product => product[type]);
  const sortedFilters: string[] = unsortedFilters.filter((nameOfFilter, index) => {
    return unsortedFilters.indexOf(nameOfFilter) === index;
  });

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Product[] = await fetchAllProducts();
      setProducts(fetchedProducts)
    }
    fetchProducts();
  }, [])

  const handlePriceSort = () => {
    setFilters({...filters, price: [priceFrom, priceTo]});
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const checkboxName = e.target.name;

    if (e.target.checked) {
      setFilters(prevFilters => ({
        ...prevFilters,
        [type]: [...(prevFilters[type] || []), checkboxName]
      }));
    } else {
      setFilters(prevFilters => ({
        ...prevFilters,
        [type]: (prevFilters[type] || []).filter((filter: string) => filter !== checkboxName)
      }));
    }
  }

  return (
    <div className='filters--label'>
        <span>{type.slice(0,1).toUpperCase() + type.slice(1)}</span>
        <div className='filters--icon'><MdKeyboardArrowDown /></div>
        <div className='filters--dropdown'>
          <form onSubmit={e => e.preventDefault()}>
            {type !== 'price' ? sortedFilters.map((filter, i) => {
              return (
                <React.Fragment key={i}>
                  <label>
                    <input type='checkbox' name={filter} onChange={(e) => handleCheckboxChange(e)}/>
                    {filter}
                  </label>
                </React.Fragment>
              )
            }) : (
              <>
                <label htmlFor="from">From:</label>
                <input type="number" autoComplete="off" id="from" name="from" onChange={(e) => setPriceFrom(parseInt(e.target.value))}></input>
                <label htmlFor="to">To:</label>
                <input type="number" autoComplete="off" id="to" name="to" onChange={(e) => setPriceTo(parseInt(e.target.value))}></input>
                <button onClick={handlePriceSort}>Apply</button>
              </>
            )}
          </form>
        </div>
    </div>
  )
}

export default SingleFilter