export default function CourseHome({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-course-home">
      <h2>Home – Course {params.cid}</h2>
      <p>Welcome to the course home.</p>
    </div>
  );
}
