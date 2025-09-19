import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      <section id="wd-lab1-landing">
        <h2>Lab 1</h2>
        <p>
          <b>Name:</b> Khang Pham {
        </p>
        <ul>
          <li>
            <Link href="/Labs/Lab1" id="wd-lab1-link">
              Lab 1: HTML Examples
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab2" id="wd-lab2-link">
              Lab 2
            </Link>
          </li>
          <li>
            <Link href="/Labs/Lab3" id="wd-lab3-link">
              Lab 3
            </Link>
          </li>
          <li>
            <Link href="/Kambaz" id="wd-kambaz-link">
              Kambaz (app)
            </Link>
          </li>
          <li>
            {}
            <a
              id="wd-github"
              href="https://github.com/1kh4ng/kambaz-next-js"
              target="_blank"
              rel="noreferrer"
            >
              Source on GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
