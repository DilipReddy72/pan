import React from "react";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./App.css";

import { motion } from "framer-motion";
import {
    FaReact,
    FaLinkedin,
    FaEnvelope,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaAws,
    FaJava,
    FaNetworkWired,
    FaDatabase,
    FaCode,
    FaCloud,
    FaLinux,
    FaWindows,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaAngular,
    FaBootstrap,
    FaKubernetes,
    FaGoogle,
    FaApple,
    FaSlack,
    FaTrello,
    FaJira,
    FaBitbucket,
    FaTable,
    FaTerminal,
    FaGlobe,
    FaRocket,
    FaLock,
  } from "react-icons/fa";


  const techIcons = [
    { icon: <FaReact />, id: "react" }, // React
    { icon: <FaNodeJs />, id: "node" }, // Node.js
    { icon: <FaPython />, id: "python" }, // Python
    { icon: <FaDocker />, id: "docker" }, // Docker
    { icon: <FaAws />, id: "aws" }, // AWS
    { icon: <FaJava />, id: "java" }, // Java
    { icon: <FaNetworkWired />, id: "network" }, // Network
    { icon: <FaDatabase />, id: "database" }, // Database
    { icon: <FaCode />, id: "code" }, // Code
    { icon: <FaCloud />, id: "cloud" }, // Cloud
    { icon: <FaLinux />, id: "linux" }, // Linux
    { icon: <FaWindows />, id: "windows" }, // Windows
    { icon: <FaGitAlt />, id: "git" }, // Git
    { icon: <FaGithub />, id: "github" }, // GitHub
    { icon: <FaHtml5 />, id: "html" }, // HTML5
    { icon: <FaCss3Alt />, id: "css" }, // CSS3
    { icon: <FaJsSquare />, id: "javascript" }, // JavaScript
    { icon: <FaAngular />, id: "angular" }, // Angular
    { icon: <FaBootstrap />, id: "bootstrap" }, // Bootstrap
  
    { icon: <FaGoogle />, id: "gcp" }, // Google Cloud Platform
    { icon: <FaApple />, id: "apple" }, // macOS or Apple Technologies
    { icon: <FaSlack />, id: "slack" }, // Slack
    { icon: <FaTrello />, id: "trello" }, // Trello
    { icon: <FaJira />, id: "jira" }, // Jira
    { icon: <FaBitbucket />, id: "bitbucket" }, // Bitbucket
    { icon: <FaTable />, id: "databases" }, // General Database
    { icon: <FaTerminal />, id: "terminal" }, // Terminal
    { icon: <FaGlobe />, id: "web" }, // Web Technologies
    { icon: <FaRocket />, id: "devops" }, // DevOps
    { icon: <FaLock />, id: "security" }, // Security
  ];
function App() {
  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="animated-background">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.id}
            className="icon"
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
            }}
            animate={{
              x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
              y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
              opacity: 1,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5,
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Sections */}
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
