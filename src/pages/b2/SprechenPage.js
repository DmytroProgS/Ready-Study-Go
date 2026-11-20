import React from 'react';
import { Link } from 'react-router-dom';

function SprechenPage() {
  return (
    <div className="homepage">
      <h1>Sprechen</h1>
      <p>Dieser Bereich ist in Arbeit …</p>
      <Link to="/b2" className="back-link">← Zurück</Link>
    </div>
  );
}

export default SprechenPage;
