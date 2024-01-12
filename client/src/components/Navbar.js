import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="Navbar">
        <Link className="title" to="/">
          <h1 id="semantle">Semantle</h1>
        </Link>
        <ul>
          <Link to="/FAQ/">
            <p className="nav-link">FAQ</p>
          </Link>
          <a href="https://github.com/danieloflynn">
            <i
              className="fa fa-github"
              style={{
                "font-size": "30px",
                color: "#eae2b7",
                margin: "5px 20px",
              }}
            ></i>
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
