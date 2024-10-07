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
import { useRouter } from "next/navigation";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  // const { setUser, token, setToken } = useContext(mainContext);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const schema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().label("password"),
    fullname: Yup.string().required().label("Fullname"),
    email: Yup.string().email().required().label("Email"),
    phone: Yup.number()
      .required()
      .test(
        "len",
        "Phone Number must 10 character long",
        (val) => val && val.toString().length === 10
      )
      .label("Phone"),
    address: Yup.string().required().label("Address"),
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
                        className="p-2 w-full border-[2px] border-solid border-[var(--primary3)] rounded-sm text-sm"
                      />
                    );
                  }}
                />
                {errors?.username && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.username?.message}
                  </p>
                )}
              </div>

              <div className="mt-[20px] mb-[10px] relative w-full">
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
                        className="p-2 w-full border-[2px] border-solid border-[var(--primary3)] rounded-sm text-sm"
                      />
                    );
                  }}
                />
                {errors?.fullname && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.fullname?.message}
                  </p>
                )}
              </div>

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
                {errors?.email && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.email?.message}
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

              <div className="mt-[20px] mb-[10px] relative w-full">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => {
                    return (
                      <input
                        type="number"
                        placeholder="Phone"
                        label="phone"
                        value={field?.value}
                        onChange={field?.onChange}
                        onBlur={field?.onBlur}
                        className="p-2 w-full border-[2px] border-solid border-[var(--primary3)] rounded-sm text-sm"
                      />
                    );
                  }}
                />
                {errors?.phone && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.phone?.message}
                  </p>
                )}

                <span className="absolute right-3 top-3">
                  <Icon
                    icon="mdi:phone"
                    width="1.2em"
                    height="1.2em"
                    style={{ color: "gray" }}
                  />
                </span>
              </div>

              <div className="mt-[20px] mb-[10px] relative w-full">
                <Controller
                  control={control}
                  name="address"
                  render={({ field }) => {
                    return (
                      <textarea
                        row="5"
                        resize="none"
                        type="text"
                        placeholder="Address"
                        label="address"
                        value={field?.value}
                        onChange={field?.onChange}
                        onBlur={field?.onBlur}
                        className="p-2 w-full resize-none border-[2px] border-solid border-[var(--primary3)] rounded-sm text-sm"
                      />
                    );
                  }}
                />
                {errors?.address && (
                  <p className="text-sm text-red-600 pl-2">
                    {errors?.address?.message}
                  </p>
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

export default Signup;
