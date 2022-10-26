import { Link, NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link className="nav-link text-light " aria-current="page" to="/">
                  Docs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/tutorial">
                  Tutorial
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/community">
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
