"use client";
import { Menu } from "lucide-react";
import Search from "./Search";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";

export default function Header({ setIsOpen, title }) {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className='bg-slate-950 h-14 rounded-md flex justify-between items-center px-8 '>
      <button
        onClick={() => setIsOpen(true)}
        className='text-slate-50 md:hidden'
      >
        <Menu />
      </button>
      {title === "Hello" ? (
        <h2 className='text-white hidden md:block'>
          {title} <span className='text-purple-400'>{user.firstName}!</span>
        </h2>
      ) : (
        <Link
          href='/dashboard/browse-courses'
          className='text-white hidden md:block'
        >
          {title} <span className='text-purple-400'>{user.firstName}!</span>
        </Link>
      )}

      {/* <Search /> */}
      <div>
        <button>
          <UserButton afterSignOutUrl='/' />
        </button>
      </div>
    </div>
  );
}
