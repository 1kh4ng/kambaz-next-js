"use client";

import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function DashboardPage() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/4550"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/webdev.jpg"
                  alt="Web Development"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS4550 Web Development
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Full Stack Web Apps
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/3200"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/databases.jpg"
                  alt="Introduction to Databases"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS3200 Introduction to Databases
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Models and SQL
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/2800"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/logicandcomp.jpg"
                  alt="Logic and Computation"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS2800 Logic and Computation
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Typed Functional Programming
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/1800"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/discrete.jpg"
                  alt="Discrete Structures"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS1800 Discrete Structures
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Mathematical Structures
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/3650"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/systems.jpg"
                  alt="Computer Systems"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS3650 Computer Systems
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Processes & Concurrency
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/3800"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/theory.jpg"
                  alt="Theory of Computation"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS3800 Theory of Computation
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Capabilities and Limitations of Computers
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href="/Courses/4700"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <Card.Img
                  as={Image}
                  src="/images/networks.jpg"
                  alt="Network Fundamentals"
                  width={300}
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    CS4700 Network Fundamentals
                  </Card.Title>
                  <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                    Transport & Routing
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
