import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex align-items-center p-0">
      <div className="container-fluid mx-auto w-75">
        <a className="navbar-brand m-4" href="#">
          <img
            src="https://raw.githubusercontent.com/Grathienbeto/insure/b5d6f3d4b7da4de0df98fe5f549a9cc28916b729/challenge/images/logo.svg"
            alt="Insure Logo"
          />
        </a>

        <button
          className="navbar-toggler m-4 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="menuBtn"
        >
          <span className="toggle-icon"></span>
          <span className="toggle-icon-hidden-y"></span>
          <span className="toggle-icon-hidden-x"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end align-items-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOW WE WORK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ACCOUNT
              </a>
            </li>
            <li className="nav-item" id="plans">
              <a className="nav-link" href="#">
                VIEW PLANS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
