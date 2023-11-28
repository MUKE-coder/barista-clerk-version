"use client";
import React from "react";
import { Trash } from "lucide-react";

export default function DeleteBtn({ courseId }) {
  //   console.log(courseId);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log(courseId);
  async function handleDelete() {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (userConfirmed) {
      try {
        const response = await fetch(
          `${baseUrl}/api/courses/preview/${courseId}`,
          {
            cache: "no-store",
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        );
        if (response.ok) {
          // console.log("Course deleted successfully");
        } else {
          console.error("Error deleting course:");
        }
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  }

  return (
    <div>
      <button
        onClick={handleDelete}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-900 "
      >
        <Trash className="h-5 w-5" />
      </button>
    </div>
  );
}
