import React from "react";
import ProfileContext from "../context/profile/profileContext";
import AuthContext from "../context/auth/authContext";

export default function Header() {
  const {profile} = React.useContext(ProfileContext);
  const {logout} = React.useContext(AuthContext);

  const handleLogout = () => logout();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-bullseye fa-3x"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link pe-5" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-5" href="#">
                My Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
          <div className="log fw-semibold text-end">
            <div className="fs-xs text-uppercase">Logged in as</div>
            <p className="fs-sm text-uppercase mb-0 text-white">{profile?.firstName || ""}</p>
          </div>
          <a href="" onClick={handleLogout} className="btn dash-btn clear-btn ms-3">
            Log out
          </a>
        </div>
      </div>
    </nav>
  );
}
