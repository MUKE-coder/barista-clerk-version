import { makePostRequest } from "@/utils/apiRequest";
import { UploadDropzone } from "@/utils/uploadthing";
import { Paperclip, Pencil, Plus, Watch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextInput from "../FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import AttachmentFileInput from "../FormInputs/AttachmentFileInput";
import SubmitButton from "../FormInputs/SubmitButton";

export default function CreateAttachmentForm({ courses }) {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  // console.log(fileUrl);
  async function onSubmit(data) {
    data.url = fileUrl;
    console.log(data);
    makePostRequest(setLoading, "api/attachments", data, "Attachment", reset);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Title */}
        <TextInput
          label="Attachment Title"
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

        {/* Upload thing */}
        <AttachmentFileInput
          endpoint="courseAttachmentUploader"
          fileUrl={fileUrl}
          setFileUrl={setFileUrl}
          label="Course Attachment"
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle="Create Attachment"
        loadingButtonTitle="Creating Attachment please wait..."
      />
    </form>
  );
}
