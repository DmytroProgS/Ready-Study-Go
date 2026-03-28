import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import NotFoundPage from './pages/NotFoundPage';
import NounsExercise from './components/NounsExercise';
import B2Page from './pages/B2Page';
import HorenPage from './pages/b2/HorenPage';
import LesenPage from './pages/b2/LesenPage';
import SchreibenPage from './pages/b2/SchreibenPage';
import SprechenPage from './pages/b2/SprechenPage';
import LesenTeil1Page from './pages/b2/lesen/LesenTeil1Page';
import LesenTeil2Page from './pages/b2/lesen/LesenTeil2Page';
import LesenTeil3Page from './pages/b2/lesen/LesenTeil3Page';
import LesenTeil4Page from './pages/b2/lesen/LesenTeil4Page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/nouns" element={<NounsExercise />} />
          <Route path="/b2" element={<B2Page />} />
          <Route path="/b2/horen" element={<HorenPage />} />
          <Route path="/b2/lesen" element={<LesenPage />} />
          <Route path="/b2/lesen/teil1" element={<LesenTeil1Page />} />
          <Route path="/b2/lesen/teil2" element={<LesenTeil2Page />} />
          <Route path="/b2/lesen/teil3" element={<LesenTeil3Page />} />
          <Route path="/b2/lesen/teil4" element={<LesenTeil4Page />} />
          <Route path="/b2/schreiben" element={<SchreibenPage />} />
          <Route path="/b2/sprechen" element={<SprechenPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/:id" element={<ExercisePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
