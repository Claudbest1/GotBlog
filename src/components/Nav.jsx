import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import {links} from '../data'
import Logo from '../assets/GOTBLOGS logo.png'

const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  // const [navClicked, setNavClicked] = useState(false)

  return (
    <>
      <div className='w-full md:flex md:justify-between border-b border-gray md:items-center sm:p-[20px] md:px-[60px] fixed top-0 bg-white'>
        {isNavShowing && <div className='w-full h-screen absolute' onClick={() => setIsNavShowing(false)}></div>}
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="" className='sm:w-[100px] md:w-[150px]' />
          </Link>
          <span className='md:hidden'>
            <button className='sm:inline-block md:hidden cursor-pointer mt-0 right-5 top-4 absolute' onClick={()=> setIsNavShowing (prev => !prev)}>
                  {
              isNavShowing ? <MdOutlineClose size={25} /> : <GoThreeBars size={25}/>
                  }
          </button>
          </span>
        </div>
        <div className='md:flex md:justify-between md:items-center gap-10 sm:mt-2 md:mt-0'>
          <ul className={`md:flex items-center gap-10  font-Nunito text-[18px] z-[1]  ${isNavShowing ? 'md:flex gap-15 font-Nunito text-[18px] mb-2 md:bg-white  shadow-md sm:px-7 sm:pb-7 absolute md:relative top-[60px] left-0 bg-white w-full' : 'hidden'}`}>
            {
              links.map(({name, path}, index) => {
              return (
                <li key={index} className='sm:mb-5 sm:mt-5 '>
                  <NavLink to={path} className={`hover:text-blue duration-500 hover:font-bold text-[16px] ${({ isActive }) => isActive ? 'font-bold text-blue' : ''}`}
                    onClick={() => setIsNavShowing(false)}
                  >{name} </NavLink>
                </li>
              )
              })
            }
            <div className='md:flex gap-10 sm:gap-5 '>
            <div className='flex items-center'>
              <BsSearch className='absolute ml-3 md:mt-0 sm:mt-4'/>
              <input
              type="text"
              placeholder='Search Blog'
              className='border-2 focus:outline-0 text-[14px] md:pl-10 sm:pl-10 sm:mt-5 md:mt-0 rounded-md md:px-3 sm:p-3'
            />
          </div>
              <div className='flex gap-3'>
                <Link to='/SignUp'>
                <button className='bg-blue border border-2 border-blue hover:bg-deep-blue px-5 py-3 sm:mt-5 md:mt-0 rounded-md text-white duration-500'>Subscribe</button>
                </Link>
                <Link to='/SignIn'>
                <button className='bg-white border border-2 hover:border-blue px-5 py-3 sm:mt-5 md:mt-0 rounded-md text-blue hover:bg-blue hover:text-white duration-500'>Login</button>
                </Link>
                
            </div>
            </div>
          </ul>
        </div>
      </div>
      
        
     
      
    </>
  )
}

export default Nav


// `md:flex items-center gap-10 z-[-] font-Nunito text-[18px] ${isNavShowing ? 'md:flex gap-15 font-Nunito text-[18px] mb-2 md:bg-white sm:p-5 shadow-md' : 'hidden'}`