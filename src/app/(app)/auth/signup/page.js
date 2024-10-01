'use client'


import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpUser } from '@/app/api/api'
import { mainContext } from '../../context/context'

const Signup = () => {

    const [loading,setLoading] = useState(false)
    const {setUser,token,setToken} = useContext(mainContext)

    const schema =Yup.object().shape({
        username:Yup.string().required().label("Username"),
        password:Yup.string().required().label("password"),
        fullname:Yup.string().required().label("Fullname"),
        email:Yup.string().email().required().label("Email"),

    })

    const {control,handleSubmit,getValues,setValues,formState:{errors}} = useForm({
        mode:'onBlur',
        resolver:yupResolver(schema)
    })

    const handleOnSubmit = (data)=>{
        setLoading(true)
        signUpUser({...data}).then((res)=>{
            if(res.status){
                
            }
        })
    }
  return (
    <div className='w-full flex items-center'>
      <div className='relative w-[50%] h-screen'>
        <Image src='/images/login-page.jpg' layout='fill' alt='login-image'/>
      </div>
      <div className='w-[50%] h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-[var(--primary1)] font-bold text-xl'>Desi Market</span>
          <span>Signup</span>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Signup