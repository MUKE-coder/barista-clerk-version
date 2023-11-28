import BrowseCourseList from "@/components/admin/BrowseCourseList";
import CoffeeBusiness from "@/components/frontend/CoffeeBusiness";
import CourseList from "@/components/frontend/CourseList";
import Courses from "@/components/frontend/Courses";
import Downloadables from "@/components/frontend/Downloadables";
import Hero from "@/components/frontend/Hero";
import WhyUs from "@/components/frontend/WhyUs";
import { getData } from "@/utils/getData";
import Link from "next/link";

export default async function Home() {
  const courses = await getData("courses");
  return (
    <main>
      {/* <Navbar /> */}
      <Link href="/dashboard/courses">View Dashboard</Link>
      <Hero />
      <Courses courses={courses} />
      <WhyUs />
      {/* <Downloadable /> */}
      <CoffeeBusiness />

      <CourseList courses={courses} />
    </main>
  );
}
