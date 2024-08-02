"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";


const Header = () => {
    const path = usePathname()
    console.log(path)
    return (
    <div className=" flex  justify-between  items-center p-4 shadow-sm bg-secondary">
      <Image src={"/logo.svg"} alt="logo" width={180} height={100} />

      <ul className=" hidden  md:flex justify-center items-center gap-6">
        <li className={`hover:text-blue-500 text-xl cursor-pointer ${path=="/dashboard"&&" font-bold text-blue-500"} text-blue-600` }>Dashboard</li>
        <li className={`hover:text-blue-500 text-xl cursor-pointer ${path=="/dashboard/q"&&" font-bold text-blue-600"}` }>Questions</li>
        <li className={`hover:text-blue-500 text-xl cursor-pointer ${path=="/dashboard/upgrade"&&" font-bold text-blue-600"}` }>Upgrade</li>
        <li className={`hover:text-blue-500 text-xl cursor-pointer ${path=="/dashboard/how"&&" font-bold text-blue-600"}` }>How it is work?</li>      
          </ul>
          <UserButton />
    </div>
  );
};

export default Header;
