"use client";
import { createContext, useContext, useEffect, useState } from "react";
// create the context
export const AppContext = createContext();

//Create the provider
export function AppProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  function getSingleCourse(id) {
    const course = course.find((course) => course.id == id);
    return course;
  }
  //Fetch the courses
  useEffect(() => {
    async function getCourses() {
      try {
        const response = await fetch("/api/courses", {
          cache: "no-store",
        });
        const coursesData = await response.json();
        setCourses(coursesData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCourses();
  }, []);

  return (
    <AppContext.Provider value={{ courses, loading, getSingleCourse }}>
      {children}
    </AppContext.Provider>
  );
}
// create the use hook
export function useApp() {
  const context = useContext(AppContext);
  return context;
}
