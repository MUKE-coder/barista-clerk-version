"use client";
import { Lock, PauseCircle } from "lucide-react";
import React, { useState } from "react";

export default function ChapterPreview({ chapters }) {
  const [displayedChap, setDisplayedChap] = useState(chapters[0]);
  console.log(displayedChap);
  return (
    <div className="flex gap-3">
      <div className="w-[300px] bg-slate-100 min-h-screen  rounded-lg flex flex-col gap-3 p-4">
        {chapters.map((chapter, i) => {
          return (
            <button
              className="py-3 px-8 rounded-md bg-slate-800 flex space-x-2 items-center"
              onClick={() => setDisplayedChap(chapter)}
            >
              {chapter?.isPaid ? <PauseCircle /> : <Lock />}
              Show Video
            </button>
          );
        })}
      </div>
      <div className="rounded-lg bg-blue-600 flex-grow">
        <p>{displayedChap.title}</p>
      </div>
    </div>
  );
}
