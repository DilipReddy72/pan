// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Amazon Clone',
    description: 'A full-stack e-commerce platform mimicking Amazon, built with React and Node.js. Features include product browsing, a dynamic shopping cart, secure Stripe-based payment integration, and Firebase authentication for user management.',
}
,{
  title: 'Booking Travel System',
  description: 'A comprehensive travel booking platform built with React, Node.js, and MongoDB. Includes features like dynamic trip planning, real-time seat availability, secure payment integration, and personalized travel recommendations.',
}
,
  {
    title: 'Mental Health Support App',
    description: 'An app with a chatbot, mood tracker, and group session features, designed to enhance emotional well-being and social connection.',
  },
  {
    title: 'Advanced Notification Management System',
    description: 'A system to manage and customize user notifications, leveraging Redis for real-time updates and improving user engagement by 25%.',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Tech in Action</h2>
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
