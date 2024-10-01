import { toast } from "react-toastify"


export const signUpUser = (data)=>{
    const apiCall = apiManager("POST","users/register",data)
    .then((res)=>{
        if(res.status){
            localStorage.setItem("user",JSON.stringify(res.data))
            localStorage.setItem("user",res.token)
        }
        return res
    })
    .catch((err)=>{
        toast('Something went wrong')
        console.log(err)
    })
    return apiCall
}

export const loginUser = (data) =>{
    const apiCall = apiManager("POST",'users/login',data)
    .then((res)=>{
        if(res.status){
             localStorage.setItem("user",JSON.stringify(res?.data))
             localStorage.setItem("token",res.token)
        }
        return res
    })
    .catch((err)=>{
        toast("Login not processed")
    })

    return apiCall
}

export const logoutUser = ()=>{
    const apiCall = apiManager("POST",'users/logout')
    .then((res)=>{
        if(res.status){
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
        return res
    })
    .catch((err)=>{
        console.log(err)
    })
}