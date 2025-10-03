import Link from "next/link";

// export default function CourseAssignments({ params }: { params: { cid: string } }) {
//   const { cid } = params;
//   return (
//     <div id="wd-course-assignments">
//       <h2>Assignments – Course {cid}</h2>
//       <ul>
//         <li>
//           <Link href={`/Courses/${cid}/Assignments/1`} id="wd-a1-link">
//             Assignment 1
//           </Link>
//         </li>
//         <li>
//           <Link href={`/Courses/${cid}/Assignments/2`} id="wd-a2-link">
//             Assignment 2
//           </Link>
//         </li>
//         <li>
//           <Link href={`/Courses/${cid}/Assignments/3`} id="wd-a3-link">
//             Assignment 3
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> </li>
        <li className="wd-assignment-list-item">
          {/* Complete On Your Own */}
        </li>
      </ul>
    </div>
);}

