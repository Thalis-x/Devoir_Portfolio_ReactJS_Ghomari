import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
const App = () => {
  return (
    <BrowserRouter>
      {/* min-vh-100 → prend toute la hauteur écran
    d-flex flex-column → structure verticale
    flex-grow-1 → le contenu prend tout l’espace disponible
    Le footer est automatiquement poussé en bas */}
      <div className="d-flex flex-column min-vh-100">
        <Navigation />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/MentionsLegales" element={<MentionsLegales />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
