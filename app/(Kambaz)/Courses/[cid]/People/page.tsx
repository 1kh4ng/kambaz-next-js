"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PeopleTable from "./Table";
import * as client from "../../client";

export default function PeoplePage() {
  const { cid } = useParams<{ cid: string }>();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(cid);
    setUsers(users);
  };

  useEffect(() => {
    if (cid) fetchUsers();
  }, [cid]);

  return (
    <div id="wd-people" className="container-fluid">
      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 me-3" style={{ maxWidth: 480 }}>
          <InputGroup>
            <InputGroup.Text className="bg-white">
              <FaMagnifyingGlass />
            </InputGroup.Text>
            <FormControl placeholder="Search..." />
          </InputGroup>
        </div>

        <div className="ms-auto">
          <Button variant="danger" size="lg">
            + People
          </Button>
        </div>
      </div>

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
