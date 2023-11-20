import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const attachment = await db.attachment.findMany();
    // console.log(attachment)
    return NextResponse.json(attachment);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed attachment",
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
    const { title, url, courseId } = await request.json();

    const newAttachment = await db.attachment.create({
      data: {
        title,
        url,
        courseId,
      },
    });
    // console.log(newAttachment);
    return NextResponse.json(newAttachment, {
      status: 201,
    });
    // Return the response
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create a course" },
      { status: 500 }
    );
  }
}
