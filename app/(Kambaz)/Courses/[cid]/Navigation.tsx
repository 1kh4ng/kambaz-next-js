"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = (usePathname() || "").toLowerCase();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-course-navigation" className="list-group wd rounded-0">
      {links.map((label) => {
        const slug = label; // labels double as slugs per the book
        const href = `/Courses/${cid}/${slug}`;
        const active = pathname === href.toLowerCase() || pathname.startsWith(href.toLowerCase() + "/");
        return (
          <Link
            key={slug}
            href={href}
            className={`list-group-item border-0 ${active ? "active" : "text-danger"}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
