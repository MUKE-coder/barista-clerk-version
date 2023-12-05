import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const courses = await db.course.findMany({
      include: {
        chapters: true,
      },
    });
    // console.log(courses)
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed course",
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
    /**
     * **/
    const {
      title,
      imageUrl,
      price,
      userId,
      isPublished,
      isFeatured,
      description,
      slug,
      features,
      whatToLearn,
      requirements,
      milestones,
      content,
    } = await request.json();
    const existingCourse = await db.course.findUnique({
      where: {
        slug,
      },
    });

    if (existingCourse) {
      return NextResponse.json(
        { message: "Slug already exists", error },
        { status: 409 }
      );
    }
    const newCourse = await db.course.create({
      data: {
        title,
        price: parseFloat(price),
        userId,
        isPublished,
        isFeatured,
        description,
        imageUrl,
        slug,
        features,
        whatToLearn,
        requirements,
        milestones,
        content,
      },
    });

    console.log(newCourse);
    return NextResponse.json(newCourse, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error, message: "Failed to create a course" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedItem = await db.course.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deletedItem);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete Course",
      },
      {
        status: 500,
      }
    );
  }
}
