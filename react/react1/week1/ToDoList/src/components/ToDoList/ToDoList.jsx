import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

const ToDoList = ({ toDos }) => {
  return (
    <ol>
      {toDos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} />
      ))}
    </ol>
  );
};

export default ToDoList;
