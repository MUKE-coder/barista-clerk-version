import BrowseCourseList from "@/components/admin/BrowseCourseList";
import { getData } from "@/utils/getData";
import React from "react";

export default async function Browse() {
  const getCourses= await getData("courses")
  // console.log(getCourses)
  return (
    <div>
      <BrowseCourseList getCourses={getCourses}/>
    </div>
  );
}
