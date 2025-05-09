import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences, educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div className="experience-section-wrapper">
            <h1 className="experience-heading">Where I'm Growing</h1>

            {/* Education Section */}
            <div className="education-cards-div">
              {educationInfo.schools.map((degree, i) => (
                <ExperienceCard
                  key={`edu-${i}`}
                  isDark={isDark}
                  cardInfo={{
                    company: degree.title,
                    role: degree.subtitle,
                    date: degree.duration || "",
                    companylogo: require(`../../assets/images/${degree.logo_path}`),
                    descBullets: degree.descriptions || []
                  }}
                />
              ))}
            </div>

            {/* Work Experience Section */}
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => (
                <ExperienceCard
                  key={`exp-${i}`}
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    companylogo: card.companylogo,
                    role: card.role,
                    descBullets: card.descBullets
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
