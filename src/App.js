import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accueil from './components/Accueil';
import LieuxDeTourisme from './components/LieuxDeTourisme';
import PlatSenegalais from './components/PlatSenegalais';
import Detail from './components/Detail';
import DetailPlat from './components/DetailPlat'; // Importer le nouveau composant
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap
import logo from './assets/logo.png';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  const [lieux, setLieux] = useState([]);
  const [plats, setPlats] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // État pour gérer le menu mobile

  // Récupérer les lieux touristiques
  useEffect(() => {
    axios.get('http://localhost:8080/api/lieux')
      .then(response => setLieux(response.data))
      .catch(error => console.error('Erreur lors de la récupération des lieux:', error));
  }, []);

  // Récupérer les plats sénégalais
  useEffect(() => {
    axios.get('http://localhost:8080/api/plats')
      .then(response => setPlats(response.data))
      .catch(error => console.error('Erreur lors de la récupération des plats:', error));
  }, []);

  // Fonction pour gérer l'ouverture/fermeture du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      {/* Utilisation de Bootstrap pour la navbar */}
      <div className="navbar">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={toggleMenu}>Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lieux" onClick={toggleMenu}>Lieux de Tourisme</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/plats" onClick={toggleMenu}>Plats Sénégalais</Link>
          </li>
        </ul>
      </div>
    

      {/* Utilisation de Bootstrap pour une mise en page responsive */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/lieux" element={<LieuxDeTourisme />} />
          <Route path="/plats" element={<PlatSenegalais />} />
          <Route path="/lieux/:id" element={<Detail lieux={lieux} />} />
          <Route path="/plats/:id" element={<DetailPlat plats={plats} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
};

export default App;
