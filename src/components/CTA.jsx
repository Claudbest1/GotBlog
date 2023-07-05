import React from 'react'

const CTA = () => {
  return (
      <div className='w-full h-auto bg-deep-blue md:mb-[100px] font-sans1 px-[30px] mb-[40px]'>
          <div className='md:flex justify-center content-center gap-[40px] md:p-[127px] sm:py-20 text-center md:text-left'>
              <div className=''>
                  <h2 className='text-white text-2xl font-bold'>Subscribe</h2>
                  <p className='text-white mt-2 sm:mb-5'>It has been said that the book in the corner of the house was released as an apartment.</p>
              </div>
              <div className='sm:flex flex-col md:flex-row sm:gap-5 md:gap-0 items-center'>
                  <div>
                      <input
                      type="text"
                      placeholder='Your email address'
                      className=' w-fit md:p-5 sm:p-3 md:rounded-l-md md:rounded-r-none bg-white border-0 focus:outline-0 sm:rounded-r-md sm:rounded-l-md'
                  />
                  </div>
                  
                  <div>
                      <button className='bg-lemon text-white md:p-5 sm:px-7 sm:py-4 md:rounded-r-md md:rounded-l-none sm:rounded-md'>
                      Subscribe
                  </button>
                  </div>
                  
              </div>
          </div>   
    </div>
  )
}

export default CTA