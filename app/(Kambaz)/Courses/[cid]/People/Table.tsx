"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";

export default function PeopleTable({
  users = [],
  fetchUsers,
}: {
  users?: any[];
  fetchUsers: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const openDetails = (uid: string) => {
    setShowUserId(uid);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setShowUserId(null);
    fetchUsers();
  };

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td
                className="wd-full-name text-nowrap"
                onClick={() => openDetails(user._id)}
              >
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-email">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDetails && showUserId && (
        <PeopleDetails uid={showUserId} onClose={closeDetails} />
      )}
    </div>
  );
}
