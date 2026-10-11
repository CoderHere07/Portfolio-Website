import { useState, useEffect } from "react";
import { profile } from "../data.js";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDayMode, setIsDayMode] = useState(() => {
    return localStorage.getItem("theme") === "day";
  });

  useEffect(() => {
    if (isDayMode) {
      document.documentElement.setAttribute("data-theme", "day");
      localStorage.setItem("theme", "day");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "night");
    }
  }, [isDayMode]);

  const toggleTheme = () => {
    setIsDayMode((prev) => !prev);
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="nav" aria-label="Primary">
        <a className="brand" href="#top" onClick={closeMenu}>
          CoderHere07.
        </a>
        <div className="nav-controls">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDayMode ? "Switch to Night Mode" : "Switch to Day Mode"}
            title={isDayMode ? "Switch to Night Mode" : "Switch to Day Mode"}
          >
            <span className="theme-icon">{isDayMode ? "☀️" : "🌙"}</span>
            <span className="theme-label">{isDayMode ? "DAY" : "NIGHT"}</span>
          </button>
          <button
            className={`hamburger-btn ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            <span className="hamburger-label">{isOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </header>

      {/* Hamburger Fullscreen Overlay */}
      <div
        className={`nav-overlay ${isOpen ? "open" : ""}`}
        onClick={(e) => {
          if (e.target.classList.contains("nav-overlay")) closeMenu();
        }}
      >
        <div className="nav-overlay-content">
          <div className="nav-menu-header">
            <span className="nav-menu-tag">MENU</span>
            <button className="theme-toggle-btn-menu" onClick={toggleTheme}>
              <span>{isDayMode ? "☀️ DAY MODE" : "🌙 NIGHT MODE"}</span>
            </button>
          </div>
          <ul className="nav-overlay-links">
            <li>
              <a href="#work" onClick={closeMenu}>
                <span className="link-num">01</span>
                <span className="link-text">Projects</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                <span className="link-num">02</span>
                <span className="link-text">Expertise</span>
              </a>
            </li>
            <li>
              <a href="#repos" onClick={closeMenu}>
                <span className="link-num">03</span>
                <span className="link-text">Open Source</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <span className="link-num">04</span>
                <span className="link-text">Contact</span>
              </a>
            </li>
          </ul>

          <div className="nav-overlay-footer">
            <div className="nav-footer-col">
              <span className="nav-footer-title">GET IN TOUCH</span>
              <a href={`mailto:${profile.email}`} className="nav-footer-link">
                {profile.email}
              </a>
            </div>
            <div className="nav-footer-col">
              <span className="nav-footer-title">SOCIALS</span>
              <div className="nav-footer-socials">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
