import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Get Data
    const { title, url, courseId } = await request.json();
    const data = {
      title,
      url,
      courseId,
      id: "attachment00001",
    };
    console.log(data);
    // Save Data to Db
    return NextResponse.json(data);
    // Return the response
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Failed to create a course" },
      { status: 500 }
    );
  }
}
