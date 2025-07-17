import React, { useContext, useState } from 'react'
import { assets } from "../assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch} = useContext(ShopContext);
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'><img src={assets.logo} className='w-36' alt='' /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-red-500' : ''
                        }`
                    }
                >
                    <p className='hover:text-red-500'>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection'
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500' : ''
                        }`
                    }
                >
                    <p className='hover:text-blue-500'>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/about-us'
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-green-500' : ''
                        }`
                    }>
                    <p className='hover:text-green-500'>ABOUT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
                <NavLink to='/contact-us'
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-orange-500' : ''
                        }`
                    }>
                    <p className='hover:text-orange-500'>CONTACT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart} className='w-5 min-w-5' alt='' />
                    <p className='absolute right-[-3px] bottom-[-6px] w-3 text-center leading-4  text-red-500 aspect-square rounded-full text-[13px]'> 10</p>
                </Link>
                <img onClick={()=>setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer' alt="" />
                <div className='group relative'>
                    <img
                        src={assets.profileicon}
                        className="w-5 cursor-pointer"
                        alt=""
                    />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className="cursor-pointer hover:text-orange-500">My Profile</p>
                            <p className="cursor-pointer hover:text-blue-500">Orders</p>
                            <p className="cursor-pointer hover:text-red-500">Logout</p>
                        </div>
                    </div>
                </div>
                <img onClick={() => setVisible(true)} src={assets.menu} className='w-5 cursor-pointer sm:hidden' alt='' />
            </div>
            {/*sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown} className='h-4 rotate-180' alt='' />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/">HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/about-us">ABOUT US</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/contact-us">CONTACT US</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
