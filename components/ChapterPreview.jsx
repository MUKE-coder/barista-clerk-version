"use client";
import { DownloadCloud, Lock, Paperclip, PauseCircle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

export default function ChapterPreview({ chapters, attachments }) {
  const [displayedChap, setDisplayedChap] = useState(chapters[0]);
  console.log(displayedChap);
  return (
    <div className="flex gap-3">
      <div className="w-[300px] bg-slate-100 min-h-screen  rounded-lg flex flex-col gap-3 p-4">
        {chapters.map((chapter, i) => {
          return (
            <button
              className={
                chapter === displayedChap
                  ? "py-3 px-4 rounded-md bg-purple-700 flex gap-3 items-center"
                  : "py-3 px-4 rounded-md bg-slate-800 flex gap-3 items-center"
              }
              onClick={() => setDisplayedChap(chapter)}
            >
              {chapter?.isPaid ? <PauseCircle /> : <Lock />}
              Lesson-{i + 1}:{" "}
              <span className="overflow-hidden truncate w-20">
                {chapter.title}
              </span>
            </button>
          );
        })}
      </div>
      <div className="rounded-lg bg-slate-700 flex-grow p-6 ">
        <h2 className="mb-4">{displayedChap.title}</h2>
        <div className="responsive-player-wrapper">
          <ReactPlayer
            url={displayedChap.videoUrl}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
        <div className="py-8">
          {attachments.map((att, i) => {
            return (
              <Link
                className="py-3 px-4 bg-slate-600 rounded-md inline-flex items-center gap-3"
                key={i}
                href={att.url}
              >
                <DownloadCloud />
                {att.title}
                <Paperclip />
              </Link>
            );
          })}
          {/* <p>{displayedChap.videoUrl}</p> */}
        </div>
      </div>
    </div>
  );
}
