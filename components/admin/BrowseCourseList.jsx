import React from "react";
import BrowseCourseCard from "./BrowseCourseCard";

export default function BrowseCourseList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 py-8 gap-4">
      <BrowseCourseCard />
      <BrowseCourseCard />
      <BrowseCourseCard />
      <BrowseCourseCard />
    </div>
  );
}
