import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Hero } from '../data';

const HeroSlider = () => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider {...settings} className='z-[-1]'>
      <div className='md:px-[60px] px-[30px] mt-[100px] md:mb-[100px] mb-[40px] mt-[100px] md:mt-[200px] '>
      <ul className='flex gap-10 overflow-hidden'>
      {
        Hero.map(({ img, category, date, title, paragraph, author, timeStamp }, index) => {
          return (
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
        <div className='text-[14px]'>
          <span className='mr-5 text-blue font-sans1'>{author}</span>
          {timeStamp}
        </div>
      </div>
    </div>
            </li>
          )
        })
      }
      
    </ul>
    </div>
      <div className='md:px-[60px] px-[30px] mt-[100px] md:mb-[100px] mb-[40px] mt-[100px] md:mt-[200px] '>
      <ul className='flex gap-10 overflow-hidden'>
      {
        Hero.map(({ img, category, date, title, paragraph, author, timeStamp }, index) => {
          return (
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
        <div className='text-[14px]'>
          <span className='mr-5 text-blue font-sans1'>{author}</span>
          {timeStamp}
        </div>
      </div>
    </div>
            </li>
          )
        })
      }
      
    </ul>
    </div>
      <div className='md:px-[60px] px-[30px] mt-[100px] md:mb-[100px] mb-[40px] mt-[100px] md:mt-[200px]'>
      <ul className='flex gap-10 overflow-hidden'>
      {
        Hero.map(({ img, category, date, title, paragraph, author, timeStamp }, index) => {
          return (
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
        <div className='text-[14px]'>
          <span className='mr-5 text-blue font-sans1'>{author}</span>
          {timeStamp}
        </div>
      </div>
    </div>
            </li>
          )
        })
      }
      
    </ul>
    </div>
    </Slider>
  );
};

export default HeroSlider