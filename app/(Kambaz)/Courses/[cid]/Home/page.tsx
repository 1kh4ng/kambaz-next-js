export default function CourseHome({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-course-home">
      {/* Buttons at the top */}
      <div id="wd-course-home-actions">
        <button id="wd-home-import">Import</button>{" "}
        <button id="wd-home-publish-all">Publish All</button>{" "}
        <button id="wd-home-view-grades">View Grades</button>{" "}
        <button id="wd-home-student-view">Student View</button>
      </div>
      <hr />

      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 16 }}>
        {/* Course Status component (left column) */}
        <aside id="wd-course-status">
          <h3>Course Status</h3>
          <button id="wd-status-publish">Publish</button>{" "}
          <button id="wd-status-unpublish">Unpublish</button>
          <ul>
            <li>Import Existing Content</li>
            <li>Import from Commons</li>
            <li>Choose Home Page</li>
            <li>View Course Stream</li>
            <li>New Announcement</li>
            <li>New Analytics</li>
            <li>View Course Notifications</li>
          </ul>
        </aside>

        {/* Modules (right column) */}
        <main id="wd-home-modules">
          <h3>Modules</h3>

          <section className="wd-module">
            <h4 className="wd-module-title">Module 1 – Building React User Interfaces with HTML</h4>
            <ul className="wd-lessons">
              <li>Lesson 1 – Lesson 1.1</li>
              <li>Lesson 2 – Lesson 1.2</li>
            </ul>
          </section>

          <section className="wd-module">
            <h4 className="wd-module-title">Module 2 – Prototyping the React Kambaz User Interface with HTML</h4>
            <ul className="wd-lessons">
              <li>Lesson 1 – Lesson 2.1</li>
              <li>Lesson 2 – Lesson 2.2</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
