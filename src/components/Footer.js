import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Informations de contact */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">John Doe</h5>
            <p className="mb-1">40 rue Laure Diebold</p>
            <p className="mb-1">69009 Lyon, France</p>
            <p className="mb-1">10 20 30 40 50</p>
            <p className="mb-3">john.doe@gmail.com</p>

            {/* Réseaux sociaux */}
            <div className="social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <NavLink to="/" className="text-white text-decoration-none">
                  Accueil
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/Services"
                  className="text-white text-decoration-none"
                >
                  Services
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/Portfolio"
                  className="text-white text-decoration-none"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/Contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/MentionsLegales"
                  className="text-white text-decoration-none"
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mes dernières réalisations */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Fresh Food
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Restaurant Akira
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Espace bien-être
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0 text-muted">
              © 2024 John Doe. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
