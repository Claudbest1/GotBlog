import React from 'react'
import FerrisWheel from '../assets/ferris wheel.png'
import { Carousel } from 'react-responsive-carousel'
import { Hero } from '../data'


const hero = () => {
  return (

    <div className='md:px-[60px] sm:px-[20px] mt-[100px] md:mb-[100px] sm:mb-[40px] mt-[100px] md:mt-[200px]'>
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
        <div className='md:mb-10 lg:mb-2 xl:mb-5 sm:mb-2'>
          <span className='mr-5 text-blue'>{category}</span>
          {date}
        </div>
        <h2 className='font-bold lg:text-[40px] xl:text-[40px] 2xl:text-[52px] xl:mb-5 font-sans md:mb-10 sm:mb-4 lg:mb-2 sm:text-[24px]'>{title}</h2>
        <p className='lg:mb-2 xl:mb-5'>
          {paragraph}
        </p>
        <div>
          <span className='mr-5 text-blue'>{author}</span>
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
    
  )
}

export default hero