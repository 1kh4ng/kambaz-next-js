"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { RootState } from "../store";
import coursesData from "@/app/data/courses.json";
import { redirect } from "next/dist/client/components/navigation";
import {
  toggleEnrollmentsView,
  enrollUserInCourse,
  unenrollUserFromCourse,
} from "../Enrollments/reducer";

type Course = {
  _id: string | number;
  title: string;
  subtitle: string;
  image: string;
};

const placeholderImage =
  (coursesData as Course[])[0]?.image || "/images/react.jpg";

export default function DashboardPage() {
  const { courses } = useSelector(
    (state: RootState) => state.coursesReducer
  );
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const { enrollments, showAllCourses } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );
  const dispatch = useDispatch();

  if (!currentUser) {
    redirect("/Account/Signin");
  }

  const [course, setCourse] = useState<Course>({
    _id: "0",
    title: "New Course",
    subtitle: "New Subtitle",
    image: placeholderImage,
  });

  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments.some(
          (enrollment: any) =>
            String(enrollment.user) === String(currentUser?._id) &&
            String(enrollment.course) === String(course._id)
        )
      );

  return (
    <div id="wd-dashboard">
      {/* Title + Enrollments toggle */}
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <button
        className="btn btn-primary float-end mb-2"
        onClick={() => dispatch(toggleEnrollmentsView())}
        id="wd-enrollments-toggle"
      >
        {showAllCourses ? "My Enrollments" : "Enrollments"}
      </button>
      <div className="clearfix"></div>

      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.title}
        onChange={(e) =>
          setCourse({ ...course, title: e.target.value })
        }
        className="mb-2"
      />
      <FormControl
        as="textarea"
        value={course.subtitle}
        onChange={(e) =>
          setCourse({ ...course, subtitle: e.target.value })
        }
        rows={3}
      />
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course: Course) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                String(enrollment.user) === String(currentUser?._id) &&
                String(enrollment.course) === String(course._id)
            );

            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/Courses/${course._id}`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      as={Image}
                      src={course.image || placeholderImage}
                      alt={course.title}
                      width={300}
                      height={160}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#000080",
                          fontWeight: "bold",
                        }}
                      >
                        {course.title}
                      </Card.Title>
                      <Card.Text
                        className="text-dark"
                        style={{ height: "100px" }}
                      >
                        {course.subtitle}
                      </Card.Text>

                      {/* Enroll / Unenroll buttons */}
                      {isEnrolled ? (
                        <button
                          className="btn btn-danger me-2"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              unenrollUserFromCourse({
                                user: currentUser!._id,
                                course: course._id,
                              })
                            );
                          }}
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success me-2"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              enrollUserInCourse({
                                user: currentUser!._id,
                                course: course._id,
                              })
                            );
                          }}
                          id="wd-enroll-course-click"
                        >
                          Enroll
                        </button>
                      )}

                      <Button variant="primary">Go</Button>

                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(course._id));
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                        style={{ marginLeft: "0.5rem" }}
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning float-end"
                      >
                        Edit
                      </button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
