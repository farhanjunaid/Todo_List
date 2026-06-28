import { useState } from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EditTodoForm = ({ todo, onSave, onCancel }) => {
  const [value, setValue] = useState(todo.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(todo.id, value);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        className="edit-form__input"
        type="text"
        value={value}
        autoFocus
        onChange={(event) => setValue(event.target.value)}
        aria-label="Edit task"
      />
      <div className="edit-form__actions">
        <button className="icon-button icon-button--save" type="submit" title="Save">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className="icon-button icon-button--cancel"
          type="button"
          title="Cancel"
          onClick={onCancel}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </form>
  );
};
