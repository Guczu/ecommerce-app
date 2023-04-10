import React from 'react'
import { Product } from '../interfaces'
import { useNavigate } from 'react-router-dom';

interface Props {
    product: Product;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchProduct: React.FC<Props> = ({ product, setSearchText }) => {
    const navigate = useNavigate();

    const handleRoute = () => {
        setSearchText('');
        navigate(`/product/${product._id}`);
    }

  return (
    <div className='searchproduct--container' onClick={handleRoute}>
        <div className='searchproduct--thumbnail'>
            <img src={product.images[0]}></img>
        </div>
        <div className='searchproduct--info'>
            <div className='searchproduct--name'>{product.name}</div>
            <div className='searchproduct--price'>${product.price}</div>
        </div>
    </div>
  )
}

export default SearchProduct