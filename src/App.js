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
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJava,
  FaNetworkWired,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAngular,
  FaBootstrap,
  FaGoogle,
  FaApple,
  FaSlack,
  FaTrello,
  FaJira,
  FaBitbucket,
  FaRocket,
  FaLock,
  FaFigma,
  FaPhp,
  FaCode,
} from "react-icons/fa";
import {
  SiVueDotJs,
  SiNextDotJs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiOracle,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiTerraform,
  SiKubernetes,
  SiRuby,
  SiNotion,
} from "react-icons/si";

const techIcons = [
  { icon: <FaReact />, id: "react" },
  { icon: <FaNodeJs />, id: "node" },
  { icon: <FaPython />, id: "python" },
  { icon: <FaDocker />, id: "docker" },
  { icon: <FaAws />, id: "aws" },
  { icon: <FaJava />, id: "java" },
  { icon: <FaNetworkWired />, id: "network" },
  { icon: <FaDatabase />, id: "database" },
  { icon: <FaHtml5 />, id: "html" },
  { icon: <FaCss3Alt />, id: "css" },
  { icon: <FaJsSquare />, id: "javascript" },
  { icon: <FaAngular />, id: "angular" },
  { icon: <FaBootstrap />, id: "bootstrap" },
  { icon: <FaGoogle />, id: "gcp" },
  { icon: <FaApple />, id: "apple" },
  { icon: <FaSlack />, id: "slack" },
  { icon: <FaTrello />, id: "trello" },
  { icon: <FaJira />, id: "jira" },
  { icon: <FaBitbucket />, id: "bitbucket" },
  { icon: <FaRocket />, id: "devops" },
  { icon: <FaLock />, id: "security" },
 
  
  { icon: <SiExpress />, id: "express" },
  { icon: <SiPostgresql />, id: "postgresql" },
  { icon: <SiMongodb />, id: "mongodb" },
  { icon: <SiRedis />, id: "redis" },
  { icon: <SiOracle />, id: "oracle" },
  { icon: <SiTensorflow />, id: "tensorflow" },
  { icon: <SiPandas />, id: "pandas" },
  { icon: <SiNumpy />, id: "numpy" },
  { icon: <SiTerraform />, id: "terraform" },
  { icon: <SiKubernetes />, id: "kubernetes" },
  { icon: <FaFigma />, id: "figma" },
  { icon: <SiRuby />, id: "ruby" },
  { icon: <SiNotion />, id: "notion" },
  { icon: <FaPhp />, id: "php" },
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
