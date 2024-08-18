import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import "swiper/css/autoplay";
import Pic2 from '../../assets/pic2.jpg';
import Pic3 from '../../assets/pic3.jpg';
import Pic4 from '../../assets/pic4.jpg';

const PopularDeals = () => {
    return (
        <div className='w-full flex flex-col md:flex-row gap-5 md:gap-0 items-center px-2'>
            <div className="swiper-button-prev hidden md:!block bg-sky-500 cursor-pointer hover:scale-105 text-white rounded-full p-2">
                <AiOutlineArrowLeft />
            </div>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                slidesPerView={2}
                loop={true}
                speed={1500} // Set transition speed to 800ms
                effect="slide" // Default is "slide", you can change it to "fade", "cube", etc.
                direction="horizontal"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    840: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                className='w-full mx-2'
            >
                <SwiperSlide className="rounded-md h-96">
                    <div className='w-full h-full rounded-md'>
                        <img src={Pic2} alt="Pic 2" className='w-full h-full rounded-md object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-md h-96">
                    <div className='w-full h-full rounded-md'>
                        <img src={Pic3} alt="Pic 3" className='w-full h-full rounded-md object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-md h-96">
                    <div className='w-full h-full rounded-md'>
                        <img src={Pic4} alt="Pic 4" className='w-full h-full rounded-md object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-md h-96">
                    <div className='w-full h-full rounded-md'>
                        <img src={Pic2} alt="Pic 2" className='w-full h-full rounded-md object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-md h-96">
                    <div className='w-full h-full rounded-md'>
                        <img src={Pic3} alt="Pic 3" className='w-full h-full rounded-md object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="rounded-md h-96">
                    <div className='w-full h-full rounded-md'>
                        <img src={Pic4} alt="Pic 4" className='w-full h-full rounded-md object-cover' />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next hidden md:!block bg-sky-500 cursor-pointer hover:scale-105 text-white rounded-full p-2">
                <AiOutlineArrowRight />
            </div>
            <div className='md:hidden flex items-center justify-center gap-5'>
                <div className="swiper-button-prev bg-sky-500 cursor-pointer hover:scale-105 text-white rounded-full p-2">
                    <AiOutlineArrowLeft />
                </div>
                <div className="swiper-button-next bg-sky-500 cursor-pointer hover:scale-105 text-white rounded-full p-2">
                    <AiOutlineArrowRight />
                </div>
            </div>
        </div>
    )
}

export default PopularDeals;
