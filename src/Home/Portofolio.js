import React from 'react';
import project1 from "../Assets/2.png"

const projects = [
  {
    id: 1,
    title: 'Shoes',
    description: 'If a dog chews shoes whose shoes does he choose?',
    imageUrl: project1,
    tags: ['Fashion', 'Products'],
    status: '', // Add project status
  },
  {
    id: 2,
    title: 'Shoes',
    description: 'If a dog chews shoes whose shoes does he choose?',
    imageUrl: '/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    tags: ['Fashion', 'Products'],
    status: 'Coming Soon', // Add project status
  },
  {
    id: 3,
    title: 'Sunglasses',
    description: 'The future is so bright, you gotta wear shades!',
    imageUrl: '/images/stock/photo-1234567890.jpg',
    tags: ['Fashion', 'Accessories'],
    status: 'On Going', // Add project status
  },
  // Add other projects here
];

function Portfolio() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div key={project.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={project.imageUrl} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {project.title}
                {project.status === 'Coming Soon' && (
                  <div className="badge badge-secondary">Coming Soon</div>
                )}
                {project.status === 'On Going' && (
                  <div className="badge badge-secondary">On Going</div>
                )}
              </h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                {project.tags.map((tag, index) => (
                  <div key={index} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
