import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ todo }) => {
  return (
    <li className="item">
      <p>Description: {todo.description}.</p>
      <p>Deadline: {todo.deadline}.</p>
    </li>
  );
};

export default ToDoItem;
