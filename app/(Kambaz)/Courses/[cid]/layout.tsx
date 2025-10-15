import React from "react";
import CourseNavigation from "./Navigation";
import { FaBars } from "react-icons/fa6";
import courses from "@/app/data/courses.json";
import Breadcrumb from "./Breadcrumb";

type Course = {
  _id: number;
  title: string;
  subtitle: string;
  image: string;
};

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;

  const course = (courses as Course[]).find(c => String(c._id) === cid);

  return (
    <div className="container-fluid">
      <div id="wd-course-header" className="py-2">
        <div className="d-flex align-items-center">
          <FaBars className="fs-4 me-2" />
          {/* breadcrumb INSIDE the title, and the whole thing is red */}
          <h1 className="h4 m-0 text-danger">
            <Breadcrumb title={course ? course.title : `Course ${cid}`} />
          </h1>
        </div>
      </div>
      <hr className="mt-2" />

      <div className="row">
        <div className="col-12 col-md-2 mb-3">
          <CourseNavigation cid={cid} />
        </div>
        <div className="col-12 col-md-10 mb-3">{children}</div>
      </div>
    </div>
  );
}
