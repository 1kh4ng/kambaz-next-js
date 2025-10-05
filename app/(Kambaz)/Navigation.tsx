"use client";

import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = (usePathname() || "").toLowerCase();

  const isActive = (href: string) => {
    const h = href.toLowerCase();
    return pathname === h || pathname.startsWith(h + "/");
  };

  const itemCls = (active: boolean) =>
    active ? "bg-white text-danger border-0" : "bg-black text-white border-0";
  const linkCls = (active: boolean) =>
    `${active ? "text-danger" : "text-white"} text-decoration-none d-flex flex-column align-items-center`;
  const iconCls = (active: boolean) =>
    "fs-3 mb-1" + (active ? "" : " text-danger");

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem className="bg-black border-0">
        <Link href="https://www.northeastern.edu" target="_blank" className="text-decoration-none">
          <img src="/images/northeastern.jpg" alt="Northeastern University" style={{ width: 80 }} />
        </Link>
      </ListGroupItem>

      <ListGroupItem className="bg-black text-white border-0">
        <Link href="/Account" className="text-white text-decoration-none d-flex flex-column align-items-center">
          <FaRegCircleUser className="fs-3 mb-1 text-white" />
          <span className="small">Account</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemCls(isActive("/Dashboard") || pathname === "/")}>
        <Link href="/Dashboard" className={linkCls(isActive("/Dashboard") || pathname === "/")}>
          <AiOutlineDashboard className={iconCls(isActive("/Dashboard") || pathname === "/")} />
          <span className="small">Dashboard</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemCls(isActive("/Courses"))}>
        <Link href="/Courses" className={linkCls(isActive("/Courses"))}>
          <LiaBookSolid className={iconCls(isActive("/Courses"))} />
          <span className="small">Courses</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemCls(isActive("/Calendar"))}>
        <Link href="/Calendar" className={linkCls(isActive("/Calendar"))}>
          <IoCalendarOutline className={iconCls(isActive("/Calendar"))} />
          <span className="small">Calendar</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemCls(isActive("/Inbox"))}>
        <Link href="/Inbox" className={linkCls(isActive("/Inbox"))}>
          <FaInbox className={iconCls(isActive("/Inbox"))} />
          <span className="small">Inbox</span>
        </Link>
      </ListGroupItem>

      <ListGroupItem className={itemCls(isActive("/Labs"))}>
        <Link href="/Labs" className={linkCls(isActive("/Labs"))}>
          <LiaCogSolid className={iconCls(isActive("/Labs"))} />
          <span className="small">Labs</span>
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
