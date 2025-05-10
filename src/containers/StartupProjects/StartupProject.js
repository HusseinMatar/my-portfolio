import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display) return null;

  return (
    <div className="section-container" id="projects">
    <Fade bottom duration={2000} distance="20px">
      <div className="main" id="projects">
      <h1 className={`skills-heading ${isDark ? "dark-mode-text" : "light-mode-text"}`}>
        {bigProjects.title}
      </h1>
      <p className={`project-subtitle ${isDark ? "dark-mode-subtitle" : "light-mode-subtitle"}`}>
        {bigProjects.subtitle}
      </p>

        <div className="flip-card-container">
          {bigProjects.projects.map((project, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="project-front-title">{project.projectName}</h3>
                </div>
                <div className="flip-card-back">
                  <p className="project-description">{project.projectDesc}</p>
                  <div className="project-links">
                    {project.footerLink?.map((link, i) => (
                      <a
                        key={i}
                        className="project-button"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
    </div>
  );
}
