import Link from "next/link";

export default function CourseAssignments({ params }: { params: { cid: string } }) {
  const { cid } = params;
  return (
    <div id="wd-course-assignments">
      <h2>Assignments – Course {cid}</h2>
      <ul>
        <li>
          <Link href={`/Courses/${cid}/Assignments/1`} id="wd-a1-link">
            Assignment 1
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Assignments/2`} id="wd-a2-link">
            Assignment 2
          </Link>
        </li>
        <li>
          <Link href={`/Courses/${cid}/Assignments/3`} id="wd-a3-link">
            Assignment 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
