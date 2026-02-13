import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Modale from './pages/Modale';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MentionsLegales" element={<MentionsLegales />} />
        <Route path="/profil" element={<Modale />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        {/* Route pour toutes les autres URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
