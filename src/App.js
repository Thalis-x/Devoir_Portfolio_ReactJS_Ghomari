import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';

// ⭐ Séparé de App car useLocation ne fonctionne qu'à l'intérieur de BrowserRouter
const AppContent = () => {
  const location = useLocation();
  const is404 = !['/', '/Contact', '/MentionsLegales', '/Portfolio', '/Services'].includes(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100">
      {!is404 && <Navigation />}

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MentionsLegales" element={<MentionsLegales />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!is404 && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
