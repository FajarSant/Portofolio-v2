import React from 'react';
import project1 from '../Assets/2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
];

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.8, ease: 'easeInOut' }} 
      className="card w-96 bg-base-100 shadow-xl"
    >
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
    </motion.div>
  );
};

export default Portfolio;
