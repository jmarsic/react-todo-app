import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Add new todo!");
      return;
    }

    onAdd({ text });

    setText("");
  };

  return (
    <form className="add-todo" onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Add your new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
