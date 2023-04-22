import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./Utils";
import Container from "./components/Container/Container";
import FormTodoList from "./components/FormTodoList/FormTodoList";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await fetchData();
        setTodos(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  console.log(todos);

  const formSubmit = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  const handlerDelete = (id) => {
    setTodos(() => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  const handlerUpdate = (newTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodos(() => {
      return [...newTodos];
    });
  };

  return (
    <Container>
      <Header title="Todo list" />
      <FormTodoList formSubmit={formSubmit} />
      <TodoList
        handlerDelete={handlerDelete}
        todos={todos}
        updateTodo={handlerUpdate}
      />
    </Container>
    // <div className="App">

    // </div>
  );
}

export default App;
