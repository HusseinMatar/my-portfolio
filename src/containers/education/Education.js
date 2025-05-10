import React, { useContext } from "react";
import "./Education.scss";
import { educationInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-reveal";

export default function Education() {
  const { isDark } = useContext(StyleContext);
  if (!educationInfo.display) return null;

  return (
    <div className="section-container" id="education">
    <div className="education-section" id="education">
      <h1 className={`education-heading ${isDark ? "dark-mode-text" : "light-mode-text"}`}>
        Where I'm Growing?
      </h1>
      <div className="education-card-container">
      {educationInfo.schools.map((school, index) => {
  const schoolClass = school.schoolName.includes("Orbyta")
    ? "orbyta"
    : school.schoolName.includes("Torino")
    ? "unito"
    : "";

  return (
    <Fade left duration={2300} distance="30px" key={index}>
      <div className={`education-card ${schoolClass}`}>
        <img
          src={school.logo}
          alt={school.schoolName}
          className="education-logo"
        />
        <div className="education-text-block">
          <div className="education-title">{school.schoolName}</div>
          <div className="education-subheader">{school.subHeader}</div>
          <div className="education-duration">{school.duration}</div>
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
