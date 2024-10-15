'use client'

import CategoryCard from '@/components/CategoryCard'
import { useRouter } from 'next/navigation'
import React from 'react'

const Categories = () => {

    const router = useRouter()

    const options = [
        {
            src:'/images/mobiles.jpg',
            label:"Mobiles",
            type:'mobiles'
        },
        {
            src:'/images/clothes.jpg',
            label:"Clothes",
            type:'clothes'
        },
        {
            src:'/images/shoes.jpg',
            label:"Shoes",
            type:"shoes"
        },
        {
            src:'/images/electronics.jpg',
            label:"Electronics",
            type:"electronics"
        },
    ]
  return (
    <div className="flex justify-center items-center w-full gap-4 h-screen">
        {options.map((item,index)=>(
            <span key={index} className="cursor-pointer" onClick={()=>router.push(`/?type=${item.type}`)}>
                <CategoryCard items={item}/>
            </span>
            
        ))}
    </div>
  )
}

export default Categories