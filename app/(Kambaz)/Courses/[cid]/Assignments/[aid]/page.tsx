"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { setAssignments } from "../reducer";
import * as client from "../client";

const getTitle = (a: any) => a?.title ?? a?.name ?? "Untitled";
const getPoints = (a: any) => a?.points ?? a?.pts ?? 0;
const getDue = (a: any) => a?.due ?? a?.dueDate ?? a?.due_date ?? "";
const getAvailableFrom = (a: any) =>
  a?.availableFrom ?? a?.available_from ?? a?.available ?? a?.notAvailableUntil ?? "";
const getAvailableUntil = (a: any) => a?.availableUntil ?? a?.until ?? "";
const getDescription = (a: any) => a?.description ?? "";
const getGroup = (a: any) => a?.group ?? "ASSIGNMENTS";
const getDisplayGradeAs = (a: any) => a?.displayGradeAs ?? "Percentage";
const getSubmissionType = (a: any) => a?.submissionType ?? "Online";
const getAssignTo = (a: any) => (Array.isArray(a?.assignTo) ? a.assignTo : ["Everyone"]);

const getOnlineEntryOptions = (a: any) => {
  const o = a?.onlineEntryOptions;
  if (o && typeof o === "object") {
    return {
      textEntry: !!o.textEntry,
      websiteUrl: !!o.websiteUrl,
      mediaRecordings: !!o.mediaRecordings,
      studentAnnotation: !!o.studentAnnotation,
      fileUploads: !!o.fileUploads,
    };
  }
  return {
    textEntry: false,
    websiteUrl: true,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUploads: false,
  };
};

const toInputDateTime = (value: any) => {
  if (!value) return "";
  if (typeof value === "string" && value.includes("T")) return value;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
};

