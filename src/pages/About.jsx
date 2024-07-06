import React from 'react'
import img1 from '../assets/pragatiImage/img1.webp'
import img2 from '../assets/pragatiImage/img2.jpg'
import img3 from '../assets/pragatiImage/img3.jfif'

const About = () => {
  return (

    <>
      <h1 className='text-center bg-slate-200 h-14 py-8 mt-4 flex items-center justify-center text-3xl font-medium'>Our Journey</h1>
      <div className='w-full  bg-white flex   justify-center    '>

        <div className=' w-[70%] my-16 '>

          <div className='flex justify-between'>
            <h1 className='font-medium text-xl'>Start From Junior School</h1>
            <div className='flex items-center justify-center bg-blue-500 text-white font-medium px-8 rounded-full w-10 h-10'>2007</div>

          </div>


          <p className='my-4 text-slate-700 flex-col'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni cumque impedit necessitatibus. Numquam accusantium fugit voluptatibus quasi, ex excepturi quaerat soluta quis velit ut vel nesciunt est quidem voluptas magni!</p>


          <div className='flex flex-col gap-6 lg:flex-row'>
            <img src={img1} width={300} alt="" />
            <img src={img2} width={300} alt="" />
            <img src={img3} width={300} alt="" />
          </div>


        </div>

      </div>
      




      <hr />

      <div className='w-full h-[100vh] bg-white flex  py-10 justify-center   '>

        <div className=' w-[70%] my-16 '>

          <div className='flex justify-between'>
          <h1 className='font-medium text-xl'>Start From Junior School</h1>
          <div className='flex items-center justify-center bg-blue-500 text-white font-medium px-8 rounded-full w-10 h-10'>2010</div>

          </div>
         

          <p className='my-4 text-slate-700 flex-col'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni cumque impedit necessitatibus. Numquam accusantium fugit voluptatibus quasi, ex excepturi quaerat soluta quis velit ut vel nesciunt est quidem voluptas magni!</p>


          <div className='flex flex-col gap-6 lg:flex-row'>
            <img src={img1} width={300} alt="" />
            <img src={img2} width={300} alt="" />
            <img src={img3} width={300} alt="" />
          </div>


        </div>

      </div>




      <hr />

      <div className='w-full h-[100vh] bg-white flex  py-10 justify-center   '>

        <div className=' w-[70%] my-16 '>

          <div className='flex justify-between'>
          <h1 className='font-medium text-xl'>Start From Junior School</h1>
          <div className='flex items-center justify-center bg-blue-500 text-white font-medium px-8 rounded-full w-10 h-10'>2015</div>

          </div>
         

          <p className='my-4 text-slate-700 flex-col'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni cumque impedit necessitatibus. Numquam accusantium fugit voluptatibus quasi, ex excepturi quaerat soluta quis velit ut vel nesciunt est quidem voluptas magni!</p>


          <div className='flex flex-col gap-6 lg:flex-row'>
            <img src={img1} width={300} alt="" />
            <img src={img2} width={300} alt="" />
            <img src={img3} width={300} alt="" />
          </div>


        </div>

      </div>



      <hr />

      <div className='w-full h-[100vh] bg-white flex  py-10 justify-center   '>

        <div className=' w-[70%] my-16 '>

          <div className='flex justify-between'>
          <h1 className='font-medium text-xl'>Start From Junior School</h1>
          <div className='flex items-center justify-center bg-blue-500 text-white font-medium px-8 rounded-full w-10 h-10'>2020</div>

          </div>
         

          <p className='my-4 text-slate-700 flex-col'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni cumque impedit necessitatibus. Numquam accusantium fugit voluptatibus quasi, ex excepturi quaerat soluta quis velit ut vel nesciunt est quidem voluptas magni!</p>


          <div className='flex flex-col gap-6 lg:flex-row'>
            <img src={img1} width={300} alt="" />
            <img src={img2} width={300} alt="" />
            <img src={img3} width={300} alt="" />
          </div>


        </div>

      </div>
    </>


  )
}

export default About
