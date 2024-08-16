import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaCircleUser } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='flex items-center justify-center fixed top-0 left-0 w-full py-3 bg-white text-black shadow-md z-50'>
            <div className='w-[90%] md:w-4/5 flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <div>
                        LOGO
                    </div>
                </div>
                <div className='hidden md:!flex items-center gap-8'>
                    <Link>Login</Link>
                    <Link className='bg-blue-50 text-blue-500 font-medium rounded-md px-5 py-3'>Signup</Link>
                </div>
                <div className='md:hidden text-gray-300 relative'>
                    <FaCircleUser onClick={() => setMobileMenu(!mobileMenu)} size={45} />
                    {
                        mobileMenu && <div className='w-max flex flex-col gap-2 h-max bg-white shadow-lg py-2.5 items-start rounded-md absolute top-12 text-gray-600 text-sm right-0 shadow-black/60'>
                            <button className='border-b pb-1 px-3.5'>Login or Register</button>
                            <div className='flex px-3.5 flex-col items-start gap-1'>
                                <button>Language: English</button>
                                <button>Support</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar