import React from 'react';
import { useParams } from 'react-router-dom';

function ExercisePage() {
  const { id } = useParams();

  return (
    <div className="exercise-page">
      <h2>Тренування для розділу {id}</h2>
      <div className="exercises">
        {/* Можеш тут виводити конкретні тренажери */}
        <p>Тренажер 1</p>
        <p>Тренажер 2</p>
        <p>Тренажер 3</p>
        <p>Тренажер 4</p>
        <p>Тренажер 5</p>
      </div>
    </div>
  );
}

export default ExercisePage;
