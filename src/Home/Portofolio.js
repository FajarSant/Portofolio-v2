import React from "react";
import project1 from "../Assets/2.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl: project1,
    tags: ["Fashion", "Products"],
    status: "", // Add project status
  },
  {
    id: 2,
    title: "Shoes",
    description: "If a dog chews shoes whose shoes does he choose?",
    imageUrl: "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    tags: ["Fashion", "Products"],
    status: "Coming Soon", // Add project status
  },
  {
    id: 3,
    title: "Sunglasses",
    description: "The future is so bright, you gotta wear shades!",
    imageUrl: "/images/stock/photo-1234567890.jpg",
    tags: ["Fashion", "Accessories"],
    status: "On Going", // Add project status
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Beberapa Project yang sedang saya kembangkan dan sudah saya kembangkan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto"
    >
      <figure>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg md:text-xl">
          {project.title}
          {project.status === "Coming Soon" && (
            <div className="badge badge-secondary ml-2">Coming Soon</div>
          )}
          {project.status === "On Going" && (
            <div className="badge badge-secondary ml-2">On Going</div>
          )}
        </h2>
        <p className="text-sm md:text-base">{project.description}</p>
        <div className="card-actions justify-end mt-4">
          {project.tags.map((tag, index) => (
            <div key={index} className="badge badge-outline mr-2 mb-2">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
