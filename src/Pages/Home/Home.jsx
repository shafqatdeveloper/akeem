import React from 'react'
import HeroCarousel from '../../Components/HeroCarousel/HeroCarousel'
import Hero from '../../Components/Hero/Hero'
import VideoSection from '../../Components/VideoSection/VideoSection'
import ApplyNow from '../../Components/ApplyNowSection/ApplyNow'

const Home = () => {
    return (
        <div className=''>
            <Hero />
            <VideoSection />
            <ApplyNow />
        </div>
    )
}

export default Home