import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import "swiper/css/autoplay";
import foodImg1 from '../../assets/food1.jpg'
import foodImg2 from '../../assets/food2.jpg'
import foodImg3 from '../../assets/food3.jpg'
import foodImg4 from '../../assets/food4.jpg'
import foodImg5 from '../../assets/food5.jpg'
import foodImg6 from '../../assets/food6.jpg'
import { Link } from 'react-router-dom'
import { FaTicketAlt } from 'react-icons/fa';
import { BsAlignTop, BsEmojiSmile } from 'react-icons/bs';

const HomeCooking = () => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                {/* Navigation Arrows and Heading */}
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[95%] flex items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Home Cooking</h1>
                        <div className='flex items-center gap-3'>
                            <Link to={'/discounted-deals/all'} className=' text-sky-500 md:pr-2'>See all</Link>
                            <div className="swiper-button-prev-home-cooking hidden md:!block bg-sky-200 cursor-pointer hover:scale-105 text-sky-500 rounded-full p-2">
                                <AiOutlineArrowLeft />
                            </div>
                            <div className="swiper-button-next-home-cooking hidden md:!block bg-sky-200 cursor-pointer hover:scale-105 text-sky-500 rounded-full p-2">
                                <AiOutlineArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slides */}
                <div className='w-full flex items-center'>
                    <div className='w-full pl-2 sm:pl-3 md:pl-4 lg:pl-6 xl:pl-7 pt-5'>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={15}
                            loop={true}
                            speed={500} // Set transition speed to 800ms
                            effect="slide" // Default is "slide", you can change it to "fade", "cube", etc.
                            direction="horizontal"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 10
                                },
                                600: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 10
                                },
                                768: {
                                    slidesPerView: 3.1,
                                    spaceBetween: 15
                                },
                                1200: {
                                    slidesPerView: 4.2,
                                    spaceBetween: 15
                                }
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next-home-cooking',
                                prevEl: '.swiper-button-prev-home-cooking',
                            }}

                            className='w-full p-2'
                        >
                            <SwiperSlide className="rounded-md">
                                <Link to={'/details'} className='w-full relative shadow-md'>
                                    <div className='rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                                        {/* Overlay text */}
                                        <div className='flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-500 text-white absolute top-4 left-4 text-xs'>
                                            <FaTicketAlt />
                                            <span className='flex items-center'>
                                                0
                                                <BsAlignTop />
                                            </span>
                                            <p>delivery free</p>
                                        </div>
                                        <img src={foodImg1} alt="Pic 2" className='w-full h-44 rounded-t-md object-cover' />
                                        <div className='border-l border-r border-b rounded-b-md'>
                                            {/* Typography Details */}
                                            <div className='w-full border-b border-b-gray-300 border-dashed'>
                                                <div className='p-4 flex items-center justify-between'>
                                                    <div className='text-gray-700'>
                                                        <h1 className='font-semibold text-lg'>Burger King Shymkent</h1>
                                                        <p className='text-sm text-gray-400'>Taste is King </p>
                                                    </div>
                                                    <div className='flex flex-col items-center bg-sky-50 text-sky-500 text-sm rounded-md px-2 py-0.5'>
                                                        <span>35-45</span>
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className='py-2.5 px-4 flex items-center gap-4 text-xs'>
                                                <div className='bg-sky-500 rounded-lg px-1 text-white italic'>
                                                    w+
                                                </div>
                                                <div className='flex items-center gap-1 text-sky-500 font-medium'>
                                                    KZT
                                                    <span>0</span>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    <BsAlignTop className='text-gray-600' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                </div>
                                                <div className='flex items-center gap-2 text-gray-500'>
                                                    <BsEmojiSmile />
                                                    <span>8.2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/details'} className='w-full relative shadow-md'>
                                    <div className='rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                                        {/* Overlay text */}
                                        <div className='flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-500 text-white absolute top-4 left-4 text-xs'>
                                            <FaTicketAlt />
                                            <span className='flex items-center'>
                                                0
                                                <BsAlignTop />
                                            </span>
                                            <p>delivery free</p>
                                        </div>
                                        <img src={foodImg2} alt="Pic 2" className='w-full h-44 rounded-t-md object-cover' />
                                        <div className='border-l border-r border-b rounded-b-md'>
                                            {/* Typography Details */}
                                            <div className='w-full border-b border-b-gray-300 border-dashed'>
                                                <div className='p-4 flex items-center justify-between'>
                                                    <div className='text-gray-700'>
                                                        <h1 className='font-semibold text-lg'>Burger King Shymkent</h1>
                                                        <p className='text-sm text-gray-400'>Taste is King </p>
                                                    </div>
                                                    <div className='flex flex-col items-center bg-sky-50 text-sky-500 text-sm rounded-md px-2 py-0.5'>
                                                        <span>35-45</span>
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className='py-2.5 px-4 flex items-center gap-4 text-xs'>
                                                <div className='bg-sky-500 rounded-lg px-1 text-white italic'>
                                                    w+
                                                </div>
                                                <div className='flex items-center gap-1 text-sky-500 font-medium'>
                                                    KZT
                                                    <span>0</span>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    <BsAlignTop className='text-gray-600' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                </div>
                                                <div className='flex items-center gap-2 text-gray-500'>
                                                    <BsEmojiSmile />
                                                    <span>8.2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/details'} className='w-full relative shadow-md'>
                                    <div className='rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                                        {/* Overlay text */}
                                        <div className='flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-500 text-white absolute top-4 left-4 text-xs'>
                                            <FaTicketAlt />
                                            <span className='flex items-center'>
                                                0
                                                <BsAlignTop />
                                            </span>
                                            <p>delivery free</p>
                                        </div>
                                        <img src={foodImg3} alt="Pic 2" className='w-full h-44 rounded-t-md object-cover' />
                                        <div className='border-l border-r border-b rounded-b-md'>
                                            {/* Typography Details */}
                                            <div className='w-full border-b border-b-gray-300 border-dashed'>
                                                <div className='p-4 flex items-center justify-between'>
                                                    <div className='text-gray-700'>
                                                        <h1 className='font-semibold text-lg'>Burger King Shymkent</h1>
                                                        <p className='text-sm text-gray-400'>Taste is King </p>
                                                    </div>
                                                    <div className='flex flex-col items-center bg-sky-50 text-sky-500 text-sm rounded-md px-2 py-0.5'>
                                                        <span>35-45</span>
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className='py-2.5 px-4 flex items-center gap-4 text-xs'>
                                                <div className='bg-sky-500 rounded-lg px-1 text-white italic'>
                                                    w+
                                                </div>
                                                <div className='flex items-center gap-1 text-sky-500 font-medium'>
                                                    KZT
                                                    <span>0</span>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    <BsAlignTop className='text-gray-600' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                </div>
                                                <div className='flex items-center gap-2 text-gray-500'>
                                                    <BsEmojiSmile />
                                                    <span>8.2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/details'} className='w-full relative shadow-md'>
                                    <div className='rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                                        {/* Overlay text */}
                                        <div className='flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-500 text-white absolute top-4 left-4 text-xs'>
                                            <FaTicketAlt />
                                            <span className='flex items-center'>
                                                0
                                                <BsAlignTop />
                                            </span>
                                            <p>delivery free</p>
                                        </div>
                                        <img src={foodImg4} alt="Pic 2" className='w-full h-44 rounded-t-md object-cover' />
                                        <div className='border-l border-r border-b rounded-b-md'>
                                            {/* Typography Details */}
                                            <div className='w-full border-b border-b-gray-300 border-dashed'>
                                                <div className='p-4 flex items-center justify-between'>
                                                    <div className='text-gray-700'>
                                                        <h1 className='font-semibold text-lg'>Burger King Shymkent</h1>
                                                        <p className='text-sm text-gray-400'>Taste is King </p>
                                                    </div>
                                                    <div className='flex flex-col items-center bg-sky-50 text-sky-500 text-sm rounded-md px-2 py-0.5'>
                                                        <span>35-45</span>
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className='py-2.5 px-4 flex items-center gap-4 text-xs'>
                                                <div className='bg-sky-500 rounded-lg px-1 text-white italic'>
                                                    w+
                                                </div>
                                                <div className='flex items-center gap-1 text-sky-500 font-medium'>
                                                    KZT
                                                    <span>0</span>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    <BsAlignTop className='text-gray-600' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                </div>
                                                <div className='flex items-center gap-2 text-gray-500'>
                                                    <BsEmojiSmile />
                                                    <span>8.2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/details'} className='w-full relative shadow-md'>
                                    <div className='rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                                        {/* Overlay text */}
                                        <div className='flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-500 text-white absolute top-4 left-4 text-xs'>
                                            <FaTicketAlt />
                                            <span className='flex items-center'>
                                                0
                                                <BsAlignTop />
                                            </span>
                                            <p>delivery free</p>
                                        </div>
                                        <img src={foodImg5} alt="Pic 2" className='w-full h-44 rounded-t-md object-cover' />
                                        <div className='border-l border-r border-b rounded-b-md'>
                                            {/* Typography Details */}
                                            <div className='w-full border-b border-b-gray-300 border-dashed'>
                                                <div className='p-4 flex items-center justify-between'>
                                                    <div className='text-gray-700'>
                                                        <h1 className='font-semibold text-lg'>Burger King Shymkent</h1>
                                                        <p className='text-sm text-gray-400'>Taste is King </p>
                                                    </div>
                                                    <div className='flex flex-col items-center bg-sky-50 text-sky-500 text-sm rounded-md px-2 py-0.5'>
                                                        <span>35-45</span>
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className='py-2.5 px-4 flex items-center gap-4 text-xs'>
                                                <div className='bg-sky-500 rounded-lg px-1 text-white italic'>
                                                    w+
                                                </div>
                                                <div className='flex items-center gap-1 text-sky-500 font-medium'>
                                                    KZT
                                                    <span>0</span>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    <BsAlignTop className='text-gray-600' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                </div>
                                                <div className='flex items-center gap-2 text-gray-500'>
                                                    <BsEmojiSmile />
                                                    <span>8.2</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>


                            </SwiperSlide>
                            <SwiperSlide className="rounded-md">
                                <Link to={'/details'} className='w-full relative shadow-md'>
                                    <div className='rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                                        {/* Overlay text */}
                                        <div className='flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-500 text-white absolute top-4 left-4 text-xs'>
                                            <FaTicketAlt />
                                            <span className='flex items-center'>
                                                0
                                                <BsAlignTop />
                                            </span>
                                            <p>delivery free</p>
                                        </div>
                                        <img src={foodImg6} alt="Pic 2" className='w-full h-44 rounded-t-md object-cover' />
                                        <div className='border-l border-r border-b rounded-b-md'>
                                            {/* Typography Details */}
                                            <div className='w-full border-b border-b-gray-300 border-dashed'>
                                                <div className='p-4 flex items-center justify-between'>
                                                    <div className='text-gray-700'>
                                                        <h1 className='font-semibold text-lg'>Burger King Shymkent</h1>
                                                        <p className='text-sm text-gray-400'>Taste is King </p>
                                                    </div>
                                                    <div className='flex flex-col items-center bg-sky-50 text-sky-500 text-sm rounded-md px-2 py-0.5'>
                                                        <span>35-45</span>
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Details */}
                                            <div className='py-2.5 px-4 flex items-center gap-4 text-xs'>
                                                <div className='bg-sky-500 rounded-lg px-1 text-white italic'>
                                                    w+
                                                </div>
                                                <div className='flex items-center gap-1 text-sky-500 font-medium'>
                                                    KZT
                                                    <span>0</span>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    <BsAlignTop className='text-gray-600' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                    <BsAlignTop className='text-gray-400' />
                                                </div>
                                                <div className='flex items-center gap-2 text-gray-500'>
                                                    <BsEmojiSmile />
                                                    <span>8.2</span>
                                                </div>
                                            </div>
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

export default HomeCooking