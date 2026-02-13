import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="/images/favicon.png" alt="profil-pic" />
          <h3>John Doe</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/MentionsLegales" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Mentions légales</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
