import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CourseLayout(
  { children, params }: { children: ReactNode; params: { cid: string } }
) {
  return (
    <table id="wd-course-layout">
      <tbody>
        <tr>
          <td valign="top" width="200">
            <CourseNavigation cid={params.cid} />
          </td>
          <td valign="top" width="100%">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
