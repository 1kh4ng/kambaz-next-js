"use client";

import { Form, Button } from "react-bootstrap";

export default function ProfilePage() {
  return (
    <div id="wd-profile" className="p-3" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">Profile</h2>
      <Form className="d-grid gap-2">
        <Form.Control defaultValue="alice" />
        <Form.Control defaultValue="123" type="password" />
        <Form.Control defaultValue="Alice" />
        <Form.Control defaultValue="Wonderland" />
        <Form.Control placeholder="mm/dd/yyyy" type="date" />
        <Form.Control defaultValue="alice@wonderland.com" type="email" />
        <Form.Control defaultValue="User" />

        <Button variant="danger" size="lg" className="mt-2">Signout</Button>
      </Form>
    </div>
  );
}
