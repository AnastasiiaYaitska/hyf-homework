import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";
import todos from "./assets/todos.json";
import { nanoid } from "nanoid";

function App() {
  const [todoList, setTodoList] = useState(todos);

  const formSubmit = (todo) => {
    if (!todo.trim()) {
      return;
    }
    const newTodo = {
      id: nanoid(),
      description: todo,
    };
    setTodoList((prevState) => {
      return [newTodo, ...prevState];
    });
  };

  const deleteTask = (id) => {
    setTodoList(() => {
      return todoList.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className="App">
      <Header title={"Todo Tasks"} />
      <AddTodoForm formSubmit={formSubmit} />
      <TodoList todos={todoList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
