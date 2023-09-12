import "bootstrap-icons/font/bootstrap-icons.css";

import "../../assets/color.css";

function Header() {
  return (
    <header className="header shadow mb-5">
      <nav className="navbar container navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="bs bi-virus2 rounded-circle icon-color"></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tableview">
                Table view
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
