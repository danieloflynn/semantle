import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="Navbar">
        <Link className="title" to="/">
          <h1 className="nav-link">Semantle</h1>
        </Link>
        <ul>
          <Link to="/FAQ/">
            <p className="nav-link">FAQ</p>
          </Link>
          <a href="https://github.com/danieloflynn">
            <p className="nav-link">GitHub</p>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
