import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/:id" element={<ExercisePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
