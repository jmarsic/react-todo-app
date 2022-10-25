import { FaTimes } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <h3>{todo.text}</h3>
      <FaTimes style={{ color: "red" }} onClick={() => onDelete(todo.id)} />
    </div>
  );
};

export default Todo;
