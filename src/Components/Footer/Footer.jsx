import React from 'react'
import { BiHide } from 'react-icons/bi'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-black text-white px-5 md:px-0 pt-28 pb-10'>
            <div className='w-full flex items-center justify-center'>
                <div className='hidden md:w-4/5 md:!grid md:grid-cols-4 xl:grid-cols-6 gap-3'>
                    {/* Column 1 */}
                    <div>
                        <h1 className='text-2xl font-bold'>LOGO</h1>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <h1 className='text-gray-500'>Partner with Company</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>For countries</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>For merchants</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>For affiliates</Link>
                        </div>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h1 className='text-gray-500'>Company</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>About us</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>What we stand for</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Jobs</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Sustainability</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Security</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Investors</Link>
                        </div>
                    </div>
                    {/* Column 4 */}
                    <div>
                        <h1 className='text-gray-500'>Products</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Drive</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Market</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name+</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name for Work</Link>
                            <Link className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Ads</Link>
                        </div>
                    </div>
                    {/* Column 5 */}
                    <div>
                        <h1 className='text-gray-500'>Useful Links</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Support</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Media</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Contact</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Speak Up</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Promo Code</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Developers</Link>
                        </div>
                    </div>
                    {/* Column 6 */}
                    <div>
                        <h1 className='text-gray-500'>Follow Us</h1>
                        <div className='flex flex-col gap-1 pt-3'>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Blog</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Engineering Blog</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Instagram</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Facebook</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>X</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Linkedin</Link>
                            <Link to={'/partner'} className=' border-b border-b-transparent hover:border-b-white w-max transition-all duration-200'>Name Life</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:!flex items-center justify-center'>
                <div className='flex md:w-4/5 items-center justify-between pt-10'>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2.5'>
                            <FaLocationDot size={12} className='text-gray-200 border-b border-b-transparent' />
                            <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Choose country</Link>
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <FaGlobeAmericas size={12} className='text-gray-200 border-b border-b-transparent' />
                            <Link className='text-sm border-b border-b-transparent hover:border-b-white'>English</Link>
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <BiHide size={12} className='text-gray-200 border-b border-b-transparent' />
                            <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Accessibility</Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-6'>
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Accessibility Statement</Link>
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>User Terms of Service</Link>
                        <Link className='text-sm border-b border-b-transparent hover:border-b-white'>Privacy Statement</Link>
                        <h1 className='flex items-center gap-2 text-gray-400'>
                            <span>&copy;</span>
                            Name 2024
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer