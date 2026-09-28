import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="wrap">
        <a href="#" className="logo">
          <img className="logo-mark-img" src="/saiil-logo-icon.png" alt="SAIIL" />
          <span className="logo-word">SAIIL</span>
        </a>
        <ul className="navlinks">
          <li><a href="#approach">Our approach</a></li>
          <li><a href="#ai">Where AI fits</a></li>
          <li><a href="#sandbox">The sandbox</a></li>
          <li><a href="#partners">Countries</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-outline">Contact</a>
        </div>
      </div>
    </nav>
  );
};
