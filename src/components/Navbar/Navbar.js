import React from "react";
import { Link, useLocation} from "react-router-dom";
import "./style.css";

function Navbar() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light d-flex justify-content-between">
        <Link id="Creator" className="navbar-brand" to="/">
          Samya Fiki
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="far fa-gem"></i>
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={location.pathname === "/About" ? "nav-link active" : "nav-link"} to="/About">
              Home <nav className="sr-only">(current)</nav>
            </Link>
            <Link className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"} to="/Contact">
              Contact
            </Link>
            <Link className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"} to="/Portfolio">
              Portfolio
            </Link>
          </div>
        </nav>
      </nav>
    </div>
  );
}
export default Navbar;
