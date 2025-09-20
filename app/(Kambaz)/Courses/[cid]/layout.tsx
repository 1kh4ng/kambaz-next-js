// app/(Kambaz)/Courses/[cid]/layout.tsx
import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CourseLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <table id="wd-course-layout">
      <tbody>
        <tr>
          <td valign="top" width="200">
            <CourseNavigation cid={cid} />
          </td>
          <td valign="top" width="100%">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
