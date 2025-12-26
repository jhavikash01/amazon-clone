import { Link } from "react-router-dom";
//import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">Amazon</Link>

      <div className="nav">
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Header;
