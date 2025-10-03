export default function AssignmentEditor(
  { params }: { params: { cid: string; aid: string } }
) {
  const { cid, aid } = params;

  return (
    <div id="wd-assignments-editor">
      <h2>Assignment {aid} – Course {cid}</h2>

      <label htmlFor="wd-name">Assignment Name</label><br/>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br/><br/>

      <label htmlFor="wd-description">Description</label><br/>
      <textarea id="wd-description" rows={4}
        defaultValue={
        `The assignment is available online.
        Submit a link to the landing page of your app.`
        }
      /><br/>

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECT">Project</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="POINTS">Points</option>
                <option value="LETTER_GRADE">Letter Grade</option>
                <option value="GPA_SCALE">GPA Scale</option>
                <option value="NOT_GRADED">Not Graded</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
                <option value="ON_PAPER">On Paper</option>
                <option value="NONE">No Submission</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <label><input id="wd-text-entry" type="checkbox" defaultChecked /> Text Entry</label><br/>
              <label><input id="wd-website-url" type="checkbox" /> Website URL</label><br/>
              <label><input id="wd-media-recordings" type="checkbox" /> Media Recordings</label><br/>
              <label><input id="wd-student-annotation" type="checkbox" /> Student Annotation</label><br/>
              <label><input id="wd-file-upload" type="checkbox" /> File Uploads</label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2025-10-15" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" defaultValue="2025-10-01" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" defaultValue="2025-10-31" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
