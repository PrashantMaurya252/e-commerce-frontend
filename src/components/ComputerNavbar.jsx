import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const ComputerNavbar = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-[20px] bg-[var(--primary2)]'>
        <div className='w-[10%]'>
            <h1>Desi Market</h1>
        </div>
        <div className='w-[60%]'>
            <div>
                <input type='text' placeholder='Search Products here'/>
            </div>
        </div>
        <div className='w-[30%] flex justify-end items-center gap-[10px]'>
            <div>
                <button>Login</button>
            </div>
            <div className='flex flex-col justify-center items-center relative'>
            <Icon icon="mdi:cart-outline" width="40px" height="40px"  style={{color: "white"}} className='bg-[var(--primary3)] rounded-full p-1'/>
             <span className='text-sm absolute top-[-5px] right-[-5px] rounded-full bg-white text-[var(--primary1)] px-[5px]'>2</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default ComputerNavbar