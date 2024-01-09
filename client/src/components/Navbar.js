import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Semantle</h1>
        </Link>
        <Link to="/FAQ/">
          <p>FAQ</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
