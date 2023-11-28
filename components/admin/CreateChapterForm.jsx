import ReactPlayer from "react-player/youtube";
import VideoPlayer from "./VideoPlayer";
import { Pencil, Link, Plus, MonitorPlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { generateSlug } from "@/utils/generateSlug";
import TextInput from "../FormInputs/TextInput";
import ToggleInput from "../FormInputs/ToggleInput";
import TextareaInput from "../FormInputs/TextAreaInput";
import SelectInput from "../FormInputs/SelectInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { makePostRequest } from "@/utils/apiRequest";

export default function CreateChapterForm({ courses }) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isPaid: true,
      isPublished: true,
    },
  });
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=LXb3EKWsInQ"
  );
  const [showPreview, setShowPreview] = useState(false);
  const toggleView = () => {
    setShowPreview(!showPreview);
  };
  // console.log(videoUrl);
  function resetPreview() {
    setVideoUrl("");
    setShowPreview(false);
  }
  const isPublished = watch("isPublished");
  const isPaid = watch("isPaid");
  // console.log(isPublished);
  async function onSubmit(data) {
    data.videoUrl = videoUrl;
    console.log(data);
    makePostRequest(setLoading, "api/chapters", data, "Chapter", reset);
    setVideoUrl("");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Title */}
        <TextInput
          label="Chapter Title"
          name="title"
          register={register}
          errors={errors}
        />
        {/* Select Course */}
        <SelectInput
          label="Select Course"
          name="courseId"
          register={register}
          errors={errors}
          className="w-full"
          options={courses}
        />
        {/* Is Free */}
        <ToggleInput
          label="Chapter Access"
          name="isPaid"
          trueTitle="Paid"
          falseTitle="Free"
          register={register}
        />

        {/* Description */}
        <TextareaInput
          label="Chapter Description"
          name="description"
          register={register}
          errors={errors}
        />

        {/* Video Url*/}
        <div className="col-span-full">
          <div className="flex justify-between items-center mb-4">
            <label
              htmlFor="Chapter-image"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Chapter Video
            </label>
            {videoUrl && showPreview && (
              <button
                onClick={resetPreview}
                type="button"
                className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
              >
                <Pencil className="w-5 h-5" />
                <span>Change Video Link</span>
              </button>
            )}
          </div>
          {showPreview && videoUrl ? (
            <ReactPlayer url={videoUrl} />
          ) : (
            <div className="flex col-span-full items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Link className="w-5 h-5 text-slate-900" />
                </div>
                <input
                  {...register("videoUrl")}
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  type="url"
                  id="videoUrl"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5    "
                  placeholder="Enter Chapter Video Url..."
                  required
                />
              </div>
              <button
                onClick={toggleView}
                type="button"
                className="p-2.5 flex items-center ml-2 text-sm font-medium text-slate-50 bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 
                space-x-3 focus:outline-none focus:ring-purple-300 shrink-0"
              >
                <MonitorPlay className="w-5 h-5" />
                <span>Preview Video</span>
              </button>
            </div>
          )}
        </div>
        {/* IsPublished */}
        <ToggleInput
          label="Publish your Chapter"
          name="isPublished"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle="Create Chapter"
        loadingButtonTitle="Creating Chapter please wait..."
      />
    </form>
  );
}
