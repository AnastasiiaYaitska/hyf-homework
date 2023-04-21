import { useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, handlerDelete, updateTodo }) => {
  const { id, description, deadline } = todo;

  const [isCheck, setIsCheck] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(description);

  const handleChange = () => {
    setIsCheck(!isCheck);
  };

  const handlerUpdate = () => {
    const newTask = { id, deadline, description: updatedTodo };
    updateTodo(newTask);
    handlerIsUpdate();
  };

  const handlerIsUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <li>
      {isUpdate ? (
        <input
          type="text"
          value={updatedTodo}
          onChange={(e) => {
            setUpdatedTodo(e.target.value);
          }}
        />
      ) : (
        <p className={isCheck ? "done" : "undone"}>{description}</p>
      )}
      <p className={isCheck ? "done" : "undone"}>{deadline}</p>
      <input type="checkbox" onChange={handleChange} />
      <button type="button" onClick={() => handlerDelete(id)}>
        Delete task
      </button>
      {!isUpdate ? (
        <button type="button" onClick={() => handlerIsUpdate()}>
          Edit
        </button>
      ) : (
        <button type="button" onClick={() => handlerUpdate()}>
          Update
        </button>
      )}
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  handlerDelete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};
