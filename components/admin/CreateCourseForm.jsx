import { makePostRequest } from "@/utils/apiRequest";
import { generateSlug } from "@/utils/generateSlug";
import { UploadDropzone } from "@/utils/uploadthing";

import { Pencil, Plus, Watch } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "../FormInputs/TextInput";
import TextareaInput from "../FormInputs/TextAreaInput";
import ArrayItemsInput from "../FormInputs/ArrayItemsInput";
import ToggleInput from "../FormInputs/ToggleInput";
import SubmitButton from "../FormInputs/SubmitButton";
import ImageInput from "../FormInputs/ImageInput";
import QuillEditor from "../FormInputs/QuillEditor";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export default function CreateCourseForm() {
  const session = getServerSession(authOptions);
  if (!session ) {
    return null;
  }
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isPublished: true,
      isFeatured: false,
    },
  });
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  // console.log(imageUrl);
  // Features
  const [features, setFeatures] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [whatToLearn, setWhatToLearn] = useState([]);
  const [milestones, setMilestones] = useState([]);
  const [content, setContent] = useState([]);
  console.log(features);
  const isFeatured = watch("isFeatured");
  const isPublished = watch("isPublished");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.userId = session.user.email;
    data.imageUrl = imageUrl;
    data.features = features;
    data.requirements = requirements;
    data.whatToLearn = whatToLearn;
    data.milestones = milestones;
    data.content = content;
    console.log(data);
    makePostRequest(setLoading, "api/courses", data, "Course", reset);
    setImageUrl("");
    setFeatures([]);
    setRequirements([]);
    setMilestones([]);
    setWhatToLearn([]);
    setContent("");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Title */}
        <TextInput
          label="Course Title"
          name="title"
          register={register}
          errors={errors}
        />
        {/* Price */}
        <TextInput
          label="Course Price"
          name="price"
          type="number"
          register={register}
          errors={errors}
        />

        {/* Description */}
        <TextareaInput
          label="Course Description"
          name="description"
          register={register}
          errors={errors}
        />
        {/* What You will learn */}
        <ArrayItemsInput
          setItems={setWhatToLearn}
          items={whatToLearn}
          itemTitle="Learning Outcomes"
        />
        <QuillEditor
          label="Add Course Content"
          value={content}
          onChange={setContent}
        />
        {/* Features */}
        <ArrayItemsInput
          setItems={setFeatures}
          items={features}
          itemTitle="Feature"
        />
        {/* Course Image */}
        <ImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="courseImageUploader"
          label="Course Image"
        />
        {/* Requirements */}
        <ArrayItemsInput
          setItems={setRequirements}
          items={requirements}
          itemTitle="Requirement"
        />
        <ArrayItemsInput
          setItems={setMilestones}
          items={milestones}
          itemTitle="Milestones"
        />

        {/* isFeatured */}
        <ToggleInput
          label="Featured Course"
          name="isFeatured"
          trueTitle="Featured"
          falseTitle="Not Featured"
          register={register}
        />
        {/* IsPublished */}
        <ToggleInput
          label="Publish your Course"
          name="isPublished"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle="Create Course"
        loadingButtonTitle="Creating Course please wait..."
      />
    </form>
  );
}
