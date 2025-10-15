"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import GreenCheckmark from "./GreenCheckmark";
import { FaGripVertical, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import modules from "@/app/data/modules.json";

type Module = {
  course: number;
  title: string;
  lessons: string[];
};

const Grip = () => (
  <span className="text-muted d-inline-flex align-items-center me-2">
    <FaGripVertical />
  </span>
);

export default function ModulesPage() {
  const { cid } = useParams<{ cid: string }>();
  const courseModules = (modules as Module[]).filter(
    (m) => String(m.course) === cid
  );

  return (
    <div id="wd-modules-page" className="container-fluid">
      <ModulesControls />
      <br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        {courseModules.map((mod, i) => (
          <ListGroupItem key={i} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <Grip />
              <span>{mod.title}</span>
              <span className="ms-auto d-inline-flex align-items-center">
                <GreenCheckmark />
                <FaPlus className="ms-3 me-3" />
                <FaEllipsisVertical />
              </span>
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {mod.lessons.map((lesson, j) => (
                <ListGroupItem
                  key={j}
                  className="wd-lesson p-3 ps-1 d-flex align-items-center"
                >
                  <Grip />
                  <span className="flex-grow-1">{lesson}</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
