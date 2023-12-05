import ChapterPreview from "@/components/ChapterPreview";
import CoursesSideBar from "@/components/admin/courses-sidebar/CoursesSideBar";
import VideoPreview from "@/components/admin/video-preview/VideoPreview";
import { getData } from "@/utils/getData";

export default async function CourseDetail({ params: { id } }) {
  const previewSingleCourse = await getData(`courses/preview/${id}`);
  const allAttachments = await getData("attachments");
  const courseAttachments = allAttachments.filter((att) => att.courseId === id);
  return (
    <ChapterPreview
      attachments={courseAttachments}
      chapters={previewSingleCourse.chapters}
    />
  );
}
