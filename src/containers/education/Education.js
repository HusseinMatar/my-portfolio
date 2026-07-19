import React, {useContext} from "react";
import "./Education.scss";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (!educationInfo.display) return null;

  return (
    <div className="section-container" id="education">
      <div className="education-section">
        <h1
          className={`education-heading ${
            isDark ? "dark-mode-text" : "light-mode-text"
          }`}
        >
          Where I'm Growing?
        </h1>
        <div className="education-card-container">
          {educationInfo.schools.map(school => {
            const schoolClass = school.schoolName.includes("BasicNet")
              ? "basic"
              : school.schoolName.includes("Orbyta")
              ? "orbyta"
              : school.schoolName.includes("Turin") ||
                school.schoolName.includes("Torino")
              ? "unito"
              : "";

            return (
              <Fade
                left
                duration={2300}
                distance="30px"
                key={`${school.schoolName}-${school.subHeader}`}
              >
                <div className={`education-card ${schoolClass}`}>
                  <img
                    src={school.logo}
                    alt={`${school.schoolName} logo`}
                    className="education-logo"
                  />
                  <div className="education-text-block">
                    <div className="education-title">{school.schoolName}</div>
                    <div className="education-subheader">
                      {school.subHeader}
                    </div>
                    {school.duration && (
                      <div className="education-duration">
                        {school.duration}
                      </div>
                    )}
                    {school.desc && (
                      <p className="education-description">{school.desc}</p>
                    )}
                    {school.descBullets && school.descBullets.length > 0 && (
                      <ul className="education-description-list">
                        {school.descBullets.map(bullet => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
