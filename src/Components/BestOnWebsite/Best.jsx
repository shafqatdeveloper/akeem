import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import brandPic from '../../assets/brand.png'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import burgerKing from '../../assets/burgerKing.png'

const Best = () => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                {/* Navigation Arrows and Heading */}
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[95%] flex items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Best on Website</h1>
                        <div className='flex items-center gap-3'>
                            <div className="swiper-button-prev-best-brands hidden md:!block bg-sky-200 cursor-pointer hover:scale-105 text-sky-500 rounded-full p-2">
                                <AiOutlineArrowLeft />
                            </div>
                            <div className="swiper-button-next-best-brands hidden md:!block bg-sky-200 cursor-pointer hover:scale-105 text-sky-500 rounded-full p-2">
                                <AiOutlineArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slides */}
                <div className='w-full flex items-center'>
                    <div className='w-full pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-7 lg:pr-5 pt-5'>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={15}
                            speed={500} // Set transition speed to 800ms
                            effect="slide" // Default is "slide", you can change it to "fade", "cube", etc.
                            direction="horizontal"
                            breakpoints={{
                                0: {
                                    slidesPerView: 2.8,
                                    spaceBetween: 10
                                },
                                649: {
                                    slidesPerView: 4.1,
                                    spaceBetween: 10
                                },
                                1000: {
                                    slidesPerView: 5.1,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 6.1,
                                    spaceBetween: 15
                                },
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next-best-brands',
                                prevEl: '.swiper-button-prev-best-brands',
                            }}
                            className='w-full p-2'
                        >
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-white flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-red-500 flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-green-600 flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-green-700 flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-lime-400 flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-black flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/brand/details'}>
                                    <div className='rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border flex flex-col gap-2 sm:gap-2 md:gap-5 shadow-md'>
                                        <div className='w-full h-24 sm:h-32 md:h-52 bg-lime-500 flex items-center justify-center'>
                                            <img src={burgerKing} alt="Pic 2" className='w-16 sm:w-24 md:w-32 rounded-t-md object-center' />
                                        </div>
                                        <div className='pb-2 md:pb-5 text-center md:pl-5 font-medium text-gray-600 text-sm md:text-lg'>
                                            <h1>Burger King</h1>
                                        </div>

                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Best