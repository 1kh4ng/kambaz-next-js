import ModulesContent from "./Content";

export default function CourseModules({ params }: { params: { cid: string } }) {
  return <ModulesContent cid={params.cid} />;
}
