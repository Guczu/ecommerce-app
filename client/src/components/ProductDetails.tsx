import React, { useState, useEffect } from 'react'
import { Product } from '../interfaces'
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineAssignmentReturned } from 'react-icons/md';

interface Props {
    products: Product[];
}

const ProductDetails: React.FC<Props> = ({ products }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const {id} = useParams();

    useEffect(() => {
        const foundProduct = products.find(obj => obj._id === id);
        foundProduct && setProduct(foundProduct);
    }, [products])

  return (
    <div className='productdetails--container'>
        <div className='productdetails--wrapper'>
            <div className='productdetails--wrapper-left'>
                <div className='productdetails--thumbnail'>
                    <img src={product && product.images[0] || undefined} alt={product && product.name || "Product image"}></img>
                </div>
            </div>
            <div className='productdetails--wrapper-right'>
                <span className='productdetails--name'>{product && product.name}</span>
                <span className='productdetails--description'>{product && product.description}</span>
                <div className='productdetails--review'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>(121)</span>
                </div>
                <hr></hr>
                <span className='productdetails--price'>${product && product.price} or {product && product.price/5}/month</span>
                <span className='productdetails--price-info'>Suggested payments with 6 months special financing</span>
                <hr></hr>
                <span className='productdetails--colors-header'>Choose a Color</span>
                <div className='productdetails--colors'></div>
                <hr></hr>
                <div className='productdetails--quantity'>
                    <button className='productdetails--quantity-sub'>-</button>
                    <div className='productdetails--quantity-amount'>0</div>
                    <button className='productdetails--quantity-add'>+</button>
                    <span className='productdetails--quantity-info'>Only <span> {product && product.amount} items</span> Left!</span>
                </div>
                <div className='productdetails--buy-buttons'>
                    <button className='productdetails--buy-now'>Buy Now</button>
                    <button className='productdetails--buy-addtocart'>Add to Cart</button>
                </div>
                <div className='productdetails--delivery'>
                    <div className='productdetails--delivery-header'>
                    <div><TbTruckDelivery /></div>
                        <span>Free Delivery</span>
                    </div>
                    <div className='productdetails--delivery-info'>
                        <span><u>Enter your Postal code for Delivery Availability</u></span>
                    </div>
                </div>
                <div className='productdetails--return'>
                    <div className='productdetails--return-header'>
                        <div><MdOutlineAssignmentReturned /></div>
                        <span>Return Delivery</span>
                    </div>
                    <div className='productdetails--return-info'>
                        <span>Free 30days Delivery Returns. <u>Details</u></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails