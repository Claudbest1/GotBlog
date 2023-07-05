import React from 'react'
import Logo from '../assets/GOTBLOGS logo.png'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import {MdCopyright} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='md:flex justify-between md:px-[100px] sm:px-[20px] font-sans1 sm:pb-[40px] border-b border-gray sm:mb-5  py-[20px] md:py-[100px]'>
      <div className=' md:mb-[100px] sm:mb-[40px]'>
          <div className='flex md:justify-start mb-5 '>
            <img src={Logo} alt="" className='w-[150px]' />
        </div>
        <p className='mb-5 text-[14px] md:text-left'>It has been said that the book in the corner of the house was released. <br />It has been said that the book in the corner of the house was released .</p>
        <div className=' flex gap-3 md:justify-start text-blue '>
          <FaLinkedinIn /><FaTwitter /><FaFacebookF />
        </div>
        
      </div>
      <div className='flex sm:gap-[15px] md:gap-[150px] sm:flex-col md:flex-row'>
        <div >
          <h2 className='mb-2 font-bold '>Features</h2>
            <ul className='font-sans1'>
              
              <li className='mb-2'><Link
                to='/'>Home</Link></li>
            <li className='mb-2'><Link
                to='/about'>About</Link></li>
            <li className='mb-2'><Link
                to='/'>Subscribe</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='mb-2 font-bold'>Members</h2>
          <ul className='font-sans1'>
            <li className='mb-2'><Link
                to='/contact'>Contact Us</Link></li>
            <li className='mb-2'>Terms</li>
            <li className='mb-2'>Conditions</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='flex gap-2 md:justify-start items-center md:px-[100px] sm:px-[20px] sm:mb-[20px]'>
        <div><MdCopyright /></div>
        <p>All rights reserved</p>
      </div>
      </>
  )
}

export default Footer