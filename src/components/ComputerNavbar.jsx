import Image from 'next/image'
import React from 'react'

const ComputerNavbar = () => {
  return (
    <div className='w-full h-[150px]'>
        <div>
            <h1>Desi Market</h1>
        </div>
        <div>
            <div>
                <input type='text' placeholder='Search Products here'/>
            </div>
        </div>
        <div>
            <div>
                <button>Login</button>
            </div>
            <div>
            <span class="icon-[bi--cart]" style="width: 1.2em; height: 1.2em; color: white;"></span>
            <span>Cart</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default ComputerNavbar