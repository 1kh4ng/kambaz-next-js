"use client";

import { Button } from "react-bootstrap";
import {
  FaBan, FaCircleCheck, FaFileImport, FaBoxOpen, FaHouse,
  FaChartSimple, FaBullhorn, FaBell
} from "react-icons/fa6";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="h5 mb-3">Course Status</h2>

      <div className="d-flex gap-2 mb-3">
        <Button variant="secondary" className="px-3">
          <FaBan className="me-2" /> Unpublish
        </Button>
        <Button variant="success" className="px-3">
          <FaCircleCheck className="me-2" /> Publish
        </Button>
      </div>

      <div className="d-grid gap-2">
        <Button variant="secondary" className="text-start">
          <FaFileImport className="me-2" /> Import Existing Content
        </Button>
        <Button variant="secondary" className="text-start">
          <FaBoxOpen className="me-2" /> Import from Commons
        </Button>
        <Button variant="secondary" className="text-start">
          <FaHouse className="me-2" /> Choose Home Page
        </Button>
        <Button variant="secondary" className="text-start">
          <FaChartSimple className="me-2" /> View Course Screen
        </Button>
        <Button variant="secondary" className="text-start">
          <FaBullhorn className="me-2" /> New Announcement
        </Button>
        <Button variant="secondary" className="text-start">
          <FaChartSimple className="me-2" /> New Analytics
        </Button>
        <Button variant="secondary" className="text-start">
          <FaBell className="me-2" /> View Course Notifications
        </Button>
      </div>
    </div>
  );
}
