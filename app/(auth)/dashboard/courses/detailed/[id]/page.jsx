import VideoPreview from "@/components/admin/video-preview/VideoPreview";
import { getData } from "@/utils/getData";

export default async function CourseDetail({ params: { id } }) {
  const previewSingleCourse = await getData(`courses/preview/${id}`);

  // console.log(previewSingleCourse);

  return (
    <div>
      <VideoPreview preview={previewSingleCourse} />
    </div>
  );
}
