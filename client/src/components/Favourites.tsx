import React, { useEffect, useState } from 'react'
import { Product } from '../interfaces';
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai'

interface Props {
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Favourites: React.FC<Props> = ({ setCartItems }) => {
    const [favouriteItems, setFavouriteItems] = useState<Product[] | []>([]);

    useEffect(() => {
        const favItems: Product[] = JSON.parse(localStorage.getItem('favourites') || '[]');
        setFavouriteItems(favItems);
    }, [])

    const showFavouriteItems = favouriteItems.map((item,i) => {
        return (
            <SingleProduct key={i} product={item} setCartItems={setCartItems}/>
        )
    })

  return (
    <div className='favourites--container'>
        {favouriteItems.length > 0 && <span className='favourites--header'>Your favourite products</span>}
        <div className='favourites--listofproducts'>
            {favouriteItems.length < 1 ? (
                <div className='favourites--empty'>
                    <span>No favourite products!</span>
                    <div><AiFillHeart /></div>
                    <Link to="/" className='favourites--empty-button'>Continue shopping</Link>
                </div>
            ) : (
                showFavouriteItems
            )}
        </div>
    </div>
  )
}

export default Favourites