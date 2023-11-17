import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  // console.log(id)
  try {
    const preview = await db.course.findUnique({
      where: {
        id: id,
      },
      include: {
        chapters: true,
      },
    });
    return NextResponse.json(preview);
  } catch (error) {
    console.error("Error fetching a single course for preview:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch a single course for preview",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
