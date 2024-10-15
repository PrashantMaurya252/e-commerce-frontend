'use client'

import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getAllProducts, markFavourite, unmarkFavourite } from "./api/api";
import {useState,useEffect} from 'react'

export default function Home() {
  const user = useSelector((state)=>state.user)
  const [productData,setProductData] = useState()
  const [loading,setLoading] = useState(false)

  function allProducts(){
    setLoading(true)
    getAllProducts().then((res)=>{
      console.log(res,"product Response")
      if(res?.status === 200){
        
        setProductData(res?.data?.products)
      }else{
        console.log("something went wrong with products api")
      }
    }).catch((err)=>{
      console.log("Products api error",err)
    }).finally(()=>{
      setLoading(false)
    })
  }

  function handleLikeClick(productId){
    setLoading(true)
    markFavourite(productId).then((res)=>{
      if(res.status){
        console.log("product mark favourite")
      }
    }).catch((err)=>{
      console.log(err,"err")
    }).finally(()=>{
      setLoading(false)
    })
  }

  function handleUnLikeClick(productId){
    setLoading(true)
    unmarkFavourite(productId).then((res)=>{
      if(res.status){
        console.log("product mark favourite")
      }
    }).catch((err)=>{
      console.log(err,"err")
    }).finally(()=>{
      setLoading(false)
    })
  }

  useEffect(()=>{
    allProducts()
  },[])

  console.log(productData,"productData")
  console.log(user,"user")
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="relative w-full h-[40%]">
        <Image src='/images/banner-image.jpg' alt="banner-image" fill className="object-cover"/>
      </div>
      <div className="flex justify-center items-center gap-[10px] w-full mt-[10px]">
        {productData?.map((item,index)=>(
          
            <ProductCard items={item} key={index} loading={loading} setLoading={setLoading} onFavouriteClick={item?.isfavourite ? (()=>handleUnLikeClick(item?._id)) : (()=>handleLikeClick(item?._id))}/>
          
        ))}
      </div>
      
     </div>
  );
}
