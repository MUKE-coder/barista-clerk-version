import React from "react";
import SmallCard from "./SmallCard";
import {
  CheckCheck,
  GraduationCap,
  Loader2,
  RefreshCcw,
  ShoppingCart,
} from "lucide-react";
import { getData } from "@/utils/getData";

export default async function SmallCards() {
  const courses = await getData("courses")??[];
  const chapters = await getData("chapters")??[];
  const users = await getData("user")??[];
  // const { courses, users, chapters } = await Promise.all([
  //   coursesData,
  //   usersData,
  //   chaptersData,
  // ]);
  // console.log(courses, users, chapters);
  const students = users?.filter((user, i) => user.role === "USER") ?? [];
  const orderStatus = [
    {
      title: "Total Courses",
      number: courses?.length ?? 0,
      iconBg: "bg-green-600",
      icon: GraduationCap,
    },
    {
      title: "Total Students",
      number: students?.length ?? 0,
      iconBg: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Chapters Created",
      number: chapters?.length ?? 0,
      iconBg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Revenue Earned",
      number: 0,
      iconBg: "bg-purple-600",
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
