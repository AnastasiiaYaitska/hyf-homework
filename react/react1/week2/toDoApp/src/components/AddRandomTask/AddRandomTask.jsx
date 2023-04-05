import React from "react";

const AddRandomTask = ({ addTask }) => {
  return (
    <button type="button" onClick={addTask}>
      Add Random task
    </button>
  );
};

export default AddRandomTask;
