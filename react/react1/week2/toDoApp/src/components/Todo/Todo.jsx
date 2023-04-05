import React, { useState } from "react";

const Todo = ({ todo, deleteTask }) => {
  const [isCheck, setIsCheck] = useState(false);
  const { id, description } = todo;

  const handleChange = () => {
    setIsCheck(!isCheck);
    console.log(isCheck);
  };
  return (
    <li>
      <label htmlFor={id} className="label">
        {description}
      </label>
      <input
        className="checkbox"
        type="checkbox"
        // checked={isCheck}
        id={id}
        onChange={handleChange}
      />
      <button type="button" onClick={() => deleteTask(id)}>
        Delete task
      </button>
    </li>
  );
};

export default Todo;
