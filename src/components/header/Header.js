import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import logoHusseinMatar from "../../assets/images/logoHusseinMatar.png";

import {
  workExperiences,
  skillsSection,

} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
        <img src={logoHusseinMatar} alt="Hussein Matar Logo" />
      </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
  <li>
    <a href="#greeting">Hello World</a> {/* fixed ID */}
  </li>
  {viewSkills && (
    <li>
      <a href="#skills">Tech I use</a>
    </li>
  )}
  {viewExperience && (
    <li>
      <a href="#experience">Where I'm Growing</a>
    </li>
  )}
  <li>
    <a href="#projects">Things I've Built</a>
  </li>
  <li>
    <a href="#contact">Let's Connect</a>
  </li>
  <li>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a>
      <ToggleSwitch />
    </a>
  </li>
</ul>


      </header>
    </Headroom>
  );
}
export default Header;
