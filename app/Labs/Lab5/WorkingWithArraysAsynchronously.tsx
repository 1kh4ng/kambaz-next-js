"use client";
import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
import { FormControl } from "react-bootstrap";

import * as client from "./client";
export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [error, setError] = useState("");
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createTodo = async () => {
    const newTodos = await client.createTodo();
    setTodos(newTodos);
  };
  const deleteTodo = async (todo: any) => {
    try {
        await client.deleteTodo(todo);
        setTodos(todos.filter((t) => t.id !== todo.id));
        setError("");
    } catch (e: any) {
        setError("Unable to delete todo");
    }
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
        (t) => (t.id === todo.id ? { ...todo, editing: true } : t)
  );
    setTodos(updatedTodos);
  };
  const updateTodo = async (todo: any) => {
    try {
        await client.updateTodo(todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        setError("");
    } catch (e: any) {
        setError("Unable to update todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <h4>Todos</h4>
      <h4>Todos <FaPlus onClick={createTodo}
        className="text-success float-end" id="wd-create-todo"/></h4>
      <h4>
        Todos
        <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" />
        <FaPlusCircle onClick={postNewTodo} className="text-primary float-end fs-3 me-2" />
      </h4>
        <ListGroup>
        {todos.map((todo: any) => (
            <ListGroupItem key={todo.id}>
            <FaTrash
                onClick={() => removeTodo(todo)}
                className="text-danger float-end mt-1"
                id="wd-remove-todo"
            />
            <TiDelete
                onClick={() => deleteTodo(todo)}
                className="text-danger float-end me-2 fs-3"
                id="wd-delete-todo"
            />
            <FaPencil
                onClick={() => editTodo(todo)}
                className="text-primary float-end me-2 mt-1"
            />
            <input
                type="checkbox"
                className="form-check-input me-2 float-start"
                defaultChecked={todo.completed}
                onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            {!todo.editing ? (
                <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
                >
                {todo.title}{" "}
                </span>
            ) : (
                <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                    }
                }}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
                />
            )}
            </ListGroupItem>
        ))}
        </ListGroup>
      <hr />
    </div>
  );
}
