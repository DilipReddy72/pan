// src/components/Intro.js
import React from "react";
import { motion } from "framer-motion";
import {

  FaLinkedin,
  FaEnvelope,
  FaGithub,

} from "react-icons/fa";
import "./Intro.css";
import profilePic from "/Users/dilipreddyseelam/Desktop/mine/netflix-portfolio/src/assets/images/profile.jpeg";





const Intro = () => {
  return (
    <div className="intro-container">
      {/* Moving Icons in the Background */}
      <div className="profile-picture-container">
  <img
    src={profilePic}
    alt="Profile"
    className="profile-picture"
  />
</div>

      

      {/* Main Intro Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="intro-content"
      >
      <h1 className="intro-title">Hi, I'm Dilip Reddy</h1>
        <p className="intro-role">Software Engineer</p>
        <p className="intro-subtitle">
        I specialize in Full Stack Development and Cloud Technologies, creating scalable, secure, and efficient solutions. With a strong focus on problem-solving and collaboration, I excel at turning complex challenges into practical, user-centric applications. I take pride in making things work seamlessly, ensuring every project delivers real impact and value.
        </p>
        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/dilip-reddy-seelam-46a714302/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
    href="https://github.com/DilipReddy72" // Replace with your GitHub URL
    target="_blank"
    rel="noopener noreferrer"
    className="contact-link"
  >
    <FaGithub /> GitHub
  </a>
          <a
            href="mailto:diliprscr72@gmail.com"
            className="contact-link"
          >
            <FaEnvelope /> Email Me
          </a>
          📞 510-512-5967
        </div>
        <motion.a
  href="/Dilip-CA.pdf"
  download="Dilip_Reddy_Resume.pdf"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="download-resume-button"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "white"; // Change background color to white on hover
    e.target.style.color = "black"; // Change text color to black for visibility
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#e50914"; // Reset background color to Netflix red
    e.target.style.color = "white"; // Reset text color to white
  }}
  onClick={() => alert("Your resume is being downloaded!")}
>
  Download Resume
</motion.a>


      </motion.div>
    </div>
  );
};

export default Intro;
