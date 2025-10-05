"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = (usePathname() || "").toLowerCase();

  const isActive = (href: string) =>
    pathname === href.toLowerCase() ||
    pathname.startsWith(href.toLowerCase() + "/");

  const itemCls = (active: boolean) =>
    `d-block ps-3 py-2 text-decoration-none ${
      active
        ? "text-dark fw-semibold border-start border-4 border-dark"
        : "text-danger"
    }`;

  return (
    <nav id="wd-account-nav" className="pt-2">
      <Link href="/Account/Signin" className={itemCls(isActive("/Account/Signin"))}>
        Signin
      </Link>
      <Link href="/Account/Signup" className={itemCls(isActive("/Account/Signup"))}>
        Signup
      </Link>
      <Link href="/Account/Profile" className={itemCls(isActive("/Account/Profile"))}>
        Profile
      </Link>
    </nav>
  );
}
