import React from "react";
import "./LeadershipCard.scss";

export default function LeadershipCard({engagement, isDark}) {
  const headingId = `leadership-${engagement.location
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <article
      className={`leadership-card ${isDark ? "leadership-card-dark" : ""}`}
      aria-labelledby={headingId}
    >
      <div className="leadership-card-location-row">
        {engagement.flag && (
          <span
            className="leadership-card-flag"
            role="img"
            aria-label={`${engagement.country} flag`}
          >
            {engagement.flag}
          </span>
        )}
        <div>
          <h2 id={headingId} className="leadership-card-location">
            {engagement.location}
          </h2>
          {engagement.date && (
            <p className="leadership-card-date">{engagement.date}</p>
          )}
        </div>
      </div>

      {engagement.organization && (
        <h3 className="leadership-card-organization">
          {engagement.organization}
        </h3>
      )}
      {engagement.role && (
        <p className="leadership-card-role">{engagement.role}</p>
      )}
      {engagement.details && engagement.details.length > 0 && (
        <ul className="leadership-card-details">
          {engagement.details.map(detail => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
