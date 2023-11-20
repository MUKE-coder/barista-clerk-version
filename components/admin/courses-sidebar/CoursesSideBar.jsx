"use client";
import {
  BellDot,
  BookPlus,
  Lock,
  PauseCircle,
  LogOut,
  LogOutIcon,
  SlidersHorizontal,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CoursesSideBar({ isOpen, setIsOpen }) {
  const sidebarLinks = [
    {
      title: "Introduction",
      href: "/introduction",
      icon: PauseCircle,
    },
    {
      title: "Environment Setup",
      href: "/",
      icon: Lock,
    },
    {
      title: "Folder Setup",
      href: "/",
      icon: Lock,
    },
    {
      title: "Authentication",
      href: "/",
      icon: Lock,
    },
    {
      title: "NavBar",
      href: "/",
      icon: Lock,
    },
    {
      title: "Search Filter",
      href: "/",
      icon: Lock,
    },
    {
      title: "Category Filter",
      href: "/",
      icon: Lock,
    },
    {
      title: "Companion Creation Form",
      href: "/",
      icon: Lock,
    },
    {
      title: "Companion Creation API",
      href: "/",
      icon: Lock,
    },
    {
      title: "Companion Creation List",
      href: "/",
      icon: Lock,
    },
    {
      title: "Chat Header",
      href: "/",
      icon: Lock,
    },
    {
      title: "Chat UI",
      href: "/",
      icon: Lock,
    },
    {
      title: "Memory Service",
      href: "/",
      icon: Lock,
    },
    {
      title: "Chat API",
      href: "/",
      icon: Lock,
    },
    {
      title: "Strip UI",
      href: "/",
      icon: Lock,
    },
    {
      title: "Deployment",
      href: "/",
      icon: Lock,
    },
  ];
  const pathname = usePathname();
  // console.log(isOpen);
  return (
    <div
      className={
        isOpen
          ? "fixed md:static z-50 md:w-72 w-3/4 left-0 shadow-md bg-slate-800 md:bg-slate-950 min-h-screen rounded-md overflow-hidden"
          : "hidden md:block md:static md:w-72 w-3/4 shadow-md bg-slate-800 md:bg-slate-950 min-h-screen rounded-md overflow-hidden overflow-y-auto"
      }
    >
      <div className=' bg-amber-500 p-2 rounded-md flex justify-between md:justify-center '>
        <div className='flex flex-col items-center justify-center'>
          <Link href='/dashboard' className='text-3xl font-bold'>
            Barista G
          </Link>
          <small>The Best school</small>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className='md:hidden text-slate-50'
        >
          <X />
        </button>
      </div>
      <div className='flex justify-between  flex-col py-2'>
        <nav className='py-5 border-b border-slate-700 flex flex-col gap-4 text-slate-50 px-2 pb-6'>
          {sidebarLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                onClick={() => setIsOpen(false)}
                href={item.href}
                className={
                  pathname == `${item.href}`
                    ? "flex gap-3 bg-purple-400 py-2 text-slate-900 px-4 rounded-md"
                    : "flex gap-3 px-2"
                }
              >
                <Icon />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
        <div className='py-8 flex flex-col gap-4 text-slate-50 px-4'>
          <button href='/dashboard' className='flex gap-3'>
            <LogOutIcon />
            <span>Logout</span>
          </button>
          <Link href='/dashboard' className='flex gap-3'>
            <SlidersHorizontal />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
