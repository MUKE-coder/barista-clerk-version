import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Get Data
    const { title, imageUrl, price, userId, isPublished, description } =
      await request.json();
    const data = {
      title,
      price,
      userId,
      isPublished,
      description,
      imageUrl,
      id: "etettr888e99w000e8ryr",
    };
    console.log(data);
    // Save Data to Db
    //To be done
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
