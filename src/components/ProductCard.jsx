import { markFavourite } from '@/app/api/api'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({items,onFavouriteClick}) => {
  console.log(items?.isfavourite ,"items")
  
  return (
    <div className="w-[20%] h-[300px] border-[1px] border-[var(--primary1)] rounded-sm cursor-pointer">
        <div className="w-full h-[60%] relative">
            <Image src={items?.image} fill alt="product-page" className='object-contain'/>
        </div>
        <div className="p-2 flex flex-col justify-center gap-[10px]">
            <div className = "flex justify-end items-center " onClick={onFavouriteClick}>
              {items?.isfavourite ? (
                 <Icon icon="line-md:heart-filled" width="1.5em" height="1.5em"  style={{color: "gray"}} />
              ):(
                 <Icon icon="line-md:heart" width="1.5em" height="1.5em"  style={{color: "gray"}} />
              )}
           
            </div>
            
            <div className='flex flex-col justify-center items-start'>
              <span className='font-semibold'>{items?.name}</span>
              <span className='text-[12px]'>{items?.description}</span>
            </div>
            <div className='flex justify-end items-center'>
              <span className='text-[var(--primary1)]'>Click here to see Details</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard