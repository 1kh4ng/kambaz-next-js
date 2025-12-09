"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import ModulesControls from "./ModulesControls";
import GreenCheckmark from "./GreenCheckmark";
import { FaGripVertical, FaEllipsisVertical, FaPlus, FaPencil, FaTrash } from "react-icons/fa6";
import { setModules, editModule, updateModule } from "./reducer";
import * as client from "../../client";

const Grip = () => (
  <span className="text-muted d-inline-flex align-items-center me-2">
    <FaGripVertical />
  </span>
);

export default function ModulesPage() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();

  const { modules } = useSelector((state: RootState) => state.modulesReducer);

  const [moduleName, setModuleName] = useState("");

  const fetchModules = async () => {
    if (!cid) return;
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...(modules as any[]), module]));
    setModuleName("");
  };

  const onRemoveModule = async (moduleId: string) => {
    if (!cid) return;
    await client.deleteModule(cid as string, moduleId);
    dispatch(setModules((modules as any[]).filter((m: any) => m._id !== moduleId)));
  };

  const onUpdateModule = async (module: any) => {
    if (!cid) return;
    await client.updateModule(cid as string, module);
    const newModules = (modules as any[]).map((m: any) => (m._id === module._id ? module : m));
    dispatch(setModules(newModules));
  };

  return (
    <div id="wd-modules-page" className="container-fluid">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName} addModule={onCreateModuleForCourse} />
      <br />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {(modules as any[]).map((mod: any) => (
          <ListGroupItem key={mod._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <Grip />
              {!mod.editing && <span>{mod.name}</span>}
              {mod.editing && (
                <FormControl
                  className="w-50"
                  value={mod.name ?? ""}
                  onChange={(e) =>
                    dispatch(
                      updateModule({
                        ...mod,
                        name: e.target.value,
                      })
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({
                        ...mod,
                        editing: false,
                      });
                    }
                  }}
                />
              )}

              <span className="ms-auto d-inline-flex align-items-center">
                <FaPencil className="text-primary me-3" onClick={() => dispatch(editModule(mod._id))} />
                <FaTrash className="text-danger me-3" onClick={() => onRemoveModule(mod._id)} />
                <GreenCheckmark />
                <FaPlus className="ms-3 me-3" />
                <FaEllipsisVertical />
              </span>
            </div>

            <ListGroup className="wd-lessons rounded-0">
              {(mod.lessons ?? []).map((lesson: any, j: number) => (
                <ListGroupItem key={lesson._id ?? j} className="wd-lesson p-3 ps-1 d-flex align-items-center">
                  <Grip />
                  <span className="flex-grow-1">{lesson.name ?? lesson.title ?? lesson}</span>
                  <span className="d-inline-flex align-items-center">
                    <GreenCheckmark />
                    <FaEllipsisVertical />
                  </span>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
