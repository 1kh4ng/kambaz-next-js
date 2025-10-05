"use client";

import {
  Button,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import { FaMagnifyingGlass, FaCircleUser } from "react-icons/fa6";

type Person = {
  name: string;
  loginId: string;
  section: string;
  role: "STUDENT" | "TA";
  lastActivity: string;
  totalActivity: string;
};

const PEOPLE: Person[] = [
  {
    name: "Tony Stark",
    loginId: "001234561S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-10-01T00:00:00.000Z",
    totalActivity: "10:21:32",
  },
  {
    name: "Bruce Wayne",
    loginId: "001234562S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-11-02T00:00:00.000Z",
    totalActivity: "15:32:43",
  },
  {
    name: "Steve Rogers",
    loginId: "001234563S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-10-02T00:00:00.000Z",
    totalActivity: "23:32:43",
  },
  {
    name: "Natasha Romanoff",
    loginId: "001234564S",
    section: "S101",
    role: "TA",
    lastActivity: "2020-11-05T00:00:00.000Z",
    totalActivity: "13:23:34",
  },
  {
    name: "Thor Odinson",
    loginId: "001234565S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-12-01T00:00:00.000Z",
    totalActivity: "11:22:33",
  },
  {
    name: "Bruce Banner",
    loginId: "001234566S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-12-01T00:00:00.000Z",
    totalActivity: "22:33:44",
  },
];

export default function PeoplePage({ params }: { params: { cid: string } }) {
  const { cid: _cid } = params;
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
          <Button variant="danger" size="lg">
            + People
          </Button>
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
          {PEOPLE.map((p) => (
            <tr key={p.loginId}>
              <td className="align-middle">
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      background: "#e7e9eb",
                      color: "#6c757d",
                    }}
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
