import React, { useEffect, useState } from 'react';
import img1 from '../assets/CarosalImages/img1.jpg';
import img2 from '../assets/CarosalImages/img2.jpg';
import img3 from '../assets/CarosalImages/img3.jpg';
import img4 from '../assets/CarosalImages/img4.jpg';
import education from '../assets/CarosalImages/education.webp';

const Home = () => {
  const desktopImages = [img1, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % desktopImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, desktopImages.length]);

  return (
    <>
      <div className="w-full lg:h-[70vh] h-[40vh] flex overflow-hidden">
        {desktopImages.map((image, index) => (
          <div
            className="min-w-full h-full transition-transform duration-500"
            key={index}
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Our Programs Section */}
      <div className="flex lg:flex-row flex-col gap-4 h-auto mt-12 px-8">
        <div className="lg:w-[40%] w-full py-16">
          <h1 className="font-medium text-4xl">Our Programs</h1>
          <p className="pt-6 text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima earum amet optio at commodi. Odit, atque nobis. Nesciunt molestiae laudantium nemo modi dolor sint et id sed placeat illo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, itaque neque vitae magni modi in omnis expedita ratione optio? Atque sequi repudiandae corporis iusto molestias ipsum odio voluptatibus dolorum nostrum.
          </p>
        </div>

        {[{ title: 'Education', img: education }, { title: 'Nutrition', img: education }, { title: 'Robotic', img: education }].map((program, index) => (
          <div className="lg:w-[30%] w-full shadow-md rounded-tl-lg rounded-bl-lg p-8 relative h-auto" key={index}>
            <img src={program.img} alt={program.title} className="w-full rounded" />
            <h2 className="text-2xl pt-2 font-medium">{program.title}</h2>
            <p className="pt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia excepturi porro, atque dolor nisi, esse, accusantium aliquam totam ipsa minima consequuntur quidem explicabo quibusdam dolorem maiores sit harum doloremque consequatur?
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
