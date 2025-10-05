"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "../Modules/ModulesControls";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaGripVertical, FaEllipsisVertical, FaPlus } from "react-icons/fa6";
import CourseStatus from "../Home/Status";

const Grip = () => (
  <span className="text-muted d-inline-flex align-items-center me-2">
    <FaGripVertical />
  </span>
);

export default function CourseHomePage() {
  return (
    <div id="wd-course-home" className="container-fluid">
      <div className="row">

        <div className="col-12 col-xl-9 mb-3">
          <ModulesControls />
          <br /><br /><br /><br />

          <ListGroup className="rounded-0" id="wd-modules">
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <Grip />
                <span>Week 1</span>
                <span className="ms-auto d-inline-flex align-items-center">
                  <GreenCheckmark />
                  <FaPlus className="ms-3 me-3" />
                  <FaEllipsisVertical />
                </span>
              </div>

              <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <Grip />
                  <span className="flex-grow-1">LEARNING OBJECTIVES</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <Grip />
                  <span className="flex-grow-1">Introduction to the course</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <Grip />
                  <span className="flex-grow-1">Learn what is Web Development</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <Grip />
                <span>Week 2</span>
                <span className="ms-auto d-inline-flex align-items-center">
                  <GreenCheckmark />
                  <FaPlus className="ms-3 me-3" />
                  <FaEllipsisVertical />
                </span>
              </div>
              <ListGroup className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <Grip />
                  <span className="flex-grow-1">LEARNING OBJECTIVES</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
                <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <Grip />
                  <span className="flex-grow-1">More cool stuff…</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </div>

        <div className="col-12 col-xl-3 d-none d-xl-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
