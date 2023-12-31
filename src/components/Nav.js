import React from "react";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#055160" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="disabilityCheck">
                Disability Check
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-light" href="#">
                Ownership History
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
