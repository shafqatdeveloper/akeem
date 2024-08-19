import React from 'react'
import HeroCarousel from '../../Components/HeroCarousel/HeroCarousel'
import Hero from '../../Components/Hero/Hero'
import VideoSection from '../../Components/VideoSection/VideoSection'
import ApplyNow from '../../Components/ApplyNowSection/ApplyNow'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='pt-[85px]'>
            <Link to={'/en/discovery'} className='bg-sky-200 ml-2 mt-2 text-sky-600 px-5 py-2 rounded-md'>Go to Disovey Page</Link>
            <Hero />
            <VideoSection />
            <ApplyNow />
        </div>
    )
}

export default Home