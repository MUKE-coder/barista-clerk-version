"use client";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="bg-gray-300 min-h-screen flex gap-6 p-4">
      {pathname.startsWith("/dashboard/courses/detailed") ? (
        ""
      ) : (
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      )}
      <div className="flex gap-6 flex-col w-full">
        <Header setIsOpen={setIsOpen} />
        <div className="bg-slate-950 text-slate-50 rounded-md min-h-screen py-8 px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
