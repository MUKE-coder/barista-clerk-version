import { getData } from "@/utils/getData";
import { BookOpen, Check, CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default async function CourseDetail({ params: { slug } }) {
  // console.log(slug)
  const courseDetail = await getData(`courses/${slug}`);
  // console.log(courseDetail);
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-8 overflow-hidden">
        <div className="col-span-full lg:col-span-7 rounded-lg shadow border border-purple-200 p-5">
          <div className="flex items-center space-x-4 px-5 pb-3">
            <div className="flex bg-purple-100 p-2 rounded-full text-slate-800 items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <span>{courseDetail.chapters.length} Chapters</span>
          </div>
          <div className="px-5 py-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-slate-50 line-clamp-2">
              {courseDetail.title}
            </h5>
            <p className="mb-3 font-normal text-gray-400 line-clamp-3">
              {courseDetail.description}
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
          <div className="mb-3">
            <Image
              className="rounded-t-lg w-full h-[150px] object-cover"
              src={courseDetail.imageUrl}
              alt=""
              width={1000}
              height={667}
            />
          </div>
          <div className="">
            <button className="block py-2 px-8 bg-slate-50 rounded-md w-full text-slate-800 text-3xl font-bold">
              ${courseDetail.price.toFixed(2)}
            </button>
            <div className="flex my-2 items-center space-x-2">
              <div className="h-0.5 w-1/2 bg-slate-50"></div>
              <span>Or</span>
              <div className="h-0.5 w-1/2 bg-slate-50"></div>
            </div>
            <Link
              className="block text-center text-xl py-2.5 px-8 bg-purple-900 rounded-md w-full text-slate-50 "
              href={`/dashboard/courses/detailed/${courseDetail.id}`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        {courseDetail.milestones.length > 0 && (
          <div className="flex p-8 bg-slate-700 my-8 text-slate-100 border border0gray-700 rounded-lg flex-col">
            <h2 className="text-3xl mb-4">This course includes:</h2>
            <div className="grid grid-cols-1  gap-4 ">
              {courseDetail.milestones.map((item, i) => {
                return (
                  <div key={i} className="flex space-x-3 items-center">
                    <CheckCheck className="w-6 h-6 shrink-0" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {courseDetail.requirements.length > 0 && (
          <div className="flex p-8 bg-slate-700 my-8 text-slate-100 border border0gray-700 rounded-lg flex-col">
            <h2 className="text-3xl mb-4">Course Requirements</h2>
            <div className="grid grid-cols-1  gap-4 ">
              {courseDetail.requirements.map((item, i) => {
                return (
                  <div key={i} className="flex space-x-3 items-center">
                    <CheckCheck className="w-6 h-6 shrink-0" />
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {courseDetail.whatToLearn.length > 0 && (
        <div className="flex p-8 bg-slate-200 my-8 text-slate-900 border border0gray-700 rounded-lg flex-col">
          <h2 className="text-3xl mb-4">What you will Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            {courseDetail.whatToLearn.map((item, i) => {
              return (
                <div className="flex space-x-3 items-center" key={i}>
                  <Check className="w-6 h-6 shrink-0" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {courseDetail.content && (
        <div className="flex p-8 bg-slate-200 my-8 text-slate-900 border border0gray-700 rounded-lg flex-col">
          <h2 className="text-3xl mb-4">Course Content</h2>
          <div className="">{parse(`${courseDetail.content}`)}</div>
        </div>
      )}
      {/* Course Chapters */}
      {courseDetail?.chapters.length > 0 && (
        <div className="mx-auto max-w-5xl my-8 px-8 bg-slate-100 py-8">
          <Accordion collapseAll>
            {courseDetail.chapters.map((item, i) => {
              return (
                <AccordionPanel key={i}>
                  <AccordionTitle>{item.title}</AccordionTitle>
                  <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              );
            })}
          </Accordion>
        </div>
      )}
    </div>
  );
}
