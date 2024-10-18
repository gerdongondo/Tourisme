// src/components/PlatSenegalais.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé

const PlatSenegalais = () => {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer les plats sénégalais depuis l'API
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
      <h2>Plats Sénégalais</h2>
      <div className="row">
        {plats.map(plat => (
          <div className="col-md-4 mb-4" key={plat.id}>
            <Link to={`/plats/${plat.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={plat.imageUrl} alt={plat.titre} className="img-fluid" />
              <h3 className="text-center">{plat.titre}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatSenegalais;
