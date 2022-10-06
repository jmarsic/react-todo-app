import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish School project" },
    { id: 2, text: "Fix the bike" },
    { id: 3, text: "Buy a TV" },
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const deleteTodos = () => {
    setTodos([]);
  };

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="container">
      <Header
        title="Todo App"
        toggleForm={toggleAddForm}
        showForm={showAddForm}
      />
      {showAddForm && <AddTodo onAdd={addTodo} />}
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={deleteTodo} />
      ) : (
        "No todos"
      )}
      <Footer todos={todos} onClick={deleteTodos} />
    </div>
  );
}

export default App;
