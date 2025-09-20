import { redirect } from "next/navigation";

export default function Course({ params }: { params: { cid: string } }) {
  redirect(`/Courses/${params.cid}/Home`);
  return (
    <div id="wd-course-screen">
      <h1>Course {params.cid}</h1>
    </div>
  );
}
