// src/components/Accueil.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé

const Accueil = () => {
  const [lieux, setLieux] = useState([]);
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer les lieux touristiques
  useEffect(() => {
    axios.get('http://localhost:8080/api/lieux')
      .then(response => {
        setLieux(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Erreur lors de la récupération des lieux:', error));
  }, []);

  // Récupérer les plats sénégalais
  useEffect(() => {
    axios.get('http://localhost:8080/api/plats')
      .then(response => {
        setPlats(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Erreur lors de la récupération des plats:', error));
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="titre-lieux">Lieux Touristiques</h2>
      <div className="row">
        {lieux.map(lieu => (
          <div className="col-md-4 col-sm-6 mb-4" key={lieu.id}>
            <Link to={`/lieux/${lieu.id}`} style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>
              <img src={lieu.imageUrl} alt={lieu.titre} className="img-fluid" />
              <h3>{lieu.titre}</h3>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="titre-plats">Plats Sénégalais</h2>
      <div className="row">
        {plats.map(plat => (
          <div className="col-md-4 col-sm-6 mb-4" key={plat.id}>
            <Link to={`/plats/${plat.id}`} style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>
              <img src={plat.imageUrl} alt={plat.titre} className="img-fluid" />
              <h3>{plat.titre}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
