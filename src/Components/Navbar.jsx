import "./Navbar.css";

const Navbar = ({ onShow }) => {
  return (
    <nav className="navbar">
      <span className="navbar-title">API Hunter</span>
      <button onClick={onShow}>Show Employees</button>
    </nav>
  );
};

export default Navbar;