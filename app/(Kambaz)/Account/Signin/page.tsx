"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function SigninPage() {
  const router = useRouter();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();         
    router.push("/Dashboard");    
  };

  return (
    <div id="wd-signin" className="p-3" style={{ maxWidth: 420 }}>
      <h2 className="mb-3">Signin</h2>
      <Form className="d-grid gap-2" onSubmit={onSubmit}>
        <Form.Control placeholder="username" className="mb-2" />
        <Form.Control placeholder="password" type="password" className="mb-2" />
        <Button variant="primary" size="lg" type="submit">Signin</Button>
      </Form>
      <div className="mt-3">
        <Link href="/Account/Signup">Signup</Link>
      </div>
    </div>
  );
}
