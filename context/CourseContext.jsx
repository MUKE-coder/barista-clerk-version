"use client"
// cart-context.js
import { createContext, useContext } from "react";

const CourseContext = createContext();

export function CoursesProvider({ children }) {
  const [chapters, setChapters] = useState([]);
  // const [courseChapters,setCourseChapters]=useS
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChapters() {
      try {
        const response = await fetch("/api/chapters"); // Replace with your API endpoint
        const chaptersData = await response.json();
        setChapters(chaptersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Chapters:", error);
        setLoading(false);
      }
    }

    fetchChapters();
  }, []);

  const filterChaptersById = (courseId) => {
    const courseChapters = chapters.filter(
      (chapter) => chapter.courseId === courseId
    );
    return courseChapters;
  };

  const contextValue = {
    loading,
    filterChaptersById,
  };

  return (
    <CourseContext.Provider value={contextValue}>
      {children}
    </CourseContext.Provider>
  );
}
const useData = () => {
  // use the useContext hook to access the context data
  const context = useContext(CourseContext);
  // return the context data
  return context;
};

export default useData;
