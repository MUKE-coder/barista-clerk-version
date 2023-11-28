import { courses } from "@/coursesData";
import Link from "next/link";
import React from "react";

function Courses({ courses }) {
  const featuredCourses = courses
    .slice(0, 2)
    .filter((course) => course.isFeatured);
  return (
    <section className="course-section">
      <h2 className="text-2xl md:text-5xl text-white py-4  heading-font ">
        Featured Courses
      </h2>
      <div className="course-list my-8">
        <div className="course-card flex gap-8 justify-between flex-col md:flex-row ">
          <div className="course-image w-full md:w-1/2">
            <img
              className="rounded-lg"
              src={featuredCourses[0].imageUrl}
              alt={featuredCourses[0].title}
            />
          </div>
          <div className="course-details w-full md:w-1/2">
            <h2 className="course-title text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0 heading-font">
              {featuredCourses[0].title}
            </h2>
            <p className="desc text-sm sm:text-xl">
              {featuredCourses[0].description}
            </p>
            <ul className="course-features py-8">
              {featuredCourses[0].features.map((item, i) => {
                return (
                  <li key={i} className="text-sm sm:text-xl flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>{" "}
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className="buttons">
              <div className="cta-links">
                <Link className="book-call" href="/categories">
                  Enroll
                </Link>
                <Link className="courses" href="/categories">
                  View Course Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="course-card flex gap-8 justify-between flex-col md:flex-row ">
          <div className="course-details w-full md:w-1/2">
            <h2 className="course-title text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0 heading-font ">
              {featuredCourses[1].title}
            </h2>
            <p className="desc text-sm sm:text-xl">
              {featuredCourses[1].description}
            </p>
            <ul className="course-features py-8">
              {featuredCourses[1].features.map((item, i) => {
                return (
                  <li key={i} className="text-sm sm:text-xl flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>{" "}
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className="buttons">
              <div className="cta-links">
                <Link className="book-call" href="/categories">
                  Book Video Call
                </Link>
                <Link className="courses" href="/categories">
                  View Our Courses
                </Link>
              </div>
            </div>
          </div>
          <div className="course-image w-full md:w-1/2">
            <img
              src={featuredCourses[1].imageUrl}
              alt={featuredCourses[1].title}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
