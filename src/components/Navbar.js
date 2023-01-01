import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p>
        <Link to={"/"}>Homepage</Link>
      </p>
      <p>
        <Link to={"/discover"}>Discoverypage</Link>
      </p>
      <p>
        <Link to={"/login"}>Login</Link>
      </p>
      <p>
        <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default Navbar;
