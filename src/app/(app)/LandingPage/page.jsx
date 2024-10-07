'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LandingPage = () => {
  const dispatch = useDispatch()

  const user = useSelector((state)=>state.user)

  console.log(user,"user")
  
  
  return (
    <div>Hello</div>
  )
}

export default LandingPage