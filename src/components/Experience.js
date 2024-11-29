// src/components/Experience.js
import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cisco Technology",
    duration: "Aug 2024 - Present",
    description:
      "Designed and implemented a scalable e-commerce platform using Python and Flask, reducing query response times by 20%. Developed dynamic front-end modules with React and Redux, improving customer interaction and boosting user engagement by 25%.",
  },
  {
    role: "Software Engineer Intern",
    company: "Cisco Technology",
    duration: "Jan 2024 - May 2024",
    description:
      "Collaborated on an e-commerce platform by building RESTful APIs with Flask and PostgreSQL, improving response times by 15%. Designed authentication workflows with JWT for enhanced security and streamlined user login mechanisms.",
  },
  {
    role: "Software Developer",
    company: "Cybage Software",
    duration: "Jan 2021 - Jun 2022",
    description:
      "Developed scalable RESTful APIs using Java (Spring Boot) and implemented concurrency management with multithreading, increasing throughput by 30%. Migrated a monolithic architecture to a microservices framework, accelerating feature releases by 15%.",
  },
  {
    role: "Front-End Developer",
    company: "CitiusTech",
    duration: "Jul 2020 - Dec 2020",
    description:
      "Translated detailed UI/UX designs into responsive web interfaces using React.js. Improved platform accessibility with WCAG standards, achieving 95% usability compliance. Enhanced page load times by 40% through lazy loading and file compression.",
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-role">{experience.role}</h3>
            <p className="experience-company">{experience.company}</p>
            <p className="experience-duration">{experience.duration}</p>
            <p className="experience-description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
