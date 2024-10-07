'use client'

import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state)=>state.user)

  console.log(user,"user")
  return (
    <div>
      <span className="icon-[iconamoon--menu-kebab-horizontal-bold] w-[20px] h-[20px]"></span>
      Home</div>
  );
}
