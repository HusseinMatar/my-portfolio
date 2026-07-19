import React, {useContext} from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import StyleContext from "../../contexts/StyleContext";
import {experienceInfo} from "../../portfolio";
import "./Experience.scss";

export default function Experience() {
  const {isDark} = useContext(StyleContext);

  if (!experienceInfo.display || experienceInfo.experience.length === 0) {
    return null;
  }

  return (
    <section className="experience-section" id="experience">
      <h1
        className={`experience-heading ${
          isDark ? "dark-mode-text" : "light-mode-text"
        }`}
      >
        Professional Experience
      </h1>
      <div className="experience-cards-container">
        {experienceInfo.experience.map(card => (
          <ExperienceCard
            key={`${card.company}-${card.role}-${card.date}`}
            cardInfo={card}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
