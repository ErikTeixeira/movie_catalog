import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import MovieCard from '../MovieCard';

import "./SwiperMain.css";

const imgUrl = import.meta.env.VITE_IMG;

const CustomSwiper = ({ items, slidesPerView, delayNumber, movieImage, showPagination }) => {
    return (
        <div className='swiper-container' >
            <Swiper
                className='swiper-slide' 
                slidesPerView={slidesPerView}
                pagination={showPagination ? { clickable: true } : false}
                navigation
                loop
                autoplay={{ delay: delayNumber }}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard movie={item} movieImage={movieImage} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomSwiper;
