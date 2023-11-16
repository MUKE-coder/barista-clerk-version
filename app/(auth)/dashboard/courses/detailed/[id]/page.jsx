"use client";
import React from "react";
import ReactPlayer from "react-player/youtube";

export default function CourseDetail({ params: { id } }) {
  return (
    <div className='flex flex-col items-center h-screen gap-8'>
      <h2 className='font-bold text-4xl uppercase'> video preview</h2>
      <div className='bg-red-700 h-[70%] w-full'>
        <ReactPlayer
          height='600px'
          width='1200px'
          className='rounded-2xl'
          url='https://www.youtube.com/watch?v=ZxjNa_Ief7U'
        />
      </div>
    </div>
  );
}
