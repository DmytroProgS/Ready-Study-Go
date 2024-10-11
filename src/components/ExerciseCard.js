import React from 'react';

function ExerciseCard({ title, description }) {
  return (
    <div className="exercise-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ExerciseCard;
