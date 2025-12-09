"use client";

import { ReactNode, useEffect, useState } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "../../store";
import Breadcrumb from "./Breadcrumb";
import { setEnrollments } from "../../Enrollments/reducer";
import * as enrollmentsClient from "../../Enrollments/client";

export default function Layout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const dispatch = useDispatch();

  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

  const [checkedEnrollment, setCheckedEnrollment] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.replace("/Account/Signin");
      return;
    }
    (async () => {
      try {
        const list = await enrollmentsClient.findMyEnrollments();
        dispatch(setEnrollments(list));
      } catch (e) {
      } finally {
        setCheckedEnrollment(true);
      }
    })();
  }, [currentUser?._id]);

  const isEnrolled = (enrollments as any[]).some(
    (enrollment: any) =>
      String(enrollment.user) === String(currentUser?._id) &&
      String(enrollment.course) === String(cid)
  );

  useEffect(() => {
    if (!currentUser) return;
    if (!checkedEnrollment) return;
    if (!isEnrolled) {
      router.replace("/Dashboard");
    }
  }, [checkedEnrollment, isEnrolled, currentUser?._id, cid]);

  const course = (courses as any[]).find((c: any) => String(c._id) === String(cid));
  const courseTitle = course ? (course.title ?? course.name ?? `Course ${cid}`) : `Course ${cid}`;

  if (!currentUser) return null;
  if (!checkedEnrollment) return null;
  if (!isEnrolled) return null;

  return (
    <div className="container-fluid">
      <div id="wd-course-header" className="py-2">
        <div className="d-flex align-items-center">
          <FaAlignJustify className="fs-4 me-2" onClick={() => setShowNav(!showNav)} />
          <h1 className="h4 m-0 text-danger">
            <Breadcrumb title={courseTitle} />
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
