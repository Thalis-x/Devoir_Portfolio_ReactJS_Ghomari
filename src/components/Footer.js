import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-2"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
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
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Fresh Food
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Restaurant Akira
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Espace bien-être
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  SEO
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Création d'une API
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/portfolio"
                  className="text-white text-decoration-none"
                >
                  Maquette d'un site web
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright comment l'appliquer
        <div className="row mt-3">
          <div className="col text-center">
            <p className="mb-0">
              © 2024 John Doe. Tous droits réservés.
            </p>
          </div>
        </div>  */}
      </div>
    </footer>
  );
};

export default Footer;
