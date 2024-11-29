// src/components/Education.js
import React from "react";
import "./Education.css";

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "California State University, East Bay",
    duration: "2022 - 2024",
  },
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "Vellore Institute of Technology-AP",
    duration: "2018 - 2022",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
