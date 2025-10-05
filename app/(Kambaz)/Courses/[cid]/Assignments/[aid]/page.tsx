"use client";

import React, { useRef, useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

type PageProps = { params: { cid: string; aid: string } };

const AssignmentEditorPage: React.FC<PageProps> = ({ params }) => {
  const { cid, aid } = params;

  const [assignees, setAssignees] = useState<string[]>(["Everyone"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const removeChip = (idx: number) =>
    setAssignees(prev => prev.filter((_, i) => i !== idx));

  const addChip = (value: string) => {
    const v = value.trim();
    if (!v) return;
    setAssignees(prev => (prev.includes(v) ? prev : [...prev, v]));
  };

  const onChipInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addChip((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = "";
    }
  };

  return (
    <div id="wd-assignments-editor" className="container-fluid">
      <h2 className="h5 mb-3">Assignment {aid} – Course {cid}</h2>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control defaultValue="A1" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>

      <Form>
        <Row className="mb-3">
          <Form.Label column sm={3}>Points</Form.Label>
          <Col sm={9}>
            <Form.Control id="wd-points" type="number" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3}>Assignment Group</Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3}>Display Grade as</Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
              <option>GPA Scale</option>
              <option>Not Graded</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3}>Submission Type</Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" defaultValue="Online">
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </Form.Select>

              <div className="fw-semibold mt-3 mb-2">Online Entry Options</div>
              <Form.Check id="wd-text-entry" type="checkbox" label="Text Entry" />
              <Form.Check id="wd-website-url" type="checkbox" label="Website URL" defaultChecked />
              <Form.Check id="wd-media-recordings" type="checkbox" label="Media Recordings" />
              <Form.Check id="wd-student-annotation" type="checkbox" label="Student Annotation" />
              <Form.Check id="wd-file-upload" type="checkbox" label="File Uploads" />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Form.Label column sm={3}>Assign</Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Group className="mb-3" controlId="wd-assign-to">
                <Form.Label className="fw-semibold">Assign to</Form.Label>
                <div
                  className="form-control d-flex flex-wrap align-items-center gap-2"
                  style={{ minHeight: 48 }}
                  onClick={() => inputRef.current?.focus()}
                >
                  {assignees.map((name, idx) => (
                    <span key={name} className="wd-chip">
                      <span>{name}</span>
                      <button
                        type="button"
                        className="btn-close btn-sm ms-1"
                        aria-label={`Remove ${name}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          removeChip(idx);
                        }}
                        style={{ filter: "invert(40%)" }}
                      />
                    </span>
                  ))}
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder={assignees.length === 0 ? "Add people…" : ""}
                    onKeyDown={onChipInputKeyDown}
                    className="border-0 flex-grow-1"
                    style={{ minWidth: 120, outline: "none" }}
                  />
                </div>
              </Form.Group>

              <Row className="g-3">
                <Col md={12}>
                  <Form.Group controlId="wd-due-date">
                    <Form.Label className="fw-semibold">Due</Form.Label>
                    <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label className="fw-semibold">Available from</Form.Label>
                    <Form.Control type="datetime-local" defaultValue="2024-05-06T12:00" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label className="fw-semibold">Until</Form.Label>
                    <Form.Control type="datetime-local" defaultValue="2024-05-20T12:00" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default AssignmentEditorPage;
