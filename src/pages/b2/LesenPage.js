import React from 'react';
import { Link } from 'react-router-dom';

function LesenPage() {
  return (
    <div className="homepage">
      <h1>Lesen</h1>
      <div className="sections">
        <Link to="/b2/lesen/teil1">Teil 1</Link>
        <Link to="/b2/lesen/teil2">Teil 2</Link>
        <Link to="/b2/lesen/teil3">Teil 3</Link>
        <Link to="/b2/lesen/teil4">Teil 4</Link>
      </div>
      <Link to="/b2" className="back-link">← Назад</Link>
    </div>
  );
}

export default LesenPage;
