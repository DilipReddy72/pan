// src/components/Skills.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaGitAlt,
  FaGithub,
  FaTrello,
  FaPython,
  FaNodeJs,
  FaNetworkWired,
  FaReact,
  FaAws,
  FaDocker,
  FaLinux,
  FaJenkins,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaApple,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJquery,
  SiAzuredevops,
  SiGooglecloud,
  SiPandas,
  SiNumpy,
  SiKeras,
  SiScikitlearn,
  SiJupyter,
  SiJira,
  SiBootstrap,
  SiBitbucket,
  SiWindows,
  SiIntellijidea,
  SiVisualstudiocode,
  SiEclipseide,
} from "react-icons/si";
import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "SQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Frameworks and Libraries",
    skills: [
     
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Jupyter Notebook", icon: <SiJupyter /> }
    ],
  },
  {
    title: "IDEs",
    skills: [
      { name: "VSCode", icon: <SiVisualstudiocode /> },
      { name: "IntelliJ", icon: <SiIntellijidea /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
    ],
  },
  {
    title: "Cloud and Database",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <SiAzuredevops /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "CI/CD and DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Jenkins", icon: <FaJenkins /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Trello", icon: <FaTrello /> },
      { name: "Jira", icon: <SiJira /> },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux", icon: <FaLinux /> },
      { name: "Windows", icon: <SiWindows /> },
      { name: "iOS", icon: <FaApple /> },
    ],
  },
  // Add other categories as needed
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const openModal = (category) => {
    setActiveCategory(category);
  };

  const closeModal = () => {
    setActiveCategory(null);
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Genres</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <h3 className="skill-block-title">{category.title}</h3>
            <p
              className="view-link"
              onClick={() => openModal(category)}
            >
              View
            </p>
          </motion.div>
        ))}
      </div>

      {activeCategory && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title">{activeCategory.title}</h3>
            <div className="modal-skills">
              {activeCategory.skills.map((skill, i) => (
                <div key={i} className="modal-skill-item">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills;



