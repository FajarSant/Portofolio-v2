import React from 'react';

function card({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
}

export default card;
