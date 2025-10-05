"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = (usePathname() || "").toLowerCase();

  const mk = (label: string, slug: string) => {
    const href = `/Courses/${cid}/${slug}`;
    const active =
      pathname === href.toLowerCase() || pathname.startsWith(href.toLowerCase() + "/");
    return (
      <Link
        key={slug}
        href={href}
        className={`list-group-item border-0 ${active ? "active" : "text-danger"}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div id="wd-course-navigation" className="list-group wd rounded-0">
      {mk("Home", "Home")}
      {mk("Modules", "Modules")}
      {mk("Piazza", "Piazza")}
      {mk("Zoom", "Zoom")}
      {mk("Assignments", "Assignments")}
      {mk("Quizzes", "Quizzes")}
      {mk("Grades", "Grades")}
      {mk("People", "People")}
    </div>
  );
}
