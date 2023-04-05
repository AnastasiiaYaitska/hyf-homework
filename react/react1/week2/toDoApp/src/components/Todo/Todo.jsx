import React, { useState } from "react";
import { Label } from "./Todo.styled";

const Todo = ({ todo, deleteTask }) => {
  const [isCheck, setIsCheck] = useState(false);
  const { id, description } = todo;

  const handleChange = () => {
    setIsCheck(!isCheck);
  };

  return (
    <li>
      {/* Label is styled element. I use library for styled with  js */}
      <Label htmlFor={id} isCheck={isCheck}>
        {description}
      </Label>
      <div>
        <input
          className="checkbox"
          type="checkbox"
          id={id}
          onChange={handleChange}
        />
        <button type="button" onClick={() => deleteTask(id)}>
          Delete task
        </button>
      </div>
    </li>
  );
};

export default Todo;
