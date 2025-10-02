export default function Piazza({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-piazza">
      <h2>Piazza – Course {params.cid}</h2>
      <p>Piazza coming soon...</p>
    </div>
  );
}
