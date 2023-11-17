import { getData } from "@/utils/getData";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CourseDetail({ params: { slug } }) {
  // console.log(slug)
  const getSingleBrowseCourse = await getData(`courses/${slug}`)
  // console.log(getSingleBrowseCourse )
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-8 overflow-hidden">
        <div className="col-span-full lg:col-span-7 rounded-lg shadow border border-purple-200 p-5">
          <div className="flex items-center space-x-4 px-5 pb-3">
            <div className="flex bg-purple-100 p-2 rounded-full text-slate-800 items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <span>{getSingleBrowseCourse.chapters.length}</span>
          </div>
          <div className="px-5 py-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-slate-50 line-clamp-2">
             {getSingleBrowseCourse.title}
            </h5>
            <p className="mb-3 font-normal text-gray-400 line-clamp-3">
              {getSingleBrowseCourse.description}
            </p>
          </div>

          <div className="px-5">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-purple-700 dark:text-white">
                Course Progress
              </span>
              <span className="text-sm font-medium text-purple-700 dark:text-white">
                0% complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-5 rounded-lg shadow border border-gray-700 bg-slate-800 p-5">
          <h2 className="text-xl font-semibold mb-3">
            Ready to start learning?
          </h2>
          <p className="mb-4">
            Track your progress, watch with subtitles, change quality & speed,
            and more.
          </p>
          <div className="">
            <button className="block py-2 px-8 bg-slate-50 rounded-md w-full text-slate-800 ">
              Enroll for Free
            </button>
            <div className="flex my-2 items-center space-x-2">
              <div className="h-0.5 w-1/2 bg-slate-50"></div>
              <span>Or</span>
              <div className="h-0.5 w-1/2 bg-slate-50"></div>
            </div>
            <Link
              className="block text-center py-2 px-8 bg-slate-50 rounded-md w-full text-slate-800 "
              href="/dashboard/courses/id"
            >
              Preview the Course
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden my-4 lg:block">
        <Image
          src="/courses/barista.jpg"
          width={1000}
          height={667}
          className="w-full h-52 rounded-md object-cover"
        />
      </div>
    </div>
  );
}
