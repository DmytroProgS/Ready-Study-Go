import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Вивчення слів</h1>
      <div className="sections">
        <Link to="/nouns">Іменники</Link>
        <Link to="/exercise/2">Розділ 2</Link>
        <Link to="/exercise/3">Розділ 3</Link>
        {/* Додати більше розділів */}
      </div>

      <h2>Підготовка до іспитів</h2>
      <div className="sections">
        <Link to="/b2">Підготовка до B2</Link>
      </div>
    </div>
  );
}

export default HomePage;
