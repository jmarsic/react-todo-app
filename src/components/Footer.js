import Button from "./Button";

const Footer = ({ todos, onClick }) => {
  return (
    <footer className="footer">
      {todos.length > 0 ? (
        <h4>You have {todos.length} pending tasks</h4>
      ) : (
        "No pending tasks!"
      )}
      <Button label={todos.length > 0 && "Clear all"} onClick={onClick} />
    </footer>
  );
};

export default Footer;
