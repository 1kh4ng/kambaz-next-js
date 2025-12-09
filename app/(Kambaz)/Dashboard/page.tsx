"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, Button, FormControl, FormCheck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import coursesData from "@/app/data/courses.json";
import { redirect } from "next/dist/client/components/navigation";
import { fetchAllCourses, createCourse, deleteCourse, updateCourse } from "../Courses/client";
import { setCourses } from "../Courses/reducer";
import { setEnrollments, toggleEnrollmentsView } from "../Enrollments/reducer";
import * as enrollmentsClient from "../Enrollments/client";

type Course = {
  _id: string | number;
  title?: string;
  subtitle?: string;
  image?: string;
  name?: string;
  description?: string;
};

const placeholderImage =
  (coursesData as any[])[0]?.image || "/images/react.jpg";

const getCourseTitle = (c: any) => c?.title ?? c?.name ?? "Untitled";
const getCourseSubtitle = (c: any) => c?.subtitle ?? c?.description ?? "";
const getCourseImage = (c: any) => c?.image ?? placeholderImage;

export default function DashboardPage() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments, showAllCourses } = useSelector((state: RootState) => state.enrollmentsReducer);
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

  const isEnrolled = (courseId: string | number) => {
    return (enrollments as any[]).some((e: any) => {
      const sameCourse = String(e.course) === String(courseId);
      if (e.user === undefined) return sameCourse;
      return sameCourse && String(e.user) === String(currentUser?._id);
    });
  };

  const fetchEnrollments = async () => {
    try {
      const list = await enrollmentsClient.findMyEnrollments();
      dispatch(setEnrollments(list));
    } catch (error) {}
  };

  const fetchCourses = async () => {
    try {
      const all = await fetchAllCourses();
      if (showAllCourses) {
        dispatch(setCourses(all));
        return;
      }
      const enrolledIds = new Set(
        (enrollments as any[]).map((e: any) => String(e.course))
      );
      const mine = (all as any[]).filter((c: any) => enrolledIds.has(String(c._id)));
      dispatch(setCourses(mine));
    } catch (error) {}
  };

  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses, enrollments]);

  const onAddNewCourse = async () => {
    const payload = {
      name: course.name ?? course.title ?? "New Course",
      description: course.description ?? course.subtitle ?? "",
      image: course.image ?? placeholderImage,
    };
    const newCourse = await createCourse(payload);
    dispatch(setCourses([...(courses as any[]), newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await deleteCourse(courseId);
    dispatch(setCourses((courses as any[]).filter((course: any) => String(course._id) !== String(courseId))));
  };

  const onUpdateCourse = async () => {
    const payload = {
      _id: course._id,
      name: course.name ?? course.title ?? "Untitled",
      description: course.description ?? course.subtitle ?? "",
      image: course.image ?? placeholderImage,
    };
    await updateCourse(payload);
    dispatch(
      setCourses(
        (courses as any[]).map((c: any) => (String(c._id) === String(course._id) ? { ...c, ...payload } : c))
      )
    );
  };

  const onToggleEnrollment = async (courseId: string | number) => {
    const enrolled = isEnrolled(courseId);
    if (enrolled) {
      await enrollmentsClient.unenrollFromCourse(String(courseId));
    } else {
      await enrollmentsClient.enrollInCourse(String(courseId));
    }
    await fetchEnrollments();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <div className="d-flex align-items-center">
        <h2 id="wd-dashboard-published" className="mb-0">
          Published Courses ({courses.length})
        </h2>
        <div className="ms-auto">
          <FormCheck
            type="switch"
            id="wd-dashboard-toggle-enrollments"
            label="Show all courses"
            checked={showAllCourses}
            onChange={() => dispatch(toggleEnrollmentsView())}
          />
        </div>
      </div>

      <hr />

      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={onUpdateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={(course.name ?? course.title) as any}
        onChange={(e) => setCourse({ ...course, name: e.target.value, title: e.target.value })}
        className="mb-2"
      />
      <FormControl
        as="textarea"
        value={(course.description ?? course.subtitle) as any}
        onChange={(e) => setCourse({ ...course, description: e.target.value, subtitle: e.target.value })}
        rows={3}
      />
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(courses as any[]).map((course: any) => {
            const enrolled = isEnrolled(course._id);
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
                      src={getCourseImage(course)}
                      alt={getCourseTitle(course)}
                      width={300}
                      height={160}
                    />
                    <Card.Body>
                      <Card.Title style={{ color: "#000080", fontWeight: "bold" }}>
                        {getCourseTitle(course)}
                      </Card.Title>
                      <Card.Text className="text-dark" style={{ height: "100px" }}>
                        {getCourseSubtitle(course)}
                      </Card.Text>

                      <Button variant="primary">Go</Button>

                      {showAllCourses && (
                        <Button
                          variant={enrolled ? "secondary" : "success"}
                          className="ms-2"
                          onClick={(event) => {
                            event.preventDefault();
                            onToggleEnrollment(course._id);
                          }}
                        >
                          {enrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}

                      <button
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                        style={{ marginLeft: "0.5rem" }}
                        onClick={(event) => {
                          event.preventDefault();
                          onDeleteCourse(String(course._id));
                        }}
                      >
                        Delete
                      </button>

                      <button
                        id="wd-edit-course-click"
                        className="btn btn-warning float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse({
                            _id: course._id,
                            name: course.name ?? course.title,
                            description: course.description ?? course.subtitle,
                            image: course.image ?? placeholderImage,
                            title: course.title ?? course.name,
                            subtitle: course.subtitle ?? course.description,
                          });
                        }}
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
