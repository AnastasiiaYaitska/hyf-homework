import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { nanoid } from "nanoid";
import { formattingDate } from "../../Utils";

const FormTodoList = ({ formSubmit }) => {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    if (!deadline) {
      alert("Please choose a date!");
      return;
    }
    const chooseDay = formattingDate(deadline);
    const newTask = {
      description,
      deadline: chooseDay,
      id: nanoid(),
    };
    formSubmit(newTask);
    setDescription("");
    setDeadline(null);
  };

  return (
    <form onSubmit={handlerFormSubmit} className="form">
      <label htmlFor="text">Todo description </label>
      <textarea
        type="textaria"
        id="text"
        cols={50}
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="data-picker">
        <label className="data-picker-label">Deadline </label>
        <DatePicker
          selected={deadline}
          minDate={new Date()}
          placeholderText="Select a date "
          onChange={(date) => {
            setDeadline(date);
          }}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default FormTodoList;

FormTodoList.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
