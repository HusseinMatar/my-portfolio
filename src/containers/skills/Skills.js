import React, { useContext } from "react";
import "./Skills.scss";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className="section-container" id="skills">
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={4000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              />
            )}
          </div>
        </Fade>

        <Fade right duration={1000}>
          <div className="skills-text-div">
          <h1 className={`skills-heading ${isDark ? "dark-mode-text" : "light-mode-text"}`}>
  {skillsSection.title}
</h1>
<p className={`skills-text-subtitle ${isDark ? "dark-mode-subtitle" : "light-mode-subtitle"}`}>
  {skillsSection.subTitle}
</p>


            <div className="skills-icons-container">
              {skillsSection.softwareSkills.map((skill, index) => (
                <div className="skill-icon" key={index}>
                  <i className={skill.fontAwesomeClassname}></i>
                  <span>{skill.skillName}</span>
                </div>
              ))}
            </div>

            <div className="skills-bullets">
              {skillsSection.skills.map((text, i) => (
                <p
                  key={i}
                  className={
                    isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
    </div>
  );
}
