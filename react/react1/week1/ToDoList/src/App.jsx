import { useEffect, useState } from "react";
import toDoList from "./assets/toDoList.json";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState(toDoList);

  return (
    <div className="App">
      <ToDoList toDos={toDos} />
    </div>
  );
}

export default App;
