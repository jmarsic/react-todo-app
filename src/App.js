import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "School project" },
    { id: 2, text: "Fix the bike" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <div className="container">
      <Header title="Todo App" />
      <>
        <TodoList todos={todos} onDelete={deleteTodo} />
      </>
    </div>
  );
}

export default App;
