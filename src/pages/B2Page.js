import React from 'react';
import { Link } from 'react-router-dom';

function B2Page() {
  return (
    <div className="homepage">
      <h1>Підготовка до B2</h1>
      <div className="sections">
        <Link to="/b2/horen">Hören</Link>
        <Link to="/b2/lesen">Lesen</Link>
        <Link to="/b2/schreiben">Schreiben</Link>
        <Link to="/b2/sprechen">Sprechen</Link>
      </div>
      <Link to="/" className="back-link">← Назад</Link>
    </div>
  );
}

export default B2Page;
