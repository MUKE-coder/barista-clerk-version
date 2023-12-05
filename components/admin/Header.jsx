"use client";
import { Menu } from "lucide-react";
import Search from "./Search";

import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { generateInitials } from "@/utils/generateInitials";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header({ setIsOpen, title }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>loading...</p>;
  }
  if (status === "unauthenticated") {
    router.push("/login");
  }
  const initials = generateInitials(session?.user?.name);
  // console.log(session);
  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <div className="bg-slate-950 h-14 rounded-md flex justify-between items-center px-8 ">
      <button
        onClick={() => setIsOpen(true)}
        className="text-slate-50 md:hidden"
      >
        <Menu />
      </button>
      {title === "Hello" ? (
        <h2 className="text-white hidden md:block">
          {title} <span className="text-purple-400">{session?.user?.name}!</span>
        </h2>
      ) : (
        <Link
          href="/dashboard/browse-courses"
          className="text-white hidden md:block"
        >
          {title} <span className="text-purple-400">{session?.user?.name}!</span>
        </Link>
      )}

      {/* <Search /> */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="text-slate-800 bg-slate-200 w-9 h-9 rounded-full flex items-center justify-center">
              {initials}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
            {/* 
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem> */}
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
