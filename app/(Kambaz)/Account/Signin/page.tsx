"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer"; // adjust path if yours differs
import * as client from "../client";

export default function SigninPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setError("");
      const user = await client.signin(credentials);
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (e: any) {
      setError("Unable to signin");
    }
  };


  return (
    <div id="wd-signin" className="p-3" style={{ maxWidth: 420 }}>
      <h2 className="mb-3">Signin</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form className="d-grid gap-2" onSubmit={onSubmit}>
        <Form.Control
          placeholder="username"
          className="mb-2"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <Form.Control
          placeholder="password"
          type="password"
          className="mb-2"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button variant="primary" size="lg" type="submit">
          Signin
        </Button>
      </Form>
      <div className="mt-3">
        <Link href="/Account/Signup">Signup</Link>
      </div>
    </div>
  );
}
