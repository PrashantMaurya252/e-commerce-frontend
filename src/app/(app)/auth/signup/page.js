"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpUser } from "@/app/api/api";
import { mainContext } from "../../context/context";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { setUser, token, setToken } = useContext(mainContext);
  const [showPassword, setShowPassword] = useState(false);

  const schema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().label("password"),
    fullname: Yup.string().required().label("Fullname"),
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
    signUpUser({ ...data })
      .then((res) => {
        if (res.status) {
          setToken(res?.data.token);
          setUser(res?.data);
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
        <div className="flex flex-col justify-center items-center">
          <span className="text-[var(--primary1)] font-bold text-xl">
            Desi Market
          </span>
          {/* <span>Signup</span> */}
          <div className="flex flex-col items-center justify-start shadow-2xl  p-4">
            <div className="w-full mt-[20px] flex justify-start items-center">
              <h2 className="font-semibold">Create Your Account</h2>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="mt-[20px] mb-[10px] relative">
                <Controller
                  control={control}
                  name="username"
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        placeholder="Username"
                        label="username"
                        value={field?.value}
                        onChange={field?.onChange}
                        onBlur={field?.onBlur}
                      />
                    );
                  }}
                />
                {errors?.username && (
                  <p className="text-sm text-red-600">
                    {errors?.username?.message}
                  </p>
                )}
              </div>

              <div className="mt-[20px] mb-[10px] relative">
                <Controller
                  control={control}
                  name="fullname"
                  render={({ field }) => {
                    return (
                      <input
                        type="text"
                        placeholder="Fullname"
                        label="fullname"
                        value={field?.value}
                        onChange={field?.onChange}
                        onBlur={field?.onBlur}
                      />
                    );
                  }}
                />
                {errors?.fullname && (
                  <p className="text-sm text-red-600">
                    {errors?.fullname?.message}
                  </p>
                )}
              </div>

              <div className="mt-[20px] mb-[10px] relative">
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
                      />
                    );
                  }}
                />
                {errors?.email && (
                  <p className="text-sm text-red-600">
                    {errors?.email?.message}
                  </p>
                )}

                <span className="absolute right-1 top-0">
                  <Icon
                    icon="clarity:email-line"
                    width="1.2em"
                    height="1.2em"
                    style={{ color: "gray" }}
                  />
                </span>
              </div>

              <div className="mt-[20px] mb-[10px] relative">
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
                      />
                    );
                  }}
                />
                {errors?.email && (
                  <p className="text-sm text-red-600">
                    {errors?.email?.message}
                  </p>
                )}

                {
                  showPassword ? (
                    <span className="absolute right-1 top-0">
                    <Icon
                      icon="fluent:eye-off-32-light"
                      width="1.2em"
                      height="1.2em"
                      style={{ color: "gray" }}
                    />
                  </span>
                  ):(
                    <span className="absolute right-1 top-0">
                    <Icon
                      icon="fluent:eye-32-light"
                      width="1.2em"
                      height="1.2em"
                      style={{ color: "gray" }}
                    />
                  </span>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
