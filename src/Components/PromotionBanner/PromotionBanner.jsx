import React from 'react'
import foodDeliveryRider from '../../assets/foodRider.png'
import { Link } from 'react-router-dom'

const PromotionBanner = () => {
    return (
        <div className='w-full flex items-center justify-center px-2 md:px-0'>
            <div className='w-full sm:w-[95%] bg-sky-500 h-full md:h-24 rounded-md px-7 md:px-14 text-white flex items-center justify-between'>
                {/* Desktop */}
                <div className='hidden md:!flex items-center md:gap-6 lg:gap-16 xl:gap-24'>
                    <h1 className='text-xl md:text-2xl'>Name+</h1>
                    <img src={foodDeliveryRider} alt="" className='w-32 lg:w-40 h-auto' />
                </div>
                <div className='hidden md:!flex md:flex-col lg:flex-row md:gap-2 items-center gap-5'>
                    <h1 className='text-lg sm:text-2xl font-medium'>Skip the delivery fees with Name+</h1>
                    <Link to={'/become-member'} className='bg-sky-50 rounded-md px-5 py-2.5 font-medium text-sky-500'>Join Now</Link>
                </div>
                {/* Mobile */}
                <div className='py-10 md:hidden w-full flex items-center justify-between'>
                    <div>
                        <img src={foodDeliveryRider} alt="" className='w-32 h-auto' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl'>Name+</h1>
                        <h1 className='text-lg flex flex-col font-medium'>Skip the delivery <span> fees with Name+</span>  </h1>
                        <Link to={'/become-member'} className='bg-sky-50 rounded-md px-5 w-max py-2 font-medium text-sky-500'>Join Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionBanner