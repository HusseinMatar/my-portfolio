import React, {useContext} from "react";
import LeadershipCard from "../../components/leadershipCard/LeadershipCard";
import StyleContext from "../../contexts/StyleContext";
import {leadershipInfo} from "../../portfolio";
import "./Leadership.scss";

export default function Leadership() {
  const {isDark} = useContext(StyleContext);

  if (!leadershipInfo.display || leadershipInfo.engagements.length === 0) {
    return null;
  }

  return (
    <section
      className="leadership-section section-anchor"
      id="leadership-global-engagement"
      aria-labelledby="leadership-heading"
    >
      <h1
        id="leadership-heading"
        className={`leadership-heading ${
          isDark ? "dark-mode-text" : "light-mode-text"
        }`}
      >
        {leadershipInfo.title}
      </h1>
      {leadershipInfo.intro && (
        <p className="leadership-intro">{leadershipInfo.intro}</p>
      )}
      <div className="leadership-cards-container">
        {leadershipInfo.engagements.map(engagement => (
          <LeadershipCard
            key={`${engagement.location}-${engagement.date}`}
            engagement={engagement}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}
