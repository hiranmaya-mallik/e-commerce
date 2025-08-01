import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets.js'
import { ShopContext } from '../context/ShopContext.jsx'
const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount} = useContext(ShopContext)

  return (

    <div className='flex justify-between items-center py-5 font-medium'>
       <Link to={'/'}><img src={assets.logo} className='w-36' alt="" /></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
         <img onClick={()=> setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer' alt="" />
          <div className='group relative'>
            <Link to='/login'><img src={assets.profile_icon} className='w-6 cursor-pointer' alt="" /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-40 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black text-sm'>My Profile</p>
                <p className='cursor-pointer hover:text-black text-sm'>Orders</p>
                <p className='cursor-pointer hover:text-black text-sm'>Logout</p>
              </div>
            </div>
          </div>

    
          <Link  to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-6 cursor-pointer' alt="" />
                <p className='absolute bg-black rounded-full text-white right-[-5px] bottom-[-5px] w-4 text-center leading-4 aspect-square text-[8px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=> setVisible(true)} src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Sidebar for small screen */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-500'>
              <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3'>
                <img className='h-4 rotate-180 cursor-pointer' src={assets.dropdown_icon} alt="" />
                <p>Back</p>
              </div>

              <NavLink onClick={()=> setVisible(false)} className='py-1.5 pl-5 border' to="/">HOME</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-1.5 pl-5 border' to="/collection">COLLECTION</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-1.5 pl-5 border' to="/about">ABOUT</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-1.5 pl-5 border' to="/contact">CONTACT</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar
