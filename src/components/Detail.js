// src/components/Detail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous que Bootstrap est importé

const Detail = ({ lieux }) => {
  const { id } = useParams();
  const lieu = lieux.find(lieu => lieu.id === parseInt(id));

  if (!lieu) {
    return <p>Lieu non trouvé.</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>{lieu.titre}</h2>
          <p>{lieu.description}</p>
        </div>
        <div className="col-md-6">
          <img src={lieu.imageUrl} alt={lieu.titre} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
