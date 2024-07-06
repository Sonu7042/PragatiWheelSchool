import React, { useState } from 'react'
import Logo from '../assets/Pragati logo.png'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {



  return (

    <header className='bg-white h-30 shadow-sm  w-full z-50  fixed top-0 left-0 '  >
      <div className=' flex  w-full h-full items-center  mx-auto justify-between lg:flex-row flex-col mb-4'>

        {/* logo */}
        <Link to={'/'} className='flex items-center justify-center px-5   '>
          <img  src={Logo} alt="" width={200} />
        </Link>





        {/* this option */}
        <div className='hidden lg:flex'>

          <ul className='flex flex-row gap-2'>
            <Link to={'/'} className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white'>Home</Link>
            <Link to={'/about'} className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white' >About</Link>
            <Link to={'/media'} className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white'>Media</Link>
            <Link to={'/contactUs'} className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white'>Contact Us</Link>
          </ul>

        </div>


        <div className='flex py-2 px-5 '>
          <button className=' px-6 py-2 rounded-full text-lg border-2 divide-black font-normal  hover:bg-blue-600 hover:text-white'>Donate Now</button>
        </div>



      </div>


    </header >

  )
}

export default Header
