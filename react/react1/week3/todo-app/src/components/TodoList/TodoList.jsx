import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ handlerDelete, todos, updateTodo }) => {
  return (
    <ul>
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handlerDelete={handlerDelete}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <li>Todo list is empty</li>
      )}
    </ul>
  );
};

export default TodoList;

TodoList.propTypes = {
  handlerDelete: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  updateTodo: PropTypes.func.isRequired,
};
