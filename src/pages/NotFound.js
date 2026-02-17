import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    // Bloque le scroll quand on arrive sur la page 404
    document.body.style.overflow = 'hidden';
    
    // Remet le scroll normal quand on quitte la page 404
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: 'url(/images/404.svg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#6698cb',
        height: 'calc(100vh + 56px)',
        marginTop: '-56px',
        overflow: 'hidden',
      }}
      className="d-flex flex-column align-items-center justify-content-end text-center pb-5"
    >
      <Link to="/" className="btn btn-primary mb-3">
        Retour à l'accueil
      </Link>
      <a href="http://www.freepik.com" style={{ fontSize: '0.75rem' }} className="text-white mt-2">
        Designed by Freepik
      </a>
    </section>
  );
};

export default NotFound;
