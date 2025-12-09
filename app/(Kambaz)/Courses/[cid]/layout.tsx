"use client";

import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import Breadcrumb from "./Breadcrumb";
import { redirect } from "next/dist/client/components/navigation";

export default function Layout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  if (!currentUser) {
    redirect("/Account/Signin");
  }

  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      String(enrollment.user) === String(currentUser?._id) &&
      String(enrollment.course) === String(cid)
  );

  if (!isEnrolled) {
    redirect("/Dashboard");
  }

  const course = courses.find((course: any) => String(course._id) === String(cid));
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="container-fluid">
      <div id="wd-course-header" className="py-2">
        <div className="d-flex align-items-center">
          <FaAlignJustify
            className="fs-4 me-2"
            onClick={() => setShowNav(!showNav)}
          />
          <h1 className="h4 m-0 text-danger">
            <Breadcrumb title={course ? course.title : `Course ${cid}`} />
          </h1>
        </div>
      </div>
      <hr className="mt-2" />

      <div className="row">
        {showNav && (
          <div className="col-12 col-md-2 mb-3">
            <CourseNavigation cid={String(cid)} />
          </div>
        )}
        <div className={showNav ? "col-12 col-md-10 mb-3" : "col-12 mb-3"}>
          {children}
        </div>
      </div>
    </div>
  );
}
