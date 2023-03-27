import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default ToDoList;
