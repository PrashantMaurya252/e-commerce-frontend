import { toast } from "react-toastify";
import apiManager from "./index";

export const signUpUser = (data) => {
  const apiCall = apiManager("POST", "/users/register", data)
    .then((res) => {
      if (res.status) {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("user", res.token);
        toast.success("user register successfully");
      }
      return res;
    })
    .catch((err) => {
      toast.error("Something went wrong");
      console.log(err);
    });
  return apiCall;
};

export const loginUser = (data) => {
  // const apiCall = apiManager("POST",'/users/login',data)
  // .then((res)=>{
  //     if(res.status){
  //          localStorage.setItem("user",JSON.stringify(res?.data?.user))
  //          localStorage.setItem("token",res?.data?.accessToken)
  //          toast.success("user login successfully")
  //     }
  //     return res
  // })
  // .catch((err)=>{
  //     toast.error("Login not processed")
  // })

  // return apiCall
  return fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      if (!res?.ok) {
        throw new Error("Failed to login");
      }

      const result = await res.json();

      localStorage.setItem("user", JSON.stringify(result?.data?.user));
      localStorage.setItem("token", result?.data?.accessToken);
      toast.success("user login successfully");

      return result;
    })
    .catch((err) => {
      toast.error("Login not processed");
      console.log("error during login", err);
    });
};

export const logoutUser = () => {
  const apiCall = apiManager("POST", "users/logout")
    .then((res) => {
      if (res.status) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      return res;
    })
    .catch((err) => {
      console.log(err);
    });

    return apiCall
};

export const getAllProducts = () =>{
  const apiCall = apiManager("GET","/products/all-products")
  .then((res)=>{
    console.log(res,"response status 123")
    if(res.status){
      
      console.log("All products api called")
    }
    return res
  }).catch((err)=>{
    console.log(err,"error")
  })

  return apiCall
}

export const markFavourite=(id) =>{
  const apiCall = apiManager("POST",`/products/mark-favourite/${id}`)
  .then((res)=>{
    if(res.status){
      console.log(`${id} this id mark favourite`)
    }
    return res
  }).catch((err)=>{
    console.log(err,"error")
  })
  return apiCall
}

export const unmarkFavourite=(id) =>{
  const apiCall = apiManager("POST",`/products/unmark-favourite/${id}`)
  .then((res)=>{
    if(res.status){
      console.log(`${id} this id unmark favourite`)
    }
    return res
  }).catch((err)=>{
    console.log(err,"error")
  })
  return apiCall
}