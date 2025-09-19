export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* 1) Heading tags */}
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      {/* 2) Paragraphs */}
      <div id="wd-p-tag">
        <h4>Paragraphs</h4>
        <p>
          This is a paragraph of text demonstrating how browsers render block
          content with default spacing and line wrapping.
        </p>
        <p>
          Another paragraph, to show separation between consecutive blocks of
          text with no extra styling applied.
        </p>
      </div>

      {/* 3) Lists */}
      <div id="wd-lists">
        <h4>Lists</h4>

        <h5>Ordered List Elements</h5>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>

        <h5>My favorite recipe</h5>
        <ol>
          <li>Preheat oven to 400°F (204°C)</li>
          <li>Mix flour, salt, and baking powder</li>
          <li>Add butter and milk, stir until combined</li>
          <li>Scoop onto tray and bake 12–15 minutes</li>
        </ol>

        <h5>Unordered List Elements</h5>
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Grapes</li>
        </ul>

        <h5>Your favorite books</h5>
        <ul>
          <li>Norwegian Wood — Haruki Murakami</li>
          <li>The Left Hand of Darkness — Ursula K. Le Guin</li>
          <li>Godel, Escher, Bach — Douglas Hofstadter</li>
        </ul>
      </div>

      {/* 4) Tables (Q3–Q10: make up dates/scores) */}
      <div id="wd-tables">
        <h4>Tables</h4>

        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Topic</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-09-01</td>
              <td>HTML Basics</td>
              <td>95</td>
            </tr>
            <tr>
              <td>2025-09-03</td>
              <td>Lists &amp; Tables</td>
              <td>88</td>
            </tr>
            <tr>
              <td>2025-09-05</td>
              <td>Images &amp; Forms</td>
              <td>92</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Q3–Q10 examples summarized</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* 5) Images (Starship remote + Teslabot local) */}
      <div id="wd-images">
        <h4>Images</h4>

        <h5>Starship (remote)</h5>
        <img
          id="wd-starship"
          alt="SpaceX Starship"
          width="400"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Starship_SN9_high-altitude_flight_test_%28cropped%29.jpg"
        />

        <h5>Teslabot (local)</h5>
        {/* place /public/images/teslabot.jpg in your project */}
        <img
          id="wd-teslabot"
          alt="Teslabot"
          width="400"
          src="/images/teslabot.jpg"
        />
      </div>

      {/* 6) Forms */}
      <div id="wd-forms">
        <h4>Forms</h4>

        <div>
          <label htmlFor="wd-username">Username</label><br />
          <input id="wd-username" type="text" placeholder="jdoe" defaultValue="khang" />
        </div>

        <div>
          <label htmlFor="wd-password">Password</label><br />
          <input id="wd-password" type="password" defaultValue="123456" />
        </div>

        <div>
          <label htmlFor="wd-first-name">First Name</label><br />
          <input id="wd-first-name" type="text" defaultValue="Khang" />
        </div>

        <div>
          <label htmlFor="wd-last-name">Last Name</label><br />
          <input id="wd-last-name" type="text" defaultValue="Pham" />
        </div>

        <div>
          <label htmlFor="wd-bio">About you</label><br />
          <textarea id="wd-bio" rows={3} placeholder="Tell us a bit..." />
        </div>

        <fieldset>
          <legend>Favorite Genres (radio)</legend>
          <label><input name="genre" type="radio" defaultChecked /> Comedy</label><br />
          <label><input name="genre" type="radio" /> Drama</label><br />
          <label><input name="genre" type="radio" /> SciFi</label><br />
          <label><input name="genre" type="radio" /> Fantasy</label>
        </fieldset>

        <fieldset>
          <legend>Favorite Genres (checkbox)</legend>
          <label><input type="checkbox" defaultChecked /> Comedy</label><br />
          <label><input type="checkbox" /> Drama</label><br />
          <label><input type="checkbox" /> SciFi</label><br />
          <label><input type="checkbox" /> Fantasy</label>
        </fieldset>

        <div>
          <label htmlFor="wd-select-one">Select one option</label><br />
          <select id="wd-select-one" defaultValue="b">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </div>

        <div>
          <label htmlFor="wd-select-many">Select many options</label><br />
          <select id="wd-select-many" multiple defaultValue={["x","z"]}>
            <option value="x">Choice X</option>
            <option value="y">Choice Y</option>
            <option value="z">Choice Z</option>
          </select>
        </div>

        <div>
          <label htmlFor="wd-email">Email</label><br />
          <input id="wd-email" type="email" defaultValue="khang@example.com" />
        </div>

        <div>
          <label htmlFor="wd-salary">Salary</label><br />
          <input id="wd-salary" type="number" defaultValue={90000} />
        </div>

        <div>
          <label htmlFor="wd-rating">Rating</label><br />
          <input id="wd-rating" type="range" min={0} max={10} defaultValue={7} />
        </div>

        <div>
          <label htmlFor="wd-dob">Date of Birth</label><br />
          <input id="wd-dob" type="date" defaultValue="2002-07-15" />
        </div>
      </div>

      {/* 7) Anchor Tag */}
      <div id="wd-anchors">
        <h4>Anchor Tag</h4>
        <p>
          Here is some text with a link to{" "}
          <a id="wd-anchor-example" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank" rel="noreferrer">
            MDN’s &lt;a&gt; element
          </a>.
        </p>
      </div>

      {/* 8) SPA Navigation (links already exist via /Labs and TOC) */}
      <div id="wd-navigation">
        <h4>Navigation</h4>
        <p>
          Use the sidebar to navigate to <a href="/Labs/Lab2">Lab 2</a> and{" "}
          <a href="/Labs/Lab3">Lab 3</a>. Return to <a href="/Labs">Labs Home</a>.
        </p>
      </div>
    </div>
  );
}
