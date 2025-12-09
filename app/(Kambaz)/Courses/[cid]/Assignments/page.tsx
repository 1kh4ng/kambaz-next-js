"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import {
  FaPlus,
  FaGripVertical,
  FaEllipsisVertical,
  FaMagnifyingGlass,
  FaCaretDown,
  FaRegPenToSquare,
  FaTrash,
  FaPencil,
} from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setAssignments, updateAssignment, editAssignment } from "./reducer";
import * as client from "../../client";

const Grip = () => (
  <span className="wd-grip text-muted d-inline-flex align-items-center me-2">
    <FaGripVertical />
  </span>
);

const getTitle = (a: any) => a?.title ?? a?.name ?? "Untitled";
const getDue = (a: any) => a?.due ?? a?.dueDate ?? a?.due_date ?? "TBD";
const getPoints = (a: any) => a?.points ?? a?.pts ?? 0;
const getAvailable = (a: any) =>
  a?.available ??
  a?.availableFrom ??
  a?.available_from ??
  a?.notAvailableUntil ??
  "TBD";

const AssignmentMeta = ({ a }: { a: any }) => (
  <>
    <div className="small">
      <span className="text-danger">Multiple Modules</span>
      <span className="mx-2">|</span>
      <span className="text-muted">Not available until {getAvailable(a)}</span>
    </div>
    <div className="small text-muted">
      <span className="fw-semibold">Due</span> <span>{getDue(a)}</span>
      <span className="mx-2">|</span>
      <span>{getPoints(a)} pts</span>
    </div>
  </>
);

export default function AssignmentsPage() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    (state: RootState) => state.assignmentsReducer
  );
  const [search, setSearch] = useState("");

  const fetchAssignments = async () => {
    if (!cid) return;
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const onCreateAssignment = async () => {
    if (!cid) return;
    const newAssignment = { title: "New Assignment" };
    const assignment = await client.createAssignmentForCourse(
      cid as string,
      newAssignment
    );
    dispatch(setAssignments([...(assignments as any[]), assignment]));
  };

  const onRemoveAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(
      setAssignments(
        (assignments as any[]).filter((a: any) => a._id !== assignmentId)
      )
    );
  };

  const onUpdateAssignment = async (assignment: any) => {
    const { editing, ...assignmentUpdates } = assignment;
    await client.updateAssignment(assignmentUpdates);
    const newAssignments = (assignments as any[]).map((a: any) =>
      a._id === assignment._id ? assignment : a
    );
    dispatch(setAssignments(newAssignments));
  };

  const filtered = (assignments as any[]).filter((a: any) =>
    getTitle(a).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="wd-assignments" className="container-fluid">
      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 me-3" style={{ maxWidth: 480 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <FaMagnifyingGlass />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="ms-auto d-flex gap-2">
          <Button variant="secondary" size="lg" className="text-nowrap">
            <FaPlus className="me-2" /> Group
          </Button>
          <Button
            variant="danger"
            size="lg"
            className="text-nowrap"
            onClick={onCreateAssignment}
          >
            <FaPlus className="me-2" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-4 border-gray">
          <div className="d-flex align-items-center bg-secondary p-3 ps-2">
            <Grip />
            <FaCaretDown className="me-2" />
            <span className="fw-semibold">ASSIGNMENTS</span>

            <span className="ms-auto d-inline-flex align-items-center gap-3">
              <span className="bg-secondary border rounded-pill px-3 py-1 text-muted">
                40% of Total
              </span>
              <FaPlus />
              <FaEllipsisVertical />
            </span>
          </div>

          <ListGroup className="rounded-0">
            {filtered.map((a: any) => (
              <ListGroupItem
                key={a._id}
                className="wd-assignment-row p-3 ps-1 d-flex align-items-start"
              >
                <Grip />
                <span className="me-2 text-success">
                  <FaRegPenToSquare />
                </span>

                <div className="flex-grow-1">
                  {!a.editing && (
                    <Link
                      href={`/Courses/${cid}/Assignments/${a._id}`}
                      className="text-decoration-none fw-semibold"
                    >
                      {getTitle(a)}
                    </Link>
                  )}

                  {a.editing && (
                    <FormControl
                      className="w-50"
                      value={a.title ?? ""}
                      onChange={(e) =>
                        dispatch(
                          updateAssignment({
                            ...a,
                            title: e.target.value,
                          })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          onUpdateAssignment({ ...a, editing: false });
                        }
                      }}
                    />
                  )}

                  <AssignmentMeta a={a} />
                </div>

                <span className="d-inline-flex align-items-center ms-2 gap-3">
                  <FaPencil
                    className="text-primary"
                    onClick={() => dispatch(editAssignment(a._id))}
                  />
                  <FaTrash
                    className="text-danger"
                    onClick={() => onRemoveAssignment(a._id)}
                  />
                  <GreenCheckmark />
                  <FaEllipsisVertical />
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
