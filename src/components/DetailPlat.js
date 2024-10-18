// src/components/DetailPlat.js
import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé

const DetailPlat = ({ plats }) => {
  const { id } = useParams();
  const plat = plats.find(p => p.id === parseInt(id));

  if (!plat) {
    return <p>Plat non trouvé</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>{plat.titre}</h2>
          <p>{plat.description}</p>
        </div>
        <div className="col-md-6">
          <img src={plat.imageUrl} alt={plat.titre} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default DetailPlat;
