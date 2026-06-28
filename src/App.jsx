import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoFilters } from "./components/TodoFilters";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./styles/App.css";

const App = () => {
  const {
    todos,
    filter,
    setFilter,
    stats,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="app">
      <main className="card">
        <Header stats={stats} />
        <TodoForm onAdd={addTodo} />
        <TodoFilters
          filter={filter}
          onChange={setFilter}
          stats={stats}
          onClearCompleted={clearCompleted}
        />
        <TodoList
          todos={todos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      </main>
    </div>
  );
};

export default App;
