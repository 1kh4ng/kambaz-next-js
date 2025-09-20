import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
        <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image src="/images/webdev.jpg" width={200} height={150} alt="Web Development"/>
            <div>
            <h5> CS4550 Web Development </h5>
            <p className="wd-dashboard-course-title">
                Full Stack Web Apps
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/3200" className="wd-dashboard-course-link">
            <Image src="/images/databases.jpg" width={200} height={150} alt="Introduction to Databases"/>
            <div>
            <h5> CS 3200 Introduction to Databases </h5>
            <p className="wd-dashboard-course-title">
                Models and SQL
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/2800" className="wd-dashboard-course-link">
            <Image src="/images/logicandcomp.jpg" width={200} height={150} alt="Logic and Computation"/>
            <div>
            <h5> CS2800 Logic and Computation </h5>
            <p className="wd-dashboard-course-title">
                Typed Functional Programming
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/1800" className="wd-dashboard-course-link">
            <Image src="/images/discrete.jpg" width={200} height={150} alt="Discrete Structures"/>
            <div>
            <h5> CS1800 Discrete Structures </h5>
            <p className="wd-dashboard-course-title">
                Mathematical Structures
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/3650" className="wd-dashboard-course-link">
            <Image src="/images/systems.jpg" width={200} height={150} alt="Computer Systems"/>
            <div>
            <h5> CS3650 Computer Systems </h5>
            <p className="wd-dashboard-course-title">
                Processes & Concurrency
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/3800" className="wd-dashboard-course-link">
            <Image src="/images/theory.jpg" width={200} height={150} alt="Theory of Computation"/>
            <div>
            <h5> CS3800 Theory of Computation </h5>
            <p className="wd-dashboard-course-title">
                Capabilities and Limitations of Computers
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/4700" className="wd-dashboard-course-link">
            <Image src="/images/networks.jpg" width={200} height={150} alt="Network Fundamentals"/>
            <div>
            <h5> CS4700 Network Fundamentals </h5>
            <p className="wd-dashboard-course-title">
                Transport & Routing
            </p>
            <button> Go </button>
            </div>
        </Link>
        </div>
        <div className="wd-dashboard-course"> . </div>
        <div className="wd-dashboard-course"> . </div>
      </div>
    </div>
  );}
