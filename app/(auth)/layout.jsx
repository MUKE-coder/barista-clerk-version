"use client";
import Header from "@/components/admin/Header";
import Main from "@/components/admin/Main";
import Sidebar from "@/components/admin/Sidebar";
import CoursesSideBar from "@/components/admin/courses-sidebar/CoursesSideBar";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // console.log(isOpen);

  return (
    <div className='bg-gray-300 min-h-screen flex gap-6 p-4'>
      {pathname.startsWith("/dashboard/courses/detailed") ? (
        <CoursesSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
      ) : (
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <div className='flex gap-6 flex-col w-full'>
        {pathname.startsWith("/dashboard/courses/detailed") ? (
          <Header title='Browse Back' setIsOpen={setIsOpen} />
        ) : (
          <Header title='Hello' setIsOpen={setIsOpen} />
        )}
        <div className='bg-slate-950 text-slate-50 rounded-md min-h-screen py-8 px-8'>
          {children}
        </div>
      </div>
    </div>
  );
}
