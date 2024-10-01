import Image from 'next/image'
import React from 'react'

const login = () => {
  return (
    <div className='w-full flex items-center'>
      <div className='relative w-[50%] h-screen'>
        <Image src='/images/login-page.jpg' layout='fill' alt='login-image'/>
      </div>
      <div className='w-[50%] h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-[var(--primary1)] font-bold text-xl'>Desi Market</span>
          <span>Login</span>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default login