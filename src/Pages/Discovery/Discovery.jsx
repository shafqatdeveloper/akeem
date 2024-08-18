import React, { useState } from 'react'
import { GiModernCity } from 'react-icons/gi'
import { MdStorefront } from 'react-icons/md'
import { RiRestaurantFill } from 'react-icons/ri'
import PopularDeals from '../../Components/Deals/PopularDeals'

const Discovery = () => {
    const [selectedPage, setSelectedPage] = useState("discovery")
    return (
        <div className='w-full'>
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
        </div>
    )
}

export default Discovery