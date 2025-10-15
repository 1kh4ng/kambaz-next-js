"use client";

import { useParams } from "next/navigation";
import { Button, InputGroup, FormControl, Table } from "react-bootstrap";
import { FaMagnifyingGlass, FaCircleUser } from "react-icons/fa6";
import people from "@/app/data/people.json";

type Person = {
  course: number;
  name: string;
  loginId: string;
  section: string;
  role: "STUDENT" | "TA";
  lastActivity: string;
  totalActivity: string;
};

export default function PeoplePage() {
  const { cid } = useParams<{ cid: string }>();
  const rows = (people as Person[]).filter(p => String(p.course) === cid);

  return (
    <div id="wd-people" className="container-fluid">
      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 me-3" style={{ maxWidth: 480 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <FaMagnifyingGlass />
            </InputGroup.Text>
            <FormControl placeholder="Search..." />
          </InputGroup>
        </div>

        <div className="ms-auto">
          <Button variant="danger" size="lg">+ People</Button>
        </div>
      </div>

      <Table striped hover borderless>
        <thead className="bg-white">
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.loginId}>
              <td className="align-middle">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 36, height: 36, background: "#e7e9eb", color: "#6c757d" }}
                  >
                    <FaCircleUser />
                  </div>
                  <div className="d-flex flex-column">
                    <span className="fw-semibold text-dark">{p.name}</span>
                  </div>
                </div>
              </td>
              <td className="align-middle">{p.loginId}</td>
              <td className="align-middle">{p.section}</td>
              <td className="align-middle">{p.role}</td>
              <td className="align-middle">{p.lastActivity}</td>
              <td className="align-middle">{p.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
