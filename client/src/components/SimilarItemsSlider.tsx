import React from 'react'
import { Product } from '../interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleProduct from './SingleProduct';

interface Props {
    products: Product[];
    setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const SimilarItemsSlider: React.FC<Props> = ({ products, setCartItems }) => {
    return (
    <div className='similaritems--container'>
        <span className='similaritems--header'>Similar Items You Might Like</span>
        <Swiper
            modules={[Scrollbar]}
            spaceBetween={0}
            slidesPerView={5}
            scrollbar={{ draggable: true, dragClass: 'swiper-scrollbar-drag' }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='similaritems--products'
            centeredSlides={false}
            centerInsufficientSlides={true}
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
                    <SwiperSlide key={i} className='similaritems--product'>
                        <SingleProduct product={item} setCartItems={setCartItems}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default SimilarItemsSlider