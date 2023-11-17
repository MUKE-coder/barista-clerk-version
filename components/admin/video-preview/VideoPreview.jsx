"use client";
import ReactPlayer from "react-player/youtube";

export default function VideoPreview({ preview }) {
  // console.log(preview);
  return (
    <div className='flex flex-col items-center h-screen gap-8'>
      <h2 className='font-bold text-4xl uppercase'>
        {preview.title}
        <span className='text-amber-500 font-light'> preview</span>
      </h2>
      <div className='h-[70%] w-full'>
        <ReactPlayer
          controls
          height='600px'
          width='1200px'
          url={preview.chapters[0].videoUrl}
        />
      </div>
    </div>
  );
}
