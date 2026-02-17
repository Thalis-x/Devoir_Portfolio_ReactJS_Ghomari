import React from 'react';
import { Helmet } from 'react-helmet';

const MentionsLegales = () => {
  return (
    <div>
      {/* Meta tag pour ne pas indexer la page */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales - John Doe</title>
      </Helmet>
      {/* Section Titre */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Mentions légales</h1>
            <div className="ligne mx-auto pb-2 border-bottom border-primary border-5"></div>
          </div>

          {/* Accordéon Bootstrap */}
          <div className="accordion" id="accordionMentionsLegales">
            {/* Accordéon 1 - Éditeur du site */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEditeur">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEditeur"
                  aria-expanded="true"
                  aria-controls="collapseEditeur"
                >
                  Éditeur du site
                </button>
              </h2>
              <div
                id="collapseEditeur"
                className="accordion-collapse collapse show"
                aria-labelledby="headingEditeur"
                data-bs-parent="#accordionMentionsLegales"
              >
                <div className="accordion-body">
                  <h3 className="h5 fw-bold mb-3">John Doe</h3>
                  <p className="mb-1">
                    <i className="bi bi-geo-alt me-2"></i>
                    40 rue Laure Diebold
                  </p>
                  <p className="mb-2">
                    <i className="bi bi-geo-alt me-2" style={{ opacity: 0 }}></i>
                    69009 Lyon, France
                  </p>
                  <p className="mb-2">
                    <i className="bi bi-phone me-2"></i>
                    10 20 30 40 50
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-envelope-at me-2"></i>
                    john.doe@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Accordéon 2 - Hébergeur */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHebergeur">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHebergeur"
                  aria-expanded="false"
                  aria-controls="collapseHebergeur"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseHebergeur"
                className="accordion-collapse collapse"
                aria-labelledby="headingHebergeur"
                data-bs-parent="#accordionMentionsLegales"
              >
                <div className="accordion-body">
                  <h3 className="h5 fw-bold mb-3">alwaysdata</h3>
                  <p className="mb-2">
                    91 Rue du Faubourg Saint-Honoré, 75008 Paris
                  </p>
                  <p className="mb-0">
                    <i className="bi bi-globe me-2"></i>
                    <a
                      href="https://www.alwaysdata.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      www.alwaysdata.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Accordéon 3 - Crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCredits">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCredits"
                  aria-expanded="false"
                  aria-controls="collapseCredits"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseCredits"
                className="accordion-collapse collapse"
                aria-labelledby="headingCredits"
                data-bs-parent="#accordionMentionsLegales"
              >
                <div className="accordion-body">
                  <h3 className="h5 fw-bold mb-3">Crédits</h3>
                  <p className="mb-2">
                    Ce site a été réalisé par John Doe, étudiant au{' '}
                    <a
                      href="https://www.centre-europeen-formation.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Centre Européen de formation
                    </a>
                    .
                  </p>
                  <p className="mb-2">
                    Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{' '}
                    <a
                      href="https://pixabay.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Pixabay
                    </a>
                    .
                  </p>
                  <p className="mb-0">
                    La favicon de ce site a été fournie par{' '}
                    <a
                      href="https://www.flaticon.com/free-icons/john-doe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      John doe Icons erstellt von Freepik - Flaticon
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MentionsLegales;