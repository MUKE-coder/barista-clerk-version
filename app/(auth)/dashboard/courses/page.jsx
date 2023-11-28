import DeleteBtn from "@/components/admin/DeleteBtn";
import { getData } from "@/utils/getData";
import { Eye, Pencil, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Courses() {
  const getCourses = await getData("courses");

  return (
    <div className="">
      <div className="flex text-slate-50 items-center justify-between border-b border-slate-700 pb-8">
        <h2 className="text-3xl font-semibold">Courses</h2>
        <Link
          href="/dashboard/courses/create"
          className="flex items-center space-x-3 bg-purple-400 text-slate-900 px-8 py-3 rounded-md font-semibold"
        >
          <Plus className="text-xs" />
          <span>Add Course</span>
        </Link>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 py-8">
        {getCourses.map((course) => {
          // console.log(course);
          return (
            <div
              key={course.id}
              className="max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700"
            >
              <Link href="#">
                <img
                  className="rounded-t-lg w-full h-[200px] object-cover"
                  src={course.imageUrl}
                  alt={course.title}
                  width={1000}
                  height={667}
                />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  text-slate-50 line-clamp-1">
                    {course.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="inline-flex items-center p-2  font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 "
                  >
                    <Eye className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900 "
                  >
                    <Pencil className="h-5 w-5" />
                  </Link>
                  <DeleteBtn courseId={course.id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
