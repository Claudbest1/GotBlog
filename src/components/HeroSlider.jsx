import React from 'react';
import { Hero } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const HeroSlider = () => { 
  return (
  <div className='md:px-[60px] px-[30px] mt-[100px] md:mb-[100px] sm:mb-[40px] mt-[100px] md:mt-[200px]'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      // navigation
      pagination={true}
      // scrollbar={{ draggable: true }}
    >
      
        <div className='md:px-[60px] px-[30px] mt-[100px] md:mb-[100px] sm:mb-[40px] mt-[100px] md:mt-[200px] z-[-1]'>
      <ul className='flex gap-10 overflow-hidden '>
      {
        Hero.map(({ img, category, date, title, paragraph, author, timeStamp }, index) => {
          return (
            <SwiperSlide className='mb-10'>
            <li key={index}>
              <div className='md:flex gap-[60px] items-center'>
      <div className='w-[100%] lg:w-[100%]'>
        <img src={img} alt="Ferris wheel" className='w-full sm:mb-5'/>
      </div>
      <div>
        <div className='md:mb-10 lg:mb-2 xl:mb-5 sm:mb-2 p-2 font-sans1 font-medium text-[14px]'>
          <span className='mr-5 text-blue font-sans1 font-medium text-[14px]'>{category}</span>
          {date}
        </div>
        <h2 className='font-bold lg:text-[40px] xl:text-[40px] 2xl:text-[52px] xl:mb-5 font-sans md:mb-10 sm:mb-4 lg:mb-2 text-[24px]'>{title}</h2>
        <p className='lg:mb-2 xl:mb-5 font-sans1 mb-4'>
          {paragraph}
        </p>
        <div className='text-[14px] mb-5'>
          <span className='mr-5 text-blue font-sans1'>{author}</span>
          {timeStamp}
        </div>
      </div>
    </div>
              </li>
              </SwiperSlide>
          )
        })
      }
      
    </ul>
    </div>
      
      
    </Swiper>
  </div>
    
  );
};

export default HeroSlider




  