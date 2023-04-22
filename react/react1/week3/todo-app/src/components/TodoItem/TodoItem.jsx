import { useState } from "react";
import PropTypes from "prop-types";
import WrapperTodo from "../WrapperTodo/WrapperTodo";

const TodoItem = ({ todo, handlerDelete, updateTodo }) => {
  const { id, description, deadline } = todo;
  //   console.log(typeof id);
  //   const normalizeIdType = typeof id === "string" ? id : toString(id);
  //   console.log(typeof normalizeIdType);

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
    <WrapperTodo>
      <>
        <div className="todo-description-wrapper">
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
        </div>

        <div className="btn-wrapper">
          <button
            type="button"
            className="btn-delete"
            onClick={() => handlerDelete(id)}
          >
            Delete task
          </button>
          {!isUpdate ? (
            <button
              type="button"
              className="btn-update"
              onClick={() => handlerIsUpdate()}
            >
              Edit
            </button>
          ) : (
            <button type="button" onClick={() => handlerUpdate()}>
              Update
            </button>
          )}
        </div>
      </>
    </WrapperTodo>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
  handlerDelete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};
