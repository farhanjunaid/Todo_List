import { TodoItem } from "./TodoItem";
import { EmptyState } from "./EmptyState";

export const TodoList = ({ todos, filter, onToggle, onDelete, onUpdate }) => {
  if (todos.length === 0) {
    return <EmptyState filter={filter} />;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};
