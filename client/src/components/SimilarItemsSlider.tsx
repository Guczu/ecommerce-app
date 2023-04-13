import React, { useEffect, useState } from 'react'
import { Product } from '../interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleProduct from './SingleProduct';
import fetchAllProducts from '../utils/fetchAllProducts';

interface Props {
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
    isLoading: boolean;
}

const SimilarItemsSlider: React.FC<Props> = ({ setCartItems, isLoading }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts: Product[] = await fetchAllProducts();
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, [])

    return (
    <div className='similaritems--container'>
        <span className='similaritems--header'>Similar Items You Might Like</span>
        <Swiper
            modules={[Scrollbar]}
            spaceBetween={0}
            slidesPerView={5}
            slidesPerGroup={1}
            scrollbar={{ draggable: true, dragClass: 'swiper-scrollbar-drag' }}
            className='similaritems--products'
            centeredSlidesBounds={true}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                },
                1600: {
                    slidesPerView: 5,
                },
              }}
        >
            {products.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <SingleProduct product={item} setCartItems={setCartItems} isLoading={isLoading}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default SimilarItemsSlider