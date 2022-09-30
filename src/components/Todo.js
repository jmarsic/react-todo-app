import { FaTimes } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="todo">
      <h3>
        {todo.text}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(todo.id)} />
      </h3>
    </div>
  );
};

export default Todo;
