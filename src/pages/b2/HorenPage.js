import React from 'react';
import { Link } from 'react-router-dom';

function HorenPage() {
  return (
    <div className="homepage">
      <h1>Hören</h1>
      <div className="sections">
        <Link to="/b2/horen/teil1">Teil 1</Link>
        <Link to="/b2/horen/teil2">Teil 2</Link>
        <Link to="/b2/horen/teil3">Teil 3</Link>
        <Link to="/b2/horen/teil4">Teil 4</Link>
      </div>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default HorenPage;