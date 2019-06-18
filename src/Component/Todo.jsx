import React from "react";
import { Component } from "react";
import { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button className="compeletebtn" onClick={() => completeTodo(index)}>
          {" "}
          {todo.isCompleted ? "Not Complete ?" : "Complete"}{" "}
        </button>
        <button className="deletebtn" onClick={() => removeTodo(index)}>
          {" "}
          X{" "}
        </button>
      </div>
    </div>
  );
}

export default Todo;
