import CourseStatus from "./Status";
import ModulesContent from "../Modules/Content";

export default function CourseHome({ params }: { params: { cid: string } }) {
  const { cid } = params;
  return (
    <div id="wd-course-home">
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <ModulesContent cid={cid} />
            </td>
            <td valign="top" width="30%">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
