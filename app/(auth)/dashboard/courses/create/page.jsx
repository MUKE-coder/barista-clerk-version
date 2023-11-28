import CreateForm from "@/components/admin/CreateForm";
import { getData } from "@/utils/getData";
import React from "react";

export default async function Create() {
  const courses = await getData("courses");
  // const chaptersData = getData("chapters");
  // const attachmentsData = getData("attachments");
  // const [courses, chapters, attachments] = await Promise.all([
  //   coursesData,
  //   chaptersData,
  //   attachmentsData,
  // ]);
  return <CreateForm courses={courses} />;
}
