export default function CourseModules({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-course-modules">
      <h2>Modules – Course {params.cid}</h2>
      <ul>
        <li>Lecture 1 - Building React User Interfaces with HTML</li>
        <li>Lecture 2 - Prototyping the React Kambaz User Interface with HTML</li>
        <li>Lecture 3 - Styling Web Pages with CSS and Bootstrap</li>
      </ul>
    </div>
  );
}
