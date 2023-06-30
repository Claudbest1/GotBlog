import React from 'react'
import { NewsData } from './NewsData'


const News = () => {
  return (
    <div className='md:px-[100px] sm:mb-[60px] sm:px-[20px] '>
      <div className='flex gap-10 sm:gap-5 mt-[60px] overflow-x-scroll md:justify-center scrollbar-hide p-3 '>
          <button className='bg-blue drop-shadow-md py-3 px-10 rounded-xl text-white sm:text-[14px] '>All</button>
          <button className='bg-white shadow-md py-3 px-10 md:rounded-xl sm:rounded-md bg:gray'>Entertainment</button>
          <button className='bg-white shadow-md py-3 px-10 rounded-xl'>Events</button>
          <button className='bg-white shadow-md py-3 px-10 rounded-xl'>Agriculture</button>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-3 mt-[60px] place-content-center'>
        {NewsData.map(({ img, category, date, title, article, timeStamp }, index) => {
          return (
            <div className='shadow-md rounded-xl sm:mb-5'>
              <img src={img} alt={img} className='xl:w-full'/>
              <div className='p-5 sm:p-2'>
                <div className=' sm:flex gap-5 mb-5 sm:text-[10px]'>
                <span className='text-blue'>{category}</span>
                {date}
              </div>
              <h3 className='text-xl font-bold mb-5 sm:text-[18px] '>{title}</h3>
              <p className='mb-5 sm:text-[14px]'>{article}</p>
              <h4 className='sm:text-[10px]'>{timeStamp}</h4>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default News