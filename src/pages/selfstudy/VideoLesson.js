import React from 'react';
import './VideoLesson.css';

// Вбудоване відео з YouTube за його ID + питання для дискусії під ним.
function VideoLesson({ youtubeId, title, discussion, personal }) {
  if (!youtubeId) {
    return <p className="video-empty">Відео ще не додане.</p>;
  }

  return (
    <div className="video-lesson">
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={title || 'Відео'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {discussion && discussion.length > 0 && (
        <div className="video-discussion">
          <h3 className="video-discussion__title">💬 Fragen zur Diskussion</h3>
          <ol className="video-discussion__list">
            {discussion.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </div>
      )}

      {personal && personal.length > 0 && (
        <div className="video-discussion">
          <h3 className="video-discussion__title">🙋 Personalfragen</h3>
          <ol className="video-discussion__list">
            {personal.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default VideoLesson;
