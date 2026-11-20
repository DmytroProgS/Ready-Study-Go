import React from 'react';
import { useParams } from 'react-router-dom';

function ExercisePage() {
  const { id } = useParams();

  return (
    <div className="exercise-page">
      <h2>Übungen für den Bereich {id}</h2>
      <div className="exercises">
        {/* Можеш тут виводити конкретні тренажери */}
        <p>Übung 1</p>
        <p>Übung 2</p>
        <p>Übung 3</p>
        <p>Übung 4</p>
        <p>Übung 5</p>
      </div>
    </div>
  );
}

export default ExercisePage;
