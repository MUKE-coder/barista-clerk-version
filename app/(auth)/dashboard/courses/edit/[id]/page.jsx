import React from "react";
import Create from "../../create/page";
import { getData } from "@/utils/getData";

export default async function ({ params: { id } }) {
  const getCourse = await getData(`courses/preview/${id}`);
  // console.log(getCourse);
  return (
    <div>
      <Create id={id} course={getCourse} />
    </div>
  );
}
