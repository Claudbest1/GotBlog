import React from 'react'
import { AiFillLock } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
      <div className='flex justify-center items-center h-screen flex-col font-sans1 bg-blue'>
          <header className='flex flex-col'>
              <h1 className='text-xl font-bold mb-5 text-white text-[24px] font-sans'>Log In</h1>
              </header> 
              <form action="" className='flex flex-col bg-white p-10 shadow-lg rounded-md'>
                 <label htmlFor="" className='text-sm mb-2'>Email</label>
              <div className='w-[300px]'>
                  <span className='absolute flex items-center pl-2 pt-3'><MdEmail  className='text-gray'/>
                  </span>
                <input
                      type='E-mail'
                      placeholder='Enter email'
                      className='border border-blue rounded-md p-2 pl-8 mb-3 w-[300px]'

                />
              </div>

              <label htmlFor="" className='text-sm mb-2'>Password</label>
              <div className='w-[300px]'>
                  <span className='absolute flex items-center pl-2 pt-3'><AiFillLock  className='text-gray'/>
                  </span>
                <input
                      type="password"
                      placeholder='Enter password'
                      className='border border-blue rounded-md p-2 pl-8 mb-3 w-[300px]'

                />
              </div>
              <button className='bg-blue px-5 py-3 sm:mt-5 rounded-md text-white hover:bg-deep-blue hover:text-white duration-500'>Login</button>
              <Link to='/SignUp' className='flex justify-center'>
              <button className='text-blue mt-3'>Sign Up</button>
              </Link>
              <Link to='/ForgotPassword' className='flex justify-center'>
              <button className='text-blue mt-3'>Forgot password</button>
              </Link>
              
              </form>
        
    </div>
  )
}

export default SignIn