import React from 'react';

const Portfolio = () => {
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
            <h1 className="display-5 fw-bold mb-3">Portfolio</h1>
            <p className="text-muted mb-4">
              Voici quelques-unes de mes réalisations.
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

          {/* Cards Portfolio */}
          <div className="row g-4 mt-4">
            {/* Card 1 - Fresh Food */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="portfolio-card card h-100 border-0 shadow-sm">
                {/*  Image en premier - en dehors du card body */}
                <img
                  src="/images/portfolio/fresh-food.jpg"
                  alt="Fresh Food"
                  className="card-img-top"
                />
                {/* Card body aprés limage */}
                <div className="card-body text-center">
                  <h3 className="card-title h5 mb-2">Fresh Food</h3>
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    Site de vente de produits frais en ligne
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                  {/* Section grise en bas */}
                  <div className="card-footer-info">
                    <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Restaurant Akira */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="portfolio-card card h-100 border-0 shadow-sm">
                {/*  Image en premier - en dehors du card body */}
                <img
                  src="/images/portfolio/restaurant-japonais.jpg"
                  alt="Restaurant Akira"
                  className="card-img-top"
                />
                {/* Card body aprés limage */}
                <div className="card-body text-center">
                  <h3 className="card-title h5 mb-2">Restaurant Akira</h3>
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    Site de vente de produits frais en ligne
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                  {/* Section grise en bas */}
                  <div className="card-footer-info">
                    <small className="text-muted">Site réalisé avec WordPress</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Espace bien-être */}
             <div className="col-12 col-md-6 col-lg-4">
              <div className="portfolio-card card h-100 border-0 shadow-sm">
                {/*  Image en premier - en dehors du card body */}
                <img
                  src="/images/portfolio/espace-bien-etre.jpg"
                  alt="espace bien-être"
                  className="card-img-top"
                />
                {/* Card body aprés limage */}
                <div className="card-body text-center">
                  <h3 className="card-title h5 mb-2">Espace bien-être</h3>
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    Site de vente de produits en ligne
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                  {/* Section grise en bas */}
                  <div className="card-footer-info">
                    <small className="text-muted">Site réalisé avec LARAVEL</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - SEO */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="portfolio-card card h-100 border-0 shadow-sm">
                {/*  Image en premier - en dehors du card body */}
                <img
                  src="/images/portfolio/seo.jpg"
                  alt="SEO"
                  className="card-img-top"
                />
                {/* Card body aprés limage */}
                <div className="card-body text-center">
                  <h3 className="card-title h5 mb-2">SEO</h3>
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    Amélioration du référencement d'un site e-commerce
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                  {/* Section grise en bas */}
                  <div className="card-footer-info">
                    <small className="text-muted">Utilisation des outils SEO</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Création d'une API */}
             <div className="col-12 col-md-6 col-lg-4">
              <div className="portfolio-card card h-100 border-0 shadow-sm">
                {/*  Image en premier - en dehors du card body */}
                <img
                  src="/images/portfolio/coder.jpg"
                  alt="coder"
                  className="card-img-top"
                />
                {/* Card body aprés limage */}
                <div className="card-body text-center">
                  <h3 className="card-title h5 mb-2">Création d'une API</h3>
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    Création d'une API RESTFULL publique
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                  {/* Section grise en bas */}
                  <div className="card-footer-info">
                    <small className="text-muted">PHP - SYMFONY</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6 - Maquette d'un site web  */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="portfolio-card card h-100 border-0 shadow-sm">
                {/*  Image en premier - en dehors du card body */}
                <img
                  src="/images/portfolio/screens.jpg"
                  alt="screens"
                  className="card-img-top"
                />
                {/* Card body aprés limage */}
                <div className="card-body text-center">
                  <h3 className="card-title h5 mb-2">Maquette d'un site web</h3>
                  <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                    Création du prototype d'un site
                  </p>
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Voir le site
                  </a>
                  {/* Section grise en bas */}
                  <div className="card-footer-info">
                    <small className="text-muted">Réalisé avec FIGMA</small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
