import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const chapter = await db.chapter.findMany();

    return NextResponse.json(chapter);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed chapter",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export async function POST(request) {
  try {
    // Get Data
    const { title, videoUrl, isPaid, courseId, isPublished, description } =
      await request.json();
    const isPaidValue =
      typeof isPaid === "string"
        ? isPaid.toLowerCase() === "true"
        : Boolean(isPaid);
    const isPublishedValue =
      typeof isPublished === "string"
        ? isPublished.toLowerCase() === "true"
        : Boolean(isPublished);

    const newChapter = await db.chapter.create({
      data: {
        title,
        videoUrl,
        isPaid: isPaidValue,
        courseId,
        isPublished: isPublishedValue,
        description,
      },
    });
    // console.log(newChapter );
    return NextResponse.json(newChapter, {
      status: 201,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create a chapter" },
      { status: 500 }
    );
  }
}
