"use client";
import { Menu } from "lucide-react";
import Search from "./Search";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function LearnHeader({ setIsOpen }) {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="bg-slate-950 h-14 rounded-md flex justify-between items-center px-8 ">
      <button
        onClick={() => setIsOpen(true)}
        className="text-slate-50 md:hidden"
      >
        <Menu />
      </button>
      <h2 className="text-white hidden md:block">
        Hello <span className="text-purple-400">{user.firstName}!</span>
      </h2>
      {/* <Search /> */}
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
