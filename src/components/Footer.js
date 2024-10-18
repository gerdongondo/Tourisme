import React from 'react';
import './Footer.css';  // Assure-toi d'avoir le fichier CSS lié

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email : contact@monsite.com</p>
            <p>Téléphone : +123 456 789</p>
          </div>
          
          <div className="col-md-4">
            <h5>Suivez-nous</h5>
            <a href="https://facebook.com">Facebook</a> | <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 MonSite. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
