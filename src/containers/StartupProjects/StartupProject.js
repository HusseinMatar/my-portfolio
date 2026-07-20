import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [openProject, setOpenProject] = useState(null);

  if (!bigProjects.display) return null;

  return (
    <div className="section-container" id="projects">
      <div className="startup-projects-main">
        <h1
          className={`skills-heading ${
            isDark ? "dark-mode-text" : "light-mode-text"
          }`}
        >
          {bigProjects.title}
        </h1>
        <div
          className={`project-subtitle ${
            isDark ? "dark-mode-subtitle" : "light-mode-subtitle"
          }`}
        >
          {bigProjects.subtitle.map(line => (
            <p className="project-subtitle-line" key={line}>
              {line}
            </p>
          ))}
        </div>

        <div className="flip-card-container">
          {bigProjects.projects.map((project, index) => {
            const isOpen = openProject === index;
            const projectLabel = `${project.projectName} project details`;
            const detailsId = `project-details-${index}`;

            const toggleProject = () => {
              setOpenProject(current => (current === index ? null : index));
            };

            const handleCardClick = event => {
              if (!event.target.closest("a, button")) toggleProject();
            };

            const handleCardKeyDown = event => {
              if (event.key === "Escape" && isOpen) {
                event.preventDefault();
                setOpenProject(null);
                event.currentTarget.querySelector(".flip-card-toggle")?.focus();
              }
            };

            const handleToggleKeyDown = event => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleProject();
              }
            };

            return (
              <div
                className={`flip-card ${isOpen ? "flip-card-open" : ""}`}
                key={project.projectName}
                style={{animationDelay: `${Math.min(index, 12) * 100}ms`}}
                onClick={handleCardClick}
                onKeyDown={handleCardKeyDown}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <button
                      type="button"
                      className="flip-card-toggle"
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      aria-label={`${isOpen ? "Hide" : "Show"} ${projectLabel}`}
                      onClick={toggleProject}
                      onKeyDown={handleToggleKeyDown}
                    >
                      <span className="project-front-title">
                        {project.projectName}
                      </span>
                      <span className="flip-hint-mobile" aria-hidden="true">
                        ↻
                      </span>
                    </button>
                  </div>
                  <div
                    id={detailsId}
                    className="flip-card-back"
                    aria-hidden={!isOpen}
                  >
                    <p className="project-description">{project.projectDesc}</p>
                    <div className="project-links">
                      {project.footerLink?.map((link, i) => (
                        <a
                          key={i}
                          className="project-button"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isOpen ? 0 : -1}
                          onClick={event => event.stopPropagation()}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
