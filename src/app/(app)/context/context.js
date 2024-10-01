'use client'

import React, { createContext, useState } from 'react'


export const mainContext = createContext()
const Context = ({children}) => {
    const [user,setUser] = useState(null)
    const [token,setToken] = useState("")
    const [isLoggedIn,setIsLoggedIn] =useState(false)

    const globalVariables ={
        user:user,
        setUser:setUser,
        token:token,
        setToken:setToken,
        isLoggedIn:isLoggedIn
    }


  return (
    <mainContext.Provider value={globalVariables}>
        {children}
    </mainContext.Provider>
  )
}

export default Context