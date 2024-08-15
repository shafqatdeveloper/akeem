import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='flex items-center justify-center fixed top-0 left-0 w-full py-5 bg-white text-black shadow-md z-50'>
            <div className='w-[90%] md:w-4/5 flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <div>
                        LOGO
                    </div>
                    <div className='hidden md:!flex items-center gap-1'>
                        <MdOutlineLocationOn />
                        <h6 className='text-lg'>
                            Location
                        </h6>
                    </div>
                </div>
                <div className='hidden md:!block'>
                    <div className='md:w-80 lg:w-96 bg-gray-200 rounded-full flex items-center py-2 px-2 gap-1'>
                        <AiOutlineSearch className='text-gray-500' size={25} />
                        <input type="text" className='bg-transparent p-1 w-full outline-none focus:outline-none' />
                    </div>
                </div>
                <div className='hidden md:!flex items-center gap-8'>
                    <Link>Login</Link>
                    <Link className='bg-blue-50 text-blue-500 font-medium rounded-md px-5 py-3'>Signup</Link>
                </div>
                <div onClick={() => setMobileMenu(!mobileMenu)} className='md:hidden'>
                    <FiMenu size={23} />
                </div>
                <div className={mobileMenu ? "absolute top-16 left-0 bg-black backdrop-blur-3xl h-[50vh] w-full text-white transition-all duration-300" : "absolute top-16 left-[-100%] bg-black backdrop-blur-3xl h-[50vh] transition-all duration-300 w-full text-white"}>
                    <div className="w-full flex flex-col justify-between h-full pt-0.5" >
                        <div className='flex flex-col gap-0.5'>
                            <div className='flex items-center gap-1 w-full bg-white p-4 text-black'>
                                <MdOutlineLocationOn size={24} />
                                <h6 className='text-xl'>
                                    Location
                                </h6>
                            </div>
                            <div className='flex items-center gap-3 w-full bg-white px-4 py-2'>
                                <Link className='bg-blue-100 text-blue-500 font-medium py-2 rounded-md px-5'>Login</Link>
                                <Link className='bg-blue-100 text-blue-500 font-medium py-2 rounded-md px-5'>Signup</Link>
                            </div>
                        </div>
                        <div className='pb-10 px-4'>
                            <div className='w-full bg-gray-200 rounded-full flex items-center py-1.5 px-2 gap-1'>
                                <AiOutlineSearch className='text-gray-500' size={25} />
                                <input type="text" className='bg-transparent p-1 w-full outline-none focus:outline-none' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar