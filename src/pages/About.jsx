import React from 'react';
import img1 from '../assets/pragatiImage/img1.webp';
import img2 from '../assets/pragatiImage/img2.jpg';
import img3 from '../assets/pragatiImage/img3.jfif';

const About = () => {
  return (
    <>
      <h1 className='mt-1 w-full flex bg-slate-100 p-4 text-2xl md:text-3xl font-semibold justify-center'>Our Journey</h1>

      <div className='container max-w-full flex flex-col lg:flex-row justify-center px-4 lg:px-20'>
        <div className='w-full lg:w-[950px] mt-8 lg:mt-16'>

          <div className='flex items-start justify-between'>
            <h2 className='font-medium text-xl py-4'>Starting From</h2>
            <p className='bg-blue-500 rounded-full px-4 text-white font-bold'>2007</p>
          </div>
          
          <p className='text-slate-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam modi suscipit soluta ea pariatur dolorem qui maiores aperiam? Enim ducimus provident eos tenetur quis ipsam debitis. Distinctio dolores provident ea.
          </p>

          <div className='flex flex-col md:flex-row gap-4'>
            <img src={img1} alt="Image 1" className=' w-full md:w-1/3' />
            <img src={img2} alt="Image 2" className='w-full md:w-1/3' />
            <img src={img3} alt="Image 3" className='w-full md:w-1/3' />
          </div>
        </div>
      </div>




      <div className='container max-w-full flex flex-col lg:flex-row justify-center px-4 lg:px-20 mt-10'>
        <div className='w-full lg:w-[950px] mt-8 lg:mt-16'>

          <div className='flex items-start justify-between'>
            <h2 className='font-medium text-xl py-4'>Starting From</h2>
            <p className='bg-blue-500 rounded-full px-4 text-white font-bold'>2010</p>
          </div>
          
          <p className='text-slate-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam modi suscipit soluta ea pariatur dolorem qui maiores aperiam? Enim ducimus provident eos tenetur quis ipsam debitis. Distinctio dolores provident ea.
          </p>

          <div className='flex flex-col md:flex-row gap-4'>
            <img src={img1} alt="Image 1" className='w-full md:w-1/3' />
            <img src={img2} alt="Image 2" className='w-full md:w-1/3' />
            <img src={img3} alt="Image 3" className='w-full md:w-1/3' />
          </div>
        </div>
      </div>




      <div className='container max-w-full flex flex-col lg:flex-row justify-center px-4 lg:px-20 mt-10'>
        <div className='w-full lg:w-[950px] mt-8 lg:mt-16'>

          <div className='flex items-start justify-between'>
            <h2 className='font-medium text-xl py-4'>Starting From</h2>
            <p className='bg-blue-500 rounded-full px-4 text-white font-bold'>2010</p>
          </div>
          
          <p className='text-slate-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam modi suscipit soluta ea pariatur dolorem qui maiores aperiam? Enim ducimus provident eos tenetur quis ipsam debitis. Distinctio dolores provident ea.
          </p>

          <div className='flex flex-col md:flex-row gap-4'>
            <img src={img1} alt="Image 1" className='w-full md:w-1/3' />
            <img src={img2} alt="Image 2" className='w-full md:w-1/3' />
            <img src={img3} alt="Image 3" className='w-full md:w-1/3' />
          </div>
        </div>
      </div>



      <div className='container max-w-full flex flex-col lg:flex-row justify-center px-4 lg:px-20 mt-10'>
        <div className='w-full lg:w-[950px] mt-8 lg:mt-16'>

          <div className='flex items-start justify-between'>
            <h2 className='font-medium text-xl py-4'>Starting From</h2>
            <p className='bg-blue-500 rounded-full px-4 text-white font-bold'>2015</p>
          </div>
          
          <p className='text-slate-700 mb-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam modi suscipit soluta ea pariatur dolorem qui maiores aperiam? Enim ducimus provident eos tenetur quis ipsam debitis. Distinctio dolores provident ea.
          </p>

          <div className='flex flex-col md:flex-row gap-4'>
            <img src={img1} alt="Image 1" className='w-full md:w-1/3' />
            <img src={img2} alt="Image 2" className='w-full md:w-1/3' />
            <img src={img3} alt="Image 3" className='w-full md:w-1/3' />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
