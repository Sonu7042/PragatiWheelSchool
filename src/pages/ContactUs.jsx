import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";

import { ImFacebook2 } from "react-icons/im"
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <h1 className='text-3xl font-medium text-center bg-slate-100 p-4 w-full h-auto'>Contact Us</h1>


   {/* this is details sections  */}
      <div className='flex flex-col lg:flex-row lg:justify-between mx-8 h-auto gap-2 mt-10'>

        <div className=' w-full lg:w-[50%]'>
          <h2 className='text-2xl font-medium'>Pragati Wheel School</h2>

          <div className='flex items-center gap-2 mt-4' >
            <IoLocationSharp className='text-2xl' />
            <p>C-240, Pandav Nagar, New Delhi-110092 (India)</p>
          </div>

          <div className='flex items-center gap-2 mt-4'>
            <CgMail className='text-2xl' />
            <p>pragati@gamil.com</p>
          </div>

          <div className='flex items-center gap-2 mt-4'>
            <FaPhone className='text-xl' />
            <p>+914783598734</p>
          </div>

          <p className='mt-8 font-medium text-xl'>Follow us</p>

          <div className='flex text-3xl gap-2 mt-4'>
            <ImFacebook2 />
            <FaInstagramSquare />
            <FaLinkedin />
          </div>


        </div>




       {/* details form of donaters */}
        <div className='lg:w-[50%] w-full mt-8'>
          <form className >

            <div className=''>
              <label htmlFor="name" className='text-xl'>Name <span className='text-red-600'>*</span></label>

              <div className='flex gap-4   '>

                <div className=' w-full'>
                  <input type="text" className='border border-slate-400 w-full h-10 p-2  hover:border-red-600 ' required />
                  <p className='text-sm mt-2 text-slate-500'>First Name</p>
                </div>


                <div className='w-full'>
                  <input type="text" className='border border-slate-400 w-full h-10 p-2 hover:border-red-600' required />
                  <p className='text-sm mt-2 text-slate-500'>Last Name</p>
                </div>

              </div>
            </div>






            <div className='mt-8'>
              <div className='flex gap-4   '>

                <div className=' w-full'>
                  <label htmlFor="email" className='text-xl'>Email <span className='text-red-600'>*</span></label>
                  <input type="text" className='border border-slate-400 w-full h-10 p-2  hover:border-red-600 ' required />
                  <p className='text-sm mt-2 text-slate-500'>example@gmail.com</p>
                </div>


                <div className='w-full'>
                  <label htmlFor="email" className='text-xl'>Phone No. <span className='text-red-600'>*</span></label>
                  <input type="text" className='border border-slate-400 w-full h-10 p-2 hover:border-red-600' required />
                  <p className='text-sm mt-2 text-slate-500'>Enter a valid phone number</p>
                </div>


              </div>
            </div>





            <div className='w-full mt-8 '>
              <p>Message <span className='text-red-600'>*</span></p>
              <textarea className='border border-slate-400 p-2 w-full h-36 focus:outline-none   hover:border-red-600 '> </textarea>
            </div>





            <div className='flex items-center justify-center my-4'>
              <button type='submit' className='bg-blue-600 px-12 py-2 text-xl font-normal text-center rounded-full text-white hover:bg-black '>Submit</button>
            </div>

          </form>
        </div>

      </div>


 
    </>
  )
}

export default ContactUs