export default function AssignmentEditorPage() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const dispatch = useDispatch();

  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const assignment = (assignments as any[]).find((a: any) => String(a._id) === String(aid));

  const [assignees, setAssignees] = useState<string[]>(assignment ? getAssignTo(assignment) : ["Everyone"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const ptsRef = useRef<HTMLInputElement>(null);
  const groupRef = useRef<HTMLSelectElement>(null);
  const displayGradeAsRef = useRef<HTMLSelectElement>(null);
  const submissionTypeRef = useRef<HTMLSelectElement>(null);

  const textEntryRef = useRef<HTMLInputElement>(null);
  const websiteUrlRef = useRef<HTMLInputElement>(null);
  const mediaRecordingsRef = useRef<HTMLInputElement>(null);
  const studentAnnotationRef = useRef<HTMLInputElement>(null);
  const fileUploadsRef = useRef<HTMLInputElement>(null);

  const dueRef = useRef<HTMLInputElement>(null);
  const availFromRef = useRef<HTMLInputElement>(null);
  const availUntilRef = useRef<HTMLInputElement>(null);

  const fetchAssignments = async () => {
    if (!cid) return;
    const data = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(data));
  };

  useEffect(() => {
    if (!assignment) {
      fetchAssignments();
    }
  }, [cid, aid]);

  useEffect(() => {
    if (assignment) {
      setAssignees(getAssignTo(assignment));
    }
  }, [assignment?._id]);

  const removeChip = (idx: number) =>
    setAssignees((prev) => prev.filter((_, i) => i !== idx));

  const addChip = (value: string) => {
    const v = value.trim();
    if (!v) return;
    setAssignees((prev) => (prev.includes(v) ? prev : [...prev, v]));
  };

  const onChipInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addChip((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = "";
    }
  };

  const onSave = async () => {
    if (!assignment) return;

    const updated = {
      ...assignment,
      title: nameRef.current?.value ?? getTitle(assignment),
      description: descRef.current?.value ?? getDescription(assignment),
      points: Number(ptsRef.current?.value ?? getPoints(assignment)),
      group: groupRef.current?.value ?? getGroup(assignment),
      displayGradeAs: displayGradeAsRef.current?.value ?? getDisplayGradeAs(assignment),
      submissionType: submissionTypeRef.current?.value ?? getSubmissionType(assignment),
      onlineEntryOptions: {
        textEntry: !!textEntryRef.current?.checked,
        websiteUrl: !!websiteUrlRef.current?.checked,
        mediaRecordings: !!mediaRecordingsRef.current?.checked,
        studentAnnotation: !!studentAnnotationRef.current?.checked,
        fileUploads: !!fileUploadsRef.current?.checked,
      },
      assignTo: assignees,
      due: dueRef.current?.value ?? getDue(assignment),
      availableFrom: availFromRef.current?.value ?? getAvailableFrom(assignment),
      availableUntil: availUntilRef.current?.value ?? getAvailableUntil(assignment),
      available: availFromRef.current?.value ?? getAvailableFrom(assignment),
      editing: false,
    };

    await client.updateAssignment(updated);

    const newAssignments = (assignments as any[]).map((a: any) =>
      a._id === updated._id ? updated : a
    );
    dispatch(setAssignments(newAssignments));

    router.push(`/Courses/${cid}/Assignments`);
  };

  const onDelete = async () => {
    if (!assignment) return;

    await client.deleteAssignment(assignment._id);
    dispatch(setAssignments((assignments as any[]).filter((a: any) => a._id !== assignment._id)));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const initialOptions = assignment ? getOnlineEntryOptions(assignment) : getOnlineEntryOptions(null);

  return (
    <div id="wd-assignments-editor" className="container-fluid">
      <h2 className="h5 mb-3">
        Assignment {assignment ? getTitle(assignment) : aid} – Course {cid}
      </h2>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control ref={nameRef} defaultValue={assignment ? getTitle(assignment) : "Untitled"} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          ref={descRef}
          as="textarea"
          rows={10}
          defaultValue={
            assignment && getDescription(assignment)
              ? getDescription(assignment)
              : `The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`
          }
        />
      </Form.Group>

      <Form>
        <Row className="mb-3">
          <Form.Label column sm={3}>
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              id="wd-points"
              type="number"
              ref={ptsRef}
              defaultValue={assignment ? getPoints(assignment) : 100}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3}>
            Assignment Group
          </Form.Label>
          <Col sm={9}>
            <Form.Select
              id="wd-group"
              ref={groupRef}
              defaultValue={assignment ? getGroup(assignment) : "ASSIGNMENTS"}
            >
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
            <Form.Select
              id="wd-display-grade-as"
              ref={displayGradeAsRef}
              defaultValue={assignment ? getDisplayGradeAs(assignment) : "Percentage"}
            >
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
              <Form.Select
                id="wd-submission-type"
                ref={submissionTypeRef}
                defaultValue={assignment ? getSubmissionType(assignment) : "Online"}
              >
                <option>Online</option>
                <option>On Paper</option>
                <option>No Submission</option>
              </Form.Select>

              <div className="fw-semibold mt-3 mb-2">Online Entry Options</div>
              <Form.Check id="wd-text-entry" type="checkbox" label="Text Entry" ref={textEntryRef} defaultChecked={initialOptions.textEntry} />
              <Form.Check id="wd-website-url" type="checkbox" label="Website URL" ref={websiteUrlRef} defaultChecked={initialOptions.websiteUrl} />
              <Form.Check id="wd-media-recordings" type="checkbox" label="Media Recordings" ref={mediaRecordingsRef} defaultChecked={initialOptions.mediaRecordings} />
              <Form.Check id="wd-student-annotation" type="checkbox" label="Student Annotation" ref={studentAnnotationRef} defaultChecked={initialOptions.studentAnnotation} />
              <Form.Check id="wd-file-upload" type="checkbox" label="File Uploads" ref={fileUploadsRef} defaultChecked={initialOptions.fileUploads} />
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
                    <span key={`${name}-${idx}`} className="wd-chip">
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
                    <Form.Control
                      ref={dueRef}
                      type="datetime-local"
                      defaultValue={toInputDateTime(assignment ? getDue(assignment) : "")}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label className="fw-semibold">Available from</Form.Label>
                    <Form.Control
                      ref={availFromRef}
                      type="datetime-local"
                      defaultValue={toInputDateTime(assignment ? getAvailableFrom(assignment) : "")}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label className="fw-semibold">Until</Form.Label>
                    <Form.Control
                      ref={availUntilRef}
                      type="datetime-local"
                      defaultValue={toInputDateTime(assignment ? getAvailableUntil(assignment) : "")}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="secondary" onClick={() => router.push(`/Courses/${cid}/Assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onSave}>
            Save
          </Button>
          <Button variant="outline-danger" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </Form>
    </div>
  );
}
