import React from 'react';

const Services = () => {
  return (
    <div>
      {/* Section Hero - Bannière bleue */}
      <section
        className="hero-banner d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url(/images/banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></div>
      </section>

      {/* Section Titre */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Mon offre de services</h1>
            <p className="text-muted mb-4">
              Voici les prestations sur lesquelles je peux intervenir
            </p>
            <div
              className="ligne mx-auto pb-2 border-bottom border-primary border-5 "
              //   Ligne Bleu qui souligne
              //   Deux autres façons de faire la ligne, la deuxieme effet degradé.
              // backgroundColor: '#0d6efd', // couleur primaire Bootstrap
              // background: 'linear-gradient(to right, transparent, #0d6efd, transparent)'
              //   style={{
              //     width: '450px',
              //     height: '3px',
              //   }}
            ></div>
          </div>

          {/* Cards Services */}
          <div className="row g-4 mt-4">
            {/* Card 1 - UX Design */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-4">
                    <i className="fas fa-pen-nib fa-3x text-primary"></i>
                  </div>
                  <h3 className="card-title h4 mb-3">UX Design</h3>
                  <p className="card-text text-muted">
                    L'UX Design est une discipline qui consiste à concevoir des
                    produits (sites web, applications mobiles, logiciels, objets
                    connectés, etc.) en plaçant l'utilisateur au centre des
                    préoccupations. L'objectif est de rendre l'expérience
                    utilisateur la plus fluide et agréable possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Développement web */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-4">
                    <i className="fas fa-code fa-3x text-primary"></i>
                  </div>
                  <h3 className="card-title h4 mb-3">Développement web</h3>
                  <p className="card-text text-muted">
                    Le développement de sites web consiste à créer des sites
                    internet en utilisant des langages de programmation (HTML,
                    CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                    React, Angular, etc.).
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Référencement */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="service-icon mb-4">
                    <i className="fas fa-search fa-3x text-primary"></i>
                  </div>
                  <h3 className="card-title h4 mb-3">Référencement</h3>
                  <p className="card-text text-muted">
                    Le référencement naturel (SEO) est une technique qui
                    consiste à optimiser un site web pour le faire remonter dans
                    les résultats des moteurs de recherche (Google, Bing, Yahoo,
                    etc.). L'objectif est d'attirer un maximum de visiteurs
                    qualifiés sur le site.
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

export default Services;
