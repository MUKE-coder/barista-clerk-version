import BrowseCourseList from "@/components/admin/BrowseCourseList";
import { getData } from "@/utils/getData";
import React from "react";

export default async function Browse() {
  const courses = await getData("courses");

  return (
    <div>
      <BrowseCourseList courses={courses} />
    </div>
  );
}
