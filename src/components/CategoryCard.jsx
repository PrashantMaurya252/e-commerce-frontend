import Image from 'next/image'
import React from 'react'

const CategoryCard = ({items}) => {
  return (
    <div className="w-[200px] h-[250px] border-[var(--primary1)] border-[1px] rounded-sm">
        <div className="w-full h-[90%] relative">
            <Image src={items?.src} alt="category-image" fill className="object-fit"/>
        </div>
        <div className="flex justify-center items-center">
            <span className="font-semibold">{items?.label}</span>
        </div>
    </div>
  )
}

export default CategoryCard