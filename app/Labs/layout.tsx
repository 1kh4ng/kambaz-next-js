import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div id="wd-labs" className="container">
      <TOC />
      <hr />
      {children}
    </div>
  );
}