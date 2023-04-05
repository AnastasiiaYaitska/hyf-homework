import React, { useState } from "react";
import "./App.css";
// import AddRandomTask from "./components/AddRandomTask/AddRandomTask";
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

  // const addRandomTask = () => {
  //   setTodoList((prevState) => {
  //     return [
  //       {
  //         id: nanoid(),
  //         description: "Random task",
  //       },
  //       ...prevState,
  //     ];
  //   });
  // };
  //If you uncomment all comments you will see extra button for adding random task. It is functionality from exercise , but I add some form. Hope it is ok

  const deleteTask = (id) => {
    setTodoList(() => {
      return todoList.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className="App">
      <Header title={"Todo Tasks"} />
      <AddTodoForm formSubmit={formSubmit} />
      {/* <AddRandomTask addTask={addRandomTask} /> */}
      <TodoList todos={todoList} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
