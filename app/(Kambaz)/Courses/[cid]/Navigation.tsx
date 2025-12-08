"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const pathname = usePathname() || "";

  return (
    <Nav variant="pills" className="flex-column" id="wd-account-nav">
      <NavLink
        as={Link}
        href={`/Account/Signin`}
        active={pathname.endsWith("Signin")}
      >
        Signin
      </NavLink>
      <NavLink
        as={Link}
        href={`/Account/Signup`}
        active={pathname.endsWith("Signup")}
      >
        Signup
      </NavLink>
      <NavLink
        as={Link}
        href={`/Account/Profile`}
        active={pathname.endsWith("Profile")}
      >
        Profile
      </NavLink>

      {currentUser && currentUser.role === "ADMIN" && (
        <NavLink
          as={Link}
          href={`/Account/Users`}
          active={pathname.endsWith("Users")}
        >
          Users
        </NavLink>
      )}
    </Nav>
  );
}
