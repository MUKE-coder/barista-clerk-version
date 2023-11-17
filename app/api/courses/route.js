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
    // Get Data
    const { title, imageUrl, price, userId, isPublished, description, slug } =
      await request.json();
    const findSlug = await prisma.course.findUnique({
      where: {
        slug,
      },
    });

    if (findSlug) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 409 }
      );
    } else {
      const priceValue = parseFloat(price);

      const newCourse = await db.course.create({
        data: {
          title,
          price: isNaN(priceValue) ? null : priceValue,
          userId,
          isPublished,
          description,
          imageUrl,
          slug,
        },
      });

      // console.log(newCourse);
      return NextResponse.json(newCourse, {
        status: 201,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error, message: "Failed to create a course" },
      { status: 500 }
    );
  }
}
