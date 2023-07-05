import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {AiFillLock} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
 
//   const [error, setError] = useState({
//     username: '',
//     password: '',
//     confirmPassword: ''
//   })
 
  const onInputChange = e => {
      let inputValue = { ...input }
      inputValue[e.target.name] = e.target.value
      setInput(inputValue)
      
  }
    const handleSubmit = (e) => {
        e.preventDefault()
      if (input.password !== input.confirmPassword) {
          setErrors({ ...errors, cPassword: "password does not match" })
      } else {
          setErrors({ ...errors, cPassword: "" })
        }
  }
//   const validateInput = e => {
 
//   }

  return (
      <div className='flex justify-center items-center h-screen flex-col font-sans1 bg-blue'>
          <header className='flex flex-col'>
              <h1 className='text-xl font-bold mb-5 text-white text-[24px] font-sans'>Sign Up</h1>
              </header> 
          <form action="" className='flex flex-col bg-white p-10 shadow-lg rounded-md'>
              <label htmlFor="" className='text-sm mb-2'>Username</label>
              <div className='w-[300px]'>
                  <span className='absolute flex items-center pl-2 pt-3'><FaUser  className='text-gray z-0'/>
                  </span>
                <input
                      type="text"
                      name='username'
                      placeholder='Enter username'
                      className='border border-blue rounded-md p-2 pl-8 mb-3 w-[300px]'
                      value={input.username}
                      onChange={onInputChange}
                    //   onBlur={validate}

                  />
                  {/* {error.username && <span className=''>{error.username}</span>} */}
              </div>

              <label htmlFor="" className='text-sm mb-2'>Email</label>
              <div className='w-[300px]'>
                  <span className='absolute flex items-center pl-2 pt-3'><MdEmail  className='text-gray'/>
                  </span>
          <input
                      type='e-mail'
                      name='email'
                      placeholder='Enter email'
                      className='border border-blue rounded-md p-2 pl-8 mb-3 w-[300px]'
                      value={input.email}
                      onChange={onInputChange}
                    //   onBlur={validate}

                  />
                  {/* {error.email && <span className=''>{error.email}</span>} */}
              </div>

              <label htmlFor="" className='text-sm mb-2'>Password</label>
              <div className='w-[300px]'>
                  <span className='absolute flex items-center pl-2 pt-3'><AiFillLock  className='text-gray'/>
                  </span>
                <input
                      type="password"
                      name='password'
                      placeholder='Enter password'
                      className='border border-blue rounded-md p-2 pl-8 mb-3 w-[300px]'
                      value={input.password}
                      onChange={onInputChange}
                    //   onBlur={validate}

                  />
                  {/* {error.password && <span className=''>{error.password}</span>} */}
              </div>

              <label htmlFor="" className='text-sm mb-2'>Confirm Password</label>
              <div className='w-[300px]'>
                  <span className='absolute flex items-center pl-2 pt-3'><AiFillLock  className='text-gray'/>
                  </span>
                <input
                      type="password"
                      name='confirmPassword'
                      placeholder='Enter password again'
                      className='border border-blue rounded-md p-2 pl-8 mb-3 w-[300px]'
                      value={input.forgotPassword}
                      onChange={onInputChange}
                    //   onBlur={validate}

                  />
                  {errors.cPassword && <span className='text-pink text-[10px]'>{errors.cPassword}</span>}
              </div>
              
              <button type='button' className='bg-blue px-5 py-3 sm:mt-5 rounded-md text-white hover:bg-deep-blue hover:text-white duration-500' onClick={handleSubmit}>Sign Up</button>
              <Link to='/SignIn' className='flex justify-center'>
              <button type='button' className='text-blue mt-3'>Login</button>
              </Link>
              
              </form>
        
    </div>
  )
}

export default SignUp