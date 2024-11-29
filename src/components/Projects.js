// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { title: 'Netflix Clone', description: 'A full-stack clone of Netflix.' },
  { title: 'E-commerce App', description: 'An online shopping platform.' },
  { title: 'Portfolio', description: 'This portfolio website.' },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Featured Titles</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
