"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavLink } from "react-bootstrap";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() || "";

  return (
    <Nav variant="pills" className="flex-column" id="wd-course-nav">
      <NavLink
        as={Link}
        href={`/Courses/${cid}/Home`}
        active={pathname.includes(`/Courses/${cid}/Home`)}
      >
        Home
      </NavLink>
      <NavLink
        as={Link}
        href={`/Courses/${cid}/Modules`}
        active={pathname.includes(`/Courses/${cid}/Modules`)}
      >
        Modules
      </NavLink>
      <NavLink
        as={Link}
        href={`/Courses/${cid}/Assignments`}
        active={pathname.includes(`/Courses/${cid}/Assignments`)}
      >
        Assignments
      </NavLink>
      <NavLink
        as={Link}
        href={`/Courses/${cid}/Grades`}
        active={pathname.includes(`/Courses/${cid}/Grades`)}
      >
        Grades
      </NavLink>
      <NavLink
        as={Link}
        href={`/Courses/${cid}/People`}
        active={pathname.includes(`/Courses/${cid}/People`)}
      >
        People
      </NavLink>
    </Nav>
  );
}
