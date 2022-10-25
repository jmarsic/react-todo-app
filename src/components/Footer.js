import Button from "./Button";

const Footer = ({ todos, onClick }) => {
  return (
    <footer className="footer">
      <h4>
        {todos.length > 0
          ? `You have ${todos.length} pending tasks`
          : "No pending tasks!"}
      </h4>
      {todos.length > 0 && <Button label="Clear all" onClick={onClick} />}
    </footer>
  );
};

export default Footer;
