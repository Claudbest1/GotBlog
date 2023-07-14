import React from 'react'
import { NewsData } from './NewsData'
// import Arrow from '../assets/Return Arrown.png'


const News = () => {
  return (
    <div className='md:px-[100px] mb-[60px] px-[32px] '>
      <div className='flex gap-10 sm:gap-5 mt-[60px] overflow-x-scroll md:justify-center scrollbar-hide p-3 font-sans1 mb-[40px]'>
          <button className='bg-blue drop-shadow-md py-3 px-10 rounded-xl text-white sm:text-[14px] '>All</button>
          <button className='bg-white shadow-md py-3 px-10 md:rounded-xl sm:rounded-md bg-[#EEECEC]'>Entertainment</button>
          <button className='bg-white shadow-md py-3 px-10 rounded-xl bg-[#EEECEC]'>Events</button>
          <button className='bg-white shadow-md py-3 px-10 rounded-xl bg-[#EEECEC]'>Agriculture</button>
      </div>
      <h2 className='font-bold text-[18px] md:flex justify-center'>Latest News</h2>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-3 mt-[40px] place-content-center'>
        {NewsData.map(({ img, category, date, title, article, timeStamp }, index) => {
          return (
            <div className='shadow-lg rounded-xl mb-5 px-3'>
              <img src={img} alt={img} className='xl:w-full'/>
              <div className='p-5 sm:p-2'>
                <div className=' sm:flex gap-5 mb-5 sm:text-[10px]'>
                <span className='text-blue'>{category}</span>
                {date}
              </div>
              <h3 className='text-xl font-bold mb-5 sm:text-[18px] '>{title}</h3>
              <p className='mb-5 sm:text-[14px]'>{article}</p>
              <h4 className='text-[10px] mb-5'>{timeStamp}</h4>
              </div>
              
            </div>
          )
        })}
      </div>
      <div className='flex justify-center mt-[40px]'>
        <button className='bg-blue text-white md:p-5 px-5 py-3 rounded-lg'>See More</button>
      </div>
      {/* <div className='flex justify-end relative fixed'>
        <img src={Arrow} alt="" />
        </div> */}
      
    </div>
  )
}

export default News