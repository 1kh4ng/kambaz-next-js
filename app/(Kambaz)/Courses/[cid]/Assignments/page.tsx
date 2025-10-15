"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
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
} from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import assignments from "@/app/data/assignments.json";

type AssignmentItem = {
  slug: string;
  title: string;
  notAvailableUntil?: string;
  due: string;
  pts: number;
};
type AssignmentGroup = {
  course: number;
  group: string;
  weight: string;
  items: AssignmentItem[];
};

const Grip = () => (
  <span className="wd-grip text-muted d-inline-flex align-items-center me-2">
    <FaGripVertical />
  </span>
);

const AssignmentMeta = ({
  notAvailableUntil,
  due,
  pts,
}: {
  notAvailableUntil?: string;
  due: string;
  pts: number;
}) => (
  <>
    <div className="small">
      <span className="text-danger">Multiple Modules</span>
      <span className="mx-2">|</span>
      <span className="text-muted">
        Not available until {notAvailableUntil ?? "TBD"}
      </span>
    </div>
    <div className="small text-muted">
      <span className="fw-semibold">Due</span> <span>{due}</span>
      <span className="mx-2">|</span>
      <span>{pts} pts</span>
    </div>
  </>
);

export default function AssignmentsPage() {
  const { cid } = useParams<{ cid: string }>();
  const group = (assignments as AssignmentGroup[]).find(
    (g) => String(g.course) === cid
  );

  return (
    <div id="wd-assignments" className="container-fluid">
      {/* top controls */}
      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 me-3" style={{ maxWidth: 480 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <FaMagnifyingGlass />
            </InputGroup.Text>
            <FormControl placeholder="Search..." />
          </InputGroup>
        </div>

        <div className="ms-auto d-flex gap-2">
          <Button variant="secondary" size="lg" className="text-nowrap">
            <FaPlus className="me-2" /> Group
          </Button>
          <Button variant="danger" size="lg" className="text-nowrap">
            <FaPlus className="me-2" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-4 border-gray">
          <div className="d-flex align-items-center bg-secondary p-3 ps-2">
            <Grip />
            <FaCaretDown className="me-2" />
            <span className="fw-semibold">{group?.group ?? "ASSIGNMENTS"}</span>

            <span className="ms-auto d-inline-flex align-items-center gap-3">
              <span className="bg-secondary border rounded-pill px-3 py-1 text-muted">
                {group?.weight ?? "40% of Total"}
              </span>
              <FaPlus />
              <FaEllipsisVertical />
            </span>
          </div>

          <ListGroup className="rounded-0">
            {(group?.items ?? []).map((a) => (
              <ListGroupItem
                key={a.slug}
                className="wd-assignment-row p-3 ps-1 d-flex align-items-start"
              >
                <Grip />
                <span className="me-2 text-success">
                  <FaRegPenToSquare />
                </span>

                <div className="flex-grow-1">
                  <Link
                    href={`/Courses/${cid}/Assignments/${a.slug}`}
                    className="text-decoration-none fw-semibold"
                  >
                    {a.title}
                  </Link>
                  <AssignmentMeta
                    notAvailableUntil={a.notAvailableUntil}
                    due={a.due}
                    pts={a.pts}
                  />
                </div>

                <span className="d-inline-flex align-items-center ms-2">
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
