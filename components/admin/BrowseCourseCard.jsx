import { BookA, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrowseCourseCard() {
  return (
    <Link
      href="/dashboard/browse-courses/slug"
      className="max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700"
    >
      <div>
        <Image
          className="rounded-t-lg w-full h-[150px]"
          src="/courses/barista.jpg"
          alt=""
          width={1000}
          height={667}
        />
      </div>
      <div className="px-5 py-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight  text-slate-50 line-clamp-1">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-400 line-clamp-2">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
      <div className="flex items-center space-x-4 px-5 pb-3">
        <div className="flex bg-purple-100 p-2 rounded-full text-slate-800 items-center justify-center">
          <BookOpen className="w-4 h-4" />
        </div>
        <span>32 Chapters</span>
      </div>
    </Link>
  );
}
