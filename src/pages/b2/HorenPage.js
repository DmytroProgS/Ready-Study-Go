import React from 'react';
import { Link } from 'react-router-dom';

function HorenPage() {
  return (
    <div className="homepage">
      <h1>Hören</h1>
      <p>Розділ в розробці...</p>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default HorenPage;
