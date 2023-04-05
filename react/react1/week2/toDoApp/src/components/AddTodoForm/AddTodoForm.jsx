import React, { useState } from "react";

const AddTodoForm = ({ formSubmit }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmit(newTask);
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add">Add you new todo</label>
      <textarea
        name=""
        id="add"
        cols="30"
        rows="10"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></textarea>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodoForm;
