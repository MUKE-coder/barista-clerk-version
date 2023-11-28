import Image from "next/image";
import React from "react";

export default function Downloadables() {
  return (
    <div className="bg-slate-950 ">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-4">
            <Image
              src="/images/ebook.jpg"
              width={300}
              height={300}
              className="rounded-lg"
              alt="ebook"
            />
            <div className="flex flex-col text-gray-100">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis amet ea, ipsam eveniet laudantium quos odio assumenda
                suscipit debitis, similique quisquam cupiditate maiores
                recusandae. Accusantium deserunt ullam laboriosam reprehenderit
                qui?
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/ebook.jpg"
              width={300}
              height={300}
              className="rounded-lg"
              alt="ebook"
            />
            <div className="flex flex-col text-gray-100">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis amet ea, ipsam eveniet laudantium quos odio assumenda
                suscipit debitis, similique quisquam cupiditate maiores
                recusandae. Accusantium deserunt ullam laboriosam reprehenderit
                qui?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
