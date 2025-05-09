// MyProjects.js
import React, { useState } from "react";
import "./MyProjects.scss";
import { myProjectsSection } from "../../portfolio";

const MyProjects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div id="projects" className="my-projects-section">
      <h1 className="section-title">{myProjectsSection.title}</h1>
      <div className="projects-container">
        {myProjectsSection.projects.map((project, i) => (
          <div
            className={`project-card ${flippedIndex === i ? "flipped" : ""}`}
            key={i}
            onClick={() => handleFlip(i)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>{project.name}</h3>
              </div>
              <div className="card-back">
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
