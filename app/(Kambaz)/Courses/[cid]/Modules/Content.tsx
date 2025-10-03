export default function ModulesContent({ cid }: { cid: string }) {
  return (
    <div id="wd-course-modules">
      <div>
        <button>Collapse All</button>{" "}
        <button>View Progress</button>{" "}
        <select defaultValue="publish-all" aria-label="Publish Menu">
          <option value="publish-all">Publish All</option>
          <option value="unpublish-all">Unpublish All</option>
        </select>{" "}
        <button>+ Module</button>
      </div>

      <div className="wd-module">
        <h3 className="wd-module-title">
          Module 1 – Building React User Interfaces with HTML
        </h3>
        <ul className="wd-lessons">
          <li className="wd-lesson">Lesson 1 – Lesson 1.1</li>
          <li className="wd-lesson">Lesson 2 – Lesson 1.2</li>
        </ul>
      </div>

      <div className="wd-module">
        <h3 className="wd-module-title">
          Module 2 – Prototyping the React Kambaz User Interface with HTML
        </h3>
        <ul className="wd-lessons">
          <li className="wd-lesson">Lesson 1 – Lesson 2.1</li>
          <li className="wd-lesson">Lesson 2 – Lesson 2.2</li>
        </ul>
      </div>
    </div>
  );
}
