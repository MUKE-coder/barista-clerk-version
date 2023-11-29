import BrowseCourseList from "@/components/admin/BrowseCourseList";
import CoffeeBusiness from "@/components/frontend/CoffeeBusiness";
import CourseList from "@/components/frontend/CourseList";
import Courses from "@/components/frontend/Courses";
import Downloadables from "@/components/frontend/Downloadables";
import Hero from "@/components/frontend/Hero";
import WhyUs from "@/components/frontend/WhyUs";
import { authOptions } from "@/utils/authOptions";
import { getData } from "@/utils/getData";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  const courses = await getData("courses");
  return (
    <main>
      <Hero />
      <Courses courses={courses} />
      <WhyUs />
      {/* <Downloadable /> */}
      <CoffeeBusiness />

      <CourseList courses={courses} />
    </main>
  );
}
