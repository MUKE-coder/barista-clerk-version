"use client";
import React, { useState } from "react";
import Main from "@/components/admin/Main";
import { usePathname } from "next/navigation";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import CoursesSideBar from "@/components/admin/courses-sidebar/CoursesSideBar";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // console.log(isOpen);

  return (
    <div className='bg-gray-300 min-h-screen flex gap-6 p-4'>
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className='flex gap-6 flex-col w-full'>
        <Header setIsOpen={setIsOpen} />
        <div className='bg-slate-950 text-slate-50 rounded-md min-h-screen lg:py-8 lg:px-8'>
          {children}
        </div>
      </div>
    </div>
  );
}
