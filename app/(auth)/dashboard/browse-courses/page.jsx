import BrowseCourseList from "@/components/admin/BrowseCourseList";
import { getData } from "@/utils/getData";
import React from "react";

export default async function Browse() {
<<<<<<< HEAD
  const getCourses = await getData("courses");
=======
  const getCourses= await getData("courses")
>>>>>>> 519a842054effa7379f1e94947dc446b5dff3329
  // console.log(getCourses)
  return (
    <div>
      <BrowseCourseList getCourses={getCourses} />
    </div>
  );
}
