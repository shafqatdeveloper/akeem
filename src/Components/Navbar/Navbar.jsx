import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaCircleUser } from 'react-icons/fa6'
import { FiMenu } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const location = useLocation()
    return (
        <div className={location.pathname === "/en/discovery" && "shadow-md pb-3.5 md:pb-0 w-full"}>
            <div className={location.pathname === "/en/discovery" ? 'flex items-center px-3 md:px-0 justify-center w-full py-3 text-black ' : 'flex items-center justify-center fixed top-0 left-0 w-full py-3 px-3 bg-white text-black z-50'}>
                <div className={location.pathname === "/en/discovery" ? 'w-[95%] flex items-center justify-between' : 'w-[90%] md:w-4/5 flex items-center justify-between'}>
                    <div className='flex items-center gap-12'>
                        <div>
                            LOGO
                        </div>
                        <div className={location.pathname === "/en/discovery" ? "md:!flex hidden items-center gap-3 text-sky-600" : "hidden"}>
                            <div className='bg-sky-100 text-sky-600 rounded-full p-3'>
                                <MdOutlineLocationOn />
                            </div>
                            <span className='italic'>
                                Shymkent
                            </span>
                            <div className='p-1'>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className={location.pathname === "/en/discovery" ? 'bg-gray-200  rounded-full px-2 py-1.5 flex items-center w-52 sm:w-72 gap-2' : "hidden"} >
                        <AiOutlineSearch size={27} className='text-gray-500' />
                        <input type="text" className='outline-none focus:outline-none bg-transparent h-auto w-full' placeholder='Search in Name' />
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
            <div className='md:hidden px-5'>
                <div className={location.pathname === "/en/discovery" ? "flex items-center gap-3 text-sky-600" : "hidden"}>
                    <div className='bg-sky-100 text-sky-600 rounded-full p-3'>
                        <MdOutlineLocationOn />
                    </div>
                    <span className='italic'>
                        Shymkent
                    </span>
                    <div className='p-1'>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar