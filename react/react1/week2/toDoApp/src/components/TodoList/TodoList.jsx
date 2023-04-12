import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, deleteTask }) => {
  return (
    <ul>
      {todos.length ? (
        todos.map((todo) => (
          <Todo key={todo.id} deleteTask={deleteTask} todo={todo} />
        ))
      ) : (
        <p>You todo is empty</p>
      )}
    </ul>
  );
};

export default TodoList;
