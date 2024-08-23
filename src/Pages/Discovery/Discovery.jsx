import React, { useState } from 'react'
import { GiModernCity } from 'react-icons/gi'
import { MdStorefront } from 'react-icons/md'
import { RiRestaurantFill } from 'react-icons/ri'
import PopularDeals from '../../Components/Deals/PopularDeals'
import DiscountedDeals from '../../Components/Discounts/DiscountedDeals'
import PromotionBanner from '../../Components/PromotionBanner/PromotionBanner'
import LateLunchNearYou from '../../Components/LateLunch/LateLunch'
import Popular from '../../Components/Popular/Popular'
import HomeCooking from '../../Components/HomeCooking/HomeCooking'
import FastestDelivery from '../../Components/FastestDelivery/FastestDelivery'
import OffersNearYou from '../../Components/OffersNearYou/OfferNearYou'
import Stores from '../../Components/Stores/Stores'
import Best from '../../Components/BestOnWebsite/Best'
import Brands from '../../Components/Brands/Brands'

const Discovery = () => {
    const [selectedPage, setSelectedPage] = useState("discovery")
    return (
        <div className='w-full pt-[7.5rem] md:pt-20'>
            {/* Pages */}
            <div className='w-full grid grid-cols-2 md:!flex px-5 sm:px-10 md:px-0 gap-2 items-center md:gap-6 justify-center py-5 text-gray-500'>
                <div onClick={() => setSelectedPage("discovery")} className={`flex cursor-pointer items-center py-2 px-5 gap-2 ${selectedPage === "discovery" && "bg-sky-500 text-white rounded-full"}`}>
                    <GiModernCity />
                    Discovey
                </div>
                <div onClick={() => setSelectedPage("restaurants")} className={`flex cursor-pointer items-center py-2 px-5 gap-2 ${selectedPage === "restaurants" && "bg-sky-500 text-white rounded-full"}`}>
                    <RiRestaurantFill />
                    Restaurants
                </div>
                <div onClick={() => setSelectedPage("stores")} className={`flex cursor-pointer items-center py-2 px-5 gap-2 ${selectedPage === "stores" && "bg-sky-500 text-white rounded-full"}`}>
                    <MdStorefront />
                    Stores
                </div>
            </div>
            {/* Deals Section */}
            <div className='w-full md:pt-7 pb-10'>
                <PopularDeals />
            </div>
            {/* Discounted Deals Section */}
            <div className='w-full md:pt-7 pb-10'>
                <DiscountedDeals />
            </div>
            {/* Promotion Banner for free Delivey */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <PromotionBanner />
            </div>
            {/* Late Lunch Near You */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <LateLunchNearYou />
            </div>
            {/* Stores */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <Stores />
            </div>
            {/* Best on Wesbite */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <Best />
            </div>


            {/* Popular Right Now */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <Popular />
            </div>
            {/* Home Cooking */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <HomeCooking />
            </div>
            {/* Brands */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <Brands />
            </div>


            {/* Fastest Delivery */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <FastestDelivery />
            </div>
            {/* Offers near You */}
            <div className='w-full flex items-center justify-center md:pt-12 pb-10'>
                <OffersNearYou />
            </div>
        </div>
    )
}

export default Discovery