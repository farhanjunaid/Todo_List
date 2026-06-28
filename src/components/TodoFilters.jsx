const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export const TodoFilters = ({ filter, onChange, stats, onClearCompleted }) => {
  return (
    <div className="todo-filters">
      <div className="todo-filters__group" role="tablist">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={`todo-filters__tab ${
              filter === key ? "todo-filters__tab--active" : ""
            }`}
            onClick={() => onChange(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        className="todo-filters__clear"
        onClick={onClearCompleted}
        disabled={stats.completed === 0}
      >
        Clear completed
      </button>
    </div>
  );
};
