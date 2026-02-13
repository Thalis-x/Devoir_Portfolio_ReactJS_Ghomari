import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="ad">
        <div className="adContent">
          <h3>John Doe</h3>
          <p>
            40 rue Laure Diebold <br />
            69009 Lyon, France <br />
            10 20 30 40 50
            <br />
            john.doe@gmail.com
          </p>
        </div>
      </div>

      <div className="footer">
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
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
