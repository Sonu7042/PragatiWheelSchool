import React, { useEffect, useState } from 'react'
import img1 from '../assets/CarosalImages/img1.jpg'
import img2 from '../assets/CarosalImages/img2.jpg'
import img3 from '../assets/CarosalImages/img3.jpg'
import img4 from '../assets/CarosalImages/img4.jpg'



const Home = () => {

  const desktopImages= [img1, img2, img3, img4]


  const [currentImage, setCurrentImage]=useState(0)
  



  
  useEffect(()=>{
    const interval= setInterval(()=>{
      if(desktopImages.length-1>currentImage){
        setCurrentImage((pre)=> pre+1)
      }
      else{
        setCurrentImage(0)
      }


    }, 5000)

    return (()=>clearInterval(interval))

  }, [currentImage])




  return (
    
    <div className=' w-full  lg:h-[70vh] h-[40vh] flex  overflow-hidden '>

       {
        desktopImages.map((image, index)=>{
          return(
            <div className=' min-w-full h-full' key={index +"image"}  style={{transform: `translate(-${currentImage * 100}%)`}}>
              <img src={image}  className='w-full h-full bg-cover ' />
            </div>
          )
        })
       }
    </div>
  )
}

export default Home
