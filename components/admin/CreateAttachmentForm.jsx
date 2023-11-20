import { UploadDropzone } from "@/utils/uploadthing";
import { useAuth } from "@clerk/nextjs";
import { Paperclip, Pencil, Plus, Watch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CreateAttachmentForm({
  id,
  course,
  currentCourse,
  setCurrentCourse,
}) {
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
  // async function onSubmit(data) {
  //   const baseUrl = "http://localhost:3000";
  //   setLoading(true);
  //   data.url = fileUrl;
  //   // console.log(data);
  //   try {
  //     const response = await fetch(`${baseUrl}/api/attachments`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     // console.log(response);
  //     if (response.ok) {
  //       setLoading(false);
  //       reset();
  //       setFileUrl("");
  //       toast.success("Attachment Created");
  //       const attachmentData = await response.json();
  //       // console.log(attachmentData);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     // console.log(error);
  //   }
  // }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  async function handleEdit(data) {
    setLoading(true);
    // console.log(data);
    const response = await fetch(`${baseUrl}/api/courses/preview/${id}`, {
      cache: "no-store",
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      // console.log("Edited Successfully");
      setLoading(false);
    } else {
      setLoading(false);
      // console.log("Failed to edit course");
    }
  }
  async function onSubmitCreate(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setLoading(true);

    const slug = generateSlug(data.title);
    data.slug = slug;
    data.userId = userId;
    data.imageUrl = imageUrl;

    try {
      const response = await fetch(`${baseUrl}/api/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoading(false);
        reset();
        setImageUrl("");
        toast.success("Course Created");
        const courseData = await response.json();
        setCurrentCourse(courseData);
        // console.log(courseData);
      } else if (response.status === 409) {
        setLoading(false);
        toast.error("Course with this title already exists");
      }
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  }
  const onSubmit = id ? handleEdit : onSubmitCreate;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        {/* Title */}
        <div className='sm:col-span-2'>
          <label
            htmlFor='title'
            className='block text-sm font-medium leading-6 text-gray-900 mb-2 '
          >
            Attachment Title
          </label>
          <div className='mt-2'>
            <input
              defaultValue={id ? course.title : ""}
              {...register("title", { required: true })}
              type='text'
              name='title'
              id='title'
              autoComplete='given-name'
              className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6'
              placeholder='Type the Course title'
            />
            {errors.title && (
              <span className='text-sm text-red-600 '>
                Attachment title is required
              </span>
            )}
          </div>
        </div>

        {/* Select Course */}
        <div className='w-full'>
          <label
            htmlFor='course'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Select Course
          </label>
          <div className='mt-2'>
            <select
              defaultValue={id ? course.courseId : ""}
              {...register("courseId")}
              id='course'
              name='course'
              autoComplete='course-name'
              className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option value={id ? course.courseId : currentCourse.id}>
                {id ? course.title : currentCourse.title}
              </option>
              {/* <option>Canada</option>
              <option>Mexico</option> */}
            </select>
          </div>
        </div>

        {/* Upload thing */}
        <div className='col-span-full'>
          <div className='flex justify-between items-center mb-4'>
            <label
              htmlFor='attachment'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Course Attachment File
            </label>
            {fileUrl && (
              <button
                onClick={() => setFileUrl("")}
                type='button'
                className='flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4'
              >
                <Pencil className='w-5 h-5' />
                <span>Change File</span>
              </button>
            )}
          </div>
          {fileUrl ? (
            <Link
              href={fileUrl}
              target='_blank'
              className='text-purple-500 flex items-center space-x-3'
            >
              <Paperclip className='w-8 h-8 ' />
              <span>View File Here</span>
            </Link>
          ) : (
            <UploadDropzone
              endpoint='courseAttachmentUploader'
              onClientUploadComplete={(res) => {
                setFileUrl(res[0].fileUrl);
                // Do something with the response
                // console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}
        </div>
      </div>
      {id ? (
        <>
          {loading ? (
            <button
              disabled
              type='button'
              className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center'
            >
              <svg
                aria-hidden='true'
                role='status'
                className='inline w-4 h-4 mr-3 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
              Saving Attachment Please wait...
            </button>
          ) : (
            <button
              type='submit'
              className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800'
            >
              <Plus className='w-5 h-5 mr-2' />
              <span>Update Attachment</span>
            </button>
          )}
        </>
      ) : (
        <>
          {loading ? (
            <button
              disabled
              type='button'
              className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 inline-flex items-center'
            >
              <svg
                aria-hidden='true'
                role='status'
                className='inline w-4 h-4 mr-3 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
              Saving Attachment Please wait...
            </button>
          ) : (
            <button
              type='submit'
              className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800'
            >
              <Plus className='w-5 h-5 mr-2' />
              <span>Save Attachment</span>
            </button>
          )}
        </>
      )}
    </form>
  );
}
