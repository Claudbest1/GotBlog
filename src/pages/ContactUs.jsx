import React from 'react'
import Footer from '../components/Footer'


const ContactUs = () => {
  return (
    <>
      <div className='bg-deep-blue text-white flex justify-center py-[53px] mt-[120px] leading-normal'>
        <h1 className='text-[24px] font-medium'>Contact GOTBLOGS</h1>
      </div>
      <div className='px-[32px] py-[53px] md:px-[100px]'>
        <h3 className='font-bold'>What can we help you with?</h3>
        <p className='pt-[50px]'>
          Kindly fill up this spaces to let us know what you need our help for and what you want to speak to us about.
        </p>
      </div>
      <div className='px-[32px] py-[53px] md:px-[100px]'>
      <form action="" className=' font-sans1 block flex flex-col'>
        <label htmlFor="" className='py-5'>Your email</label>
        <input type="email" name="" id="" placeholder='Email' className='border border-1 py-4 px-6 rounded-full' />
        <label htmlFor="" className='pt-10 pb-5'>What can we help you with?</label>
          <textarea id="message" rows="4" class='block p-7 border border-1 rounded-3xl h-[270px]' placeholder="Message..."></textarea>
          <label htmlFor="" className='pt-10 pb-5'>Personal Suggestions?</label>
          <textarea id="message" rows="4" class='block p-7 w-full border border-1 rounded-3xl h-[270px] mb-[80px]' placeholder="Message..."></textarea>
          
        </form>
        <form action="" className='flex justify-center'>
          <button className='bg-deep-blue text-white py-5 px-10 rounded-xl '>Submit</button>
        </form>
        
      </div>
      
      <Footer/>
    </>
  )
}

export default ContactUs