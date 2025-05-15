import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);

  const closeMenu = () => {
    document.getElementById("menu-btn").checked = false;
  };

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
          <li>
            <a href="#greeting" onClick={closeMenu}>Hello World</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Tech I use</a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>Where I'm growing?</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Things I've Built</a>
          </li>
          <li>
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