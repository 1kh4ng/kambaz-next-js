import CourseNavigation from "./Navigation";
import { FaBars } from "react-icons/fa6";

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;

  return (
    <div className="container-fluid">
      <div id="wd-course-header" className="d-flex align-items-center py-2">
        <FaBars className="fs-4 me-2" />
        <h1 className="h4 m-0">Course {cid}</h1>
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
