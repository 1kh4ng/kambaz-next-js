"use client";

import { FormControl } from "react-bootstrap";

import React, { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    title: "NodeJS Assignment",
    score: 0,
    completed: false,
  });
  const [assignmentTitle, setAssignmentTitle] = useState(assignment.title);
  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignment"
        className="btn btn-primary"
        href={ASSIGNMENT_API_URL}
      >
        Get Assignment
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignmentTitle}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-50"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignmentTitle(e.target.value)}
      />
      <hr />
    </div>
  );
}
