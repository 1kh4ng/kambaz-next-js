"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ title }: { title: string }) {
  const pathname = usePathname() || "";
  const section = pathname.split("/").pop() ?? "";
  return <>{title} &gt; {section}</>;
}
