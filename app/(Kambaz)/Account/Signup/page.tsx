"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function SignupPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setError("");

      if (!user.username || !user.password) {
        setError("Username and password required");
        return;
      }

      const created = await client.signup(user);
      dispatch(setCurrentUser(created));
      router.push("/Dashboard");
    } catch (e: any) {
      setError("Unable to signup");
    }
  };

  return (
    <div id="wd-signup" className="p-3" style={{ maxWidth: 420 }}>
      <h2 className="mb-3">Signup</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <Form className="d-grid gap-2" onSubmit={onSubmit}>
        <Form.Control
          placeholder="username"
          className="mb-2"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <Form.Control
          placeholder="password"
          type="password"
          className="mb-2"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button variant="primary" size="lg" type="submit">
          Signup
        </Button>
      </Form>

      <div className="mt-3">
        <Link href="/Account/Signin">Signin</Link>
      </div>
    </div>
  );
}
