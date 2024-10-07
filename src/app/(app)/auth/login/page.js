"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser, signUpUser } from "@/app/api/api";
import { mainContext } from "../../context/context";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useDispatch,useSelector } from "react-redux";
import { login } from "@/lib/features/userSlice";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state)=>state.user)
  // const { setUser, token, setToken } = useContext(mainContext);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const schema = Yup.object().shape({
   
    password: Yup.string().required().label("password"),
    
    email: Yup.string().email().required().label("Email"),
   
  });

  const {
    control,
    handleSubmit,
    getValues,
    setValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data) => {
    setLoading(true);
    loginUser({ ...data })
      .then((res) => {
        if (res.status) {
          // setToken(res?.data.token);
          // setUser(res?.data);
          const userInfo = res?.data
          dispatch(login(userInfo))
          router.push('/')
        } else {
          toast.error("something went wrong with registeruser");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
      });
    setLoading(false);
  };

  return (
    <div className="w-full flex items-center">
      <div className="relative w-[50%] h-screen">
        <Image src="/images/login-page.jpg" layout="fill" alt="login-image" />
      </div>
      <div className="w-[50%] h-screen flex justify-center items-center  ">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="text-[var(--primary1)] font-bold text-xl">
            Desi Market
          </span>
          {/* <span>Signup</span> */}
          <div className="flex flex-col items-center justify-start shadow-2xl  p-4 w-full">
            <div className="w-[80%] mt-[20px] flex justify-start items-center ">
              <h2 className="font-semibold">Create Your Account</h2>
            </div>
            <div className="flex flex-col justify-start items-start w-[80%]">
              

              <div className="mt-[20px] mb-[10px] relative w-full">
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <input
                        type="email"
                        placeholder="Email"
                        label="email"
                        value={field?.value}
                        onChange={field?.onChange}
                        onBlur={field?.onBlur}
                        className="p-2 w-full border-[2px] border-solid border-[var(--primary3)] rounded-sm text-sm"
                      />
                    );
                  }}
                />
                {errors?.email && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.email?.message}
                  </p>
                )}

                <span className="absolute right-3 top-3">
                  <Icon
                    icon="clarity:email-line"
                    width="1.2em"
                    height="1.2em"
                    style={{ color: "gray" }}
                  />
                </span>
              </div>

              <div className="mt-[20px] mb-[10px] relative w-full">
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        label="password"
                        value={field?.value}
                        onChange={field?.onChange}
                        onBlur={field?.onBlur}
                        className="p-2 w-full border-[2px] border-solid border-[var(--primary3)] rounded-sm text-sm"
                      />
                    );
                  }}
                />
                {errors?.password && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.password?.message}
                  </p>
                )}

                {showPassword ? (
                  <span className="absolute right-3 top-3 cursor-pointer" onClick={()=>setShowPassword(false)}>
                    <Icon
                      icon="fluent:eye-off-32-light"
                      width="1.2em"
                      height="1.2em"
                      style={{ color: "gray" }}
                    />
                  </span>
                ) : (
                  <span className="absolute right-3 top-3 cursor-pointer" onClick={()=>setShowPassword(true)}>
                    <Icon
                      icon="fluent:eye-32-light"
                      width="1.2em"
                      height="1.2em"
                      style={{ color: "gray" }}
                    />
                  </span>
                )}
              </div>

             

              <div className="flex justify-between items-center gap-3 w-full">
                <span className="cursor-pointer text-[var(--primary1)] font-semibold" onClick={()=>router.push('/auth/login')}>
                  Already have an account ?
                </span>
                <div className="flex gap-3">
                  <button className="text-[var(--primary1)] border-[1px] border-[var(--primary1)] px-3 py-1 rounded-sm">
                    Cancel
                  </button>
                  <button className="text-white bg-[var(--primary1)] px-3 py-1 rounded-sm" onClick={handleSubmit(handleOnSubmit)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
