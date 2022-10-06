import Button from "./Button";

const Header = ({ title, toggleForm, showForm }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button label={showForm ? 'Close' : "Add todo"} onClick={toggleForm} />
    </header>
  );
};

export default Header;
