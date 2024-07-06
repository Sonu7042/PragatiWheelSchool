import React, { useState } from 'react'
import Logo from '../assets/Pragati logo.png'
import { FaBars } from "react-icons/fa";

const Header = () => {



  return (

    <header className='bg-white h-30 shadow-sm  w-full z-50   '  >
      <div className=' flex  w-full h-full items-center  mx-auto justify-between lg:flex-row flex-col mb-4'>

        {/* logo */}
        <div className='flex items-center justify-center px-5   '>
          <img  src={Logo} alt="" width={200} />
        </div>





        {/* this option */}
        <div className='hidden lg:flex'>

          <ul className='flex flex-row gap-2'>
            <li className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white'>Home</li>
            <li className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white' >About</li>
            <li className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white'>Media</li>
            <li className='hover:bg-blue-600 py-10 px-5 font-medium hover:text-white'>Contact Us</li>
          </ul>

        </div>


        <div className='flex py-4 px-5 '>
          <button className=' px-6 py-2 rounded-full text-lg border-2 divide-black font-normal  hover:bg-blue-600 hover:text-white'>Donate Now</button>
        </div>



      </div>


    </header >

  )
}

export default Header
