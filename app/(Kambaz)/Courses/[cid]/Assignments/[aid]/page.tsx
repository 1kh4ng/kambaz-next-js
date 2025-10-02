export default function AssignmentEditor(
  { params }: { params: { cid: string; aid: string } }
) {
  const { cid, aid } = params;

  return (
    <div id="wd-assignment-editor">
      <h2>Assignment {aid} – Course {cid}</h2>

      <div>
        <label htmlFor="wd-assignment-title">Title</label><br/>
        <input
          id="wd-assignment-title"
          placeholder="Assignment title"
          defaultValue={`Assignment ${aid}`}
        />
      </div>

      <div>
        <label htmlFor="wd-assignment-desc">Description</label><br/>
        <textarea
          id="wd-assignment-desc"
          rows={4}
          defaultValue="Write a short response about the topic."
        />
      </div>

      {/* Points (number) */}
      <div>
        <label htmlFor="wd-assignment-points">Points</label><br/>
        <input id="wd-assignment-points" type="number" defaultValue={100} />
      </div>

      {/* Assignment Group (dropdown) */}
      <div>
        <label htmlFor="wd-assignment-group">Assignment Group</label><br/>
        <select id="wd-assignment-group" defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
          <option value="PROJECT">Project</option>
        </select>
      </div>

      {/* Display Grade (dropdown) */}
      <div>
        <label htmlFor="wd-display-grade">Display Grade as</label><br/>
        <select id="wd-display-grade" defaultValue="PERCENTAGE">
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER_GRADE">Letter Grade</option>
          <option value="GPA_SCALE">GPA Scale</option>
          <option value="NOT_GRADED">Not Graded</option>
        </select>
      </div>

      {/* Submission Type (dropdown) */}
      <div>
        <label htmlFor="wd-submission-type">Submission Type</label><br/>
        <select id="wd-submission-type" defaultValue="ONLINE">
          <option value="ONLINE">Online</option>
          <option value="ON_PAPER">On Paper</option>
          <option value="NONE">No Submission</option>
        </select>
      </div>

      {/* Online Entry Options (checkboxes) */}
      <fieldset id="wd-online-entry-options">
        <legend>Online Entry Options</legend>
        <label><input type="checkbox" defaultChecked /> Text Entry</label><br/>
        <label><input type="checkbox" /> Website URL</label><br/>
        <label><input type="checkbox" /> Media Recordings</label><br/>
        <label><input type="checkbox" /> File Uploads</label>
      </fieldset>

      {/* Assign to (default value) */}
      <div>
        <label htmlFor="wd-assign-to">Assign to</label><br/>
        <input id="wd-assign-to" defaultValue="Everyone" />
      </div>

      {/* Dates (type=date with defaults) */}
      <div>
        <label htmlFor="wd-due-date">Due</label><br/>
        <input id="wd-due-date" type="date" defaultValue="2025-10-15" />
      </div>
      <div>
        <label htmlFor="wd-available-from">Available from</label><br/>
        <input id="wd-available-from" type="date" defaultValue="2025-10-01" />
      </div>
      <div>
        <label htmlFor="wd-available-until">Until</label><br/>
        <input id="wd-available-until" type="date" defaultValue="2025-10-31" />
      </div>
    </div>
  );
}
