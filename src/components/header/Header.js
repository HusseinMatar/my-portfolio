import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";
import { useEffect, useState } from "react";

function Header() {
  const { isDark } = useContext(StyleContext);

  const closeMenu = () => {
    document.getElementById("menu-btn").checked = false;
  };

  const [activeSection, setActiveSection] = useState("#greeting");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["#greeting", "#skills", "#education", "#projects", "#contact"];
    let current = "#greeting";

    for (const id of sections) {
      const el = document.querySelector(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = id;
          break;
        }
      }
    }

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial trigger
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/my-portfolio/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li className={activeSection === "#greeting" ? "active" : ""}>
            <a href="#greeting" onClick={closeMenu}>Hello World</a>
          </li>
          <li className={activeSection === "#skills" ? "active" : ""}>
            <a href="#skills" onClick={closeMenu}>Tech I use</a>
          </li>
          <li className={activeSection === "#education" ? "active" : ""}>
            <a href="#education" onClick={closeMenu}>Where I'm growing?</a>
          </li>
          <li className={activeSection === "#projects" ? "active" : ""}>
            <a href="#projects" onClick={closeMenu}>Things I've Built</a>
          </li>
          <li className={activeSection === "#contact" ? "active" : ""}>
            <a href="#contact" onClick={closeMenu}>Let's Connect</a>
          </li>
          <li>
            <a><ToggleSwitch /></a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;