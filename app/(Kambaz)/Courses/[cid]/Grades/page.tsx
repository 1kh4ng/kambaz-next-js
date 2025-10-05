export default function Grades({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-grades">
      <h2>Grades – Course {params.cid}</h2>
      <p>Grades coming soon...</p>
    </div>
  );
}
