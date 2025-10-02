export default function Quizzes({ params }: { params: { cid: string } }) {
  return (
    <div id="wd-quizzes">
      <h2>Quizzes – Course {params.cid}</h2>
      <p>Quizzes coming soon...</p>
    </div>
  );
}
