import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      {/* Navigation Desktop - visible uniquement sur écrans moyens et plus */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            JOHN DOE
          </NavLink>
          
          {/* Bouton burger pour mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu de navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Portfolio"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/MentionsLegales"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  MENTIONS LÉGALES
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
