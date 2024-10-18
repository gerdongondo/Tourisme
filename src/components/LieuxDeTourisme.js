// src/components/LieuxDeTourisme.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé

const LieuxDeTourisme = () => {
  const [lieux, setLieux] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/lieux')
      .then(response => {
        setLieux(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Erreur lors de la récupération des lieux:', error));
  }, []);

  if (loading) {
    return <p>Chargement des lieux touristiques...</p>;
  }

  return (
    <div className="container mt-4">
      <h1>Lieux Touristiques</h1>
      <div className="row">
        {lieux.map(lieu => (
          <div className="col-md-4 mb-4" key={lieu.id}>
            <Link to={`/lieux/${lieu.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={lieu.imageUrl} alt={lieu.titre} className="img-fluid" />
              <h3 className="text-center">{lieu.titre}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LieuxDeTourisme;
