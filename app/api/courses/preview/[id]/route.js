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
export async function PATCH(request, { params: { id } }) {
  try {
    const { title, price, description } = await request.json();
    // console.log(title, price, description);
    const priceValue = parseFloat(price);
    const UpdatedCourse = await db.course.update({
      where: { id },
      data: {
        title,
        price: isNaN(priceValue) ? null : priceValue,
        description,
      },
    });

    return NextResponse.json(UpdatedCourse);
  } catch (error) {
    console.error("Error updating a course for the course list:", error);

    return NextResponse.json(
      {
        message: "Error updating a course from the course list",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  // console.log(id);
  try {
    const course = await db.course.delete({
      where: { id },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.error("Error deleting a course for the course list:", error);

    return NextResponse.json(
      {
        message: "Error deleting a course from the course list",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
