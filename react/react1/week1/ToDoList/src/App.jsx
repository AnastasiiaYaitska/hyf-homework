import React from "react";
import { useState } from "react";
import toDoList from "./assets/toDoList.json";
import ToDoList from "./components/ToDoList/ToDoList";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState(toDoList);

  return (
    <div className="App">
      <h1>Todo List </h1>
      <ToDoList toDos={toDos} />
    </div>
  );
}

export default App;
