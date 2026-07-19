import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

const navigationItems = [
  {label: "Hello World", href: "#greeting"},
  {label: "Tech I Use", href: "#skills"},
  {label: "Professional Experience", href: "#professional-experience"},
  {label: "Education", href: "#education"},
  {
    label: "Leadership & Global Engagement",
    href: "#leadership-global-engagement"
  },
  {label: "Things I’ve Built", href: "#projects"},
  {label: "Let’s Connect", href: "#contact"}
];

function Header() {
  const {isDark} = useContext(StyleContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handlePointerDown = event => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = event => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("hashchange", closeMenu);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("hashchange", closeMenu);
    };
  }, [closeMenu, isMenuOpen]);

  return (
    <Headroom>
      <header
        ref={headerRef}
        className={isDark ? "dark-menu header" : "header"}
      >
        <a href="/my-portfolio/" className="logo" onClick={closeMenu}>
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <div className="header-actions">
          <div className="header-theme-toggle" aria-label="Color theme">
            <ToggleSwitch />
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className={`menu-button ${isMenuOpen ? "menu-button-open" : ""}`}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen(open => !open)}
          >
            <span className="navicon" aria-hidden="true"></span>
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`menu ${isMenuOpen ? "menu-open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul>
            {navigationItems.map(item => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}

export default Header;
