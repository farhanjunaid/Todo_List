import { useState } from "react";
import {
  faCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditTodoForm } from "./EditTodoForm";

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (id, title) => {
    onUpdate(id, title);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="todo-item todo-item--editing">
        <EditTodoForm
          todo={todo}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      </li>
    );
  }

  return (
    <li className={`todo-item ${todo.completed ? "todo-item--done" : ""}`}>
      <button
        className="todo-item__checkbox"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Mark as active" : "Mark as completed"}
      >
        {todo.completed && <FontAwesomeIcon icon={faCheck} />}
      </button>

      <span className="todo-item__title" onClick={() => onToggle(todo.id)}>
        {todo.title}
      </span>

      <div className="todo-item__actions">
        <button
          className="icon-button icon-button--edit"
          onClick={() => setIsEditing(true)}
          title="Edit"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="icon-button icon-button--delete"
          onClick={() => onDelete(todo.id)}
          title="Delete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};
