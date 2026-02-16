import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Section Titre avec padding en haut */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Contact</h1>
            <p className="text-muted mb-4">
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
            <div className="ligne mx-auto pb-2 border-bottom border-primary border-5"></div>
          </div>

          {/* Section Formulaire + Coordonnées */}
          <div className="row g-4 mt-4 shadow rounded-3">
            {/* Colonne Gauche - Formulaire */}
            <div className="col-12 col-lg-6">
              <div className="contact-form-section">
                <h2 className="h4 mb-4 pb-3 border-bottom border-primary border-3">
                  Formulaire de contact
                </h2>
                <form>
                  {/* Votre nom */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  {/* Votre adresse email */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>

                  {/* Votre numéro de téléphone */}
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Votre numéro de téléphone"
                      required
                    />
                  </div>

                  {/* Sujet */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sujet"
                      required
                    />
                  </div>

                  {/* Votre message */}
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>

                  {/* Bouton Envoyer */}
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>

            {/* Colonne Droite - Coordonnées + Map */}
            <div className="col-12 col-lg-6">
              <div className="contact-info-section">
                <h2 className="h4 mb-4 pb-3 border-bottom border-primary border-3">
                  Mes coordonnées
                </h2>

                {/* Nom */}
                <div className="contact-info-item mb-3">
                  <h3 className="h5 fw-bold mb-3">John Doe</h3>
                </div>

                {/* Adresse */}
                <div className="contact-info-item mb-2">
                  <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                  <span>40 rue Laure Diebold</span>
                </div>
                <div className="contact-info-item mb-3 ms-4">
                  <span>69009 Lyon, France</span>
                </div>

                {/* Téléphone */}
                <div className="contact-info-item mb-2">
                  <i className="fas fa-phone me-2 text-primary"></i>
                  <span>10 20 30 40 50</span>
                </div>

                {/* Email */}
                <div className="contact-info-item mb-4">
                  <i className="fas fa-envelope me-2 text-primary"></i>
                  <span>john.doe@gmail.com</span>
                </div>

                {/* Google Map */}
                <div className="map-container mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271814865335!2d4.796403976660792!3d45.778660271078674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation John Doe"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
