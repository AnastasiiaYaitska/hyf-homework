const ToDoItem = ({ todo }) => {
  return (
    <li>
      <p>{todo.description}</p>
      <p>{todo.deadline}</p>
    </li>
  );
};

export default ToDoItem;
