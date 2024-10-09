"use client";

import { laila } from "@/font";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ComputerNavbar = ({ items }) => {
  const router = useRouter();
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-[20px] bg-[var(--primary2)]">
      <div className="w-[20%]">
        <h1
          className={`${laila.className} text-white  text-2xl cursor-pointer`}
        >
          Desi Market
        </h1>
      </div>
      <div className="w-[30%] flex justify-end items-center">
        <div className="w-[100%]">
          <input
            className="w-full rounded-2xl px-[10px] py-[5px]"
            type="text"
            placeholder="Search Products here"
          />
        </div>
      </div>
      <div className="flex justify-end items-center text-white gap-3 w-[20%]">
        {items.map((item, index) => (
          <span
            key={item.id}
            className="cursor-pointer"
            onClick={() => router.push(`${item?.path}`)}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="w-[15%] flex justify-end items-center gap-[10px]">
        <div
          className="w-[50%] bg-white text-[var(--primary1)] flex justify-center items-center py-[2px] rounded-sm"
          onClick={() => router.push("/auth/login")}
        >
          <button
            className="font-semibold "
            onClick={() => router.push("/auth/login")}
          >
            Login
          </button>
        </div>
        <div className="flex flex-col justify-center items-center relative cursor-pointer">
          <Icon
            icon="mdi:cart-outline"
            width="40px"
            height="40px"
            style={{ color: "white" }}
            className="bg-[var(--primary3)] rounded-full p-1"
          />
          <span className="text-sm absolute top-[-5px] right-[-5px] rounded-full bg-white text-[var(--primary1)] px-[5px]">
            2
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ComputerNavbar;
