import React, { useState, useEffect } from 'react';


const Home = () => {
  // État pour gérer l'ouverture/fermeture de la modale
  const [showModal, setShowModal] = useState(false);
  // État pour stocker les données GitHub
  const [githubData, setGithubData] = useState(null);
  // État pour gérer le chargement
  const [loading, setLoading] = useState(false);

  // Récupération des données GitHub au chargement de la page
  useEffect(() => {
    const fetchGithubData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/github-johndoe');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []); // [] = exécuté une seule fois au chargement

  // Fonctions pour ouvrir/fermer la modale
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>

      {/* Section Hero */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Overlay sombre */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="display-3 fw-bold mb-3">Bonjour, je suis John Doe</h1>
          <h2 className="display-5 fw-bold mb-4 text-white">
            Développeur web full-stack
          </h2>
          {/* Bouton qui ouvre la modale */}
          <button
            className="btn btn-danger btn-lg px-4"
            onClick={handleOpenModal}
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* MODALE GITHUB */}
      {showModal && (
        <div
          className="github-modal-overlay"
          onClick={handleCloseModal}
        >
          <div
            className="github-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer (X) */}
            <button
              className="github-modal-close"
              onClick={handleCloseModal}
              aria-label="Fermer"
            >
              ×
            </button>

            {/* Titre */}
            <h2 className="github-modal-title">Mon profil GitHub</h2>

            {/* Contenu */}
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              </div>
            ) : githubData ? (
              <div className="github-modal-body">
                {/* Avatar */}
                <div className="text-center mb-4">
                  <img
                    src={githubData.avatar_url}
                    alt={githubData.name || githubData.login}
                    className="github-avatar"
                  />
                </div>

                {/* Informations */}
                <div className="github-info">
                  {/* Nom */}
                  <div className="github-info-item">
                    <i className="fas fa-user me-2"></i>
                    <a
                      href={githubData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      {githubData.name || githubData.login}
                    </a>
                  </div>

                  {/* Localisation */}
                  {githubData.location && (
                    <div className="github-info-item">
                      <i className="fas fa-location-dot me-2"></i>
                      <span>{githubData.location}</span>
                    </div>
                  )}

                  {/* Bio */}
                  {githubData.bio && (
                    <div className="github-info-item">
                      <i className="fas fa-comment me-2"></i>
                      <span>{githubData.bio}</span>
                    </div>
                  )}

                  {/* Repositories */}
                  <div className="github-info-item">
                    <i className="fas fa-folder me-2"></i>
                    <span>Repositories : {githubData.public_repos}</span>
                  </div>

                  {/* Followers */}
                  <div className="github-info-item">
                    <i className="fas fa-users me-2"></i>
                    <span>Followers : {githubData.followers}</span>
                  </div>

                  {/* Following */}
                  <div className="github-info-item">
                    <i className="fas fa-user-plus me-2"></i>
                    <span>Following : {githubData.following}</span>
                  </div>
                </div>

                {/* Bouton Fermer en bas */}
                <div className="text-end mt-4">
                  <button
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-light py-4">
                <p>Impossible de charger les données GitHub.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Section A propos et Compétences */}
      <section className="py-5 bg-grey">
        <div className="container bg-light px-4 py-4 shadow rounded-3">
          <div className="row">
            {/* A propos */}
            <div className="col-md-6 mb-4">
              {/* Barre bleu en dessous de a propos et mes compétences */}
              <h2 className="mb-4 pb-2 border-bottom border-primary border-3">
                À propos
              </h2>

              <img
                src="/images/john-doe-about.jpg"
                alt="John Doe"
                className="img-fluid mb-3"
                style={{ width: '100%', maxWidth: '400vh' }}
              />

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                deiecus recendis impedit aut sure enim placeat? Natus, neque at?
              </p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                deiecus recendis impedit aut sure enim placeat? Natus, neque at?
              </p>

              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                necessitatibus consectetur tempore perferendis nostrum, ex
                deiecus recendis impedit aut sure enim placeat? Natus, neque at?
              </p>
            </div>

            {/* Mes compétences */}
            <div className="col-md-6 mb-4">
              <h2 className="mb-4 pb-2 border-bottom border-primary border-3">
                Mes compétences
              </h2>

              {/* HTML5 */}
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>HTML5 90%</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '90%' }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* CSS3 */}
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>CSS3 80%</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: '80%' }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* JAVASCRIPT */}
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>JAVASCRIPT 70%</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: '70%' }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* PHP */}
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>PHP 60%</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: '60%' }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              {/* REACT */}
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>REACT 50%</span>
                </div>
                <div className="progress" style={{ height: '20px' }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: '50%' }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;