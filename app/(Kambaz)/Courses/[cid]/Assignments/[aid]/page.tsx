export default function AssignmentEditor(
  { params }: { params: { cid: string; aid: string } }
) {
  const { cid, aid } = params;
  return (
    <div id="wd-assignment-editor">
      <h2>Assignment {aid} – Course {cid}</h2>
      <div>
        <label htmlFor="wd-assignment-title">Title</label><br/>
        <input id="wd-assignment-title" placeholder="Assignment title" defaultValue={`Assignment ${aid}`} />
      </div>
      <div>
        <label htmlFor="wd-assignment-desc">Description</label><br/>
        <textarea id="wd-assignment-desc" rows={4} placeholder="Describe the assignment..." />
      </div>
      <div>
        <label htmlFor="wd-assignment-due">Due date</label><br/>
        <input id="wd-assignment-due" type="date" />
      </div>
    </div>
  );
}
