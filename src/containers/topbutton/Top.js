import React, { useEffect } from "react";
import "./Top.scss";

export default function Top() {
  useEffect(() => {
    const scrollFunction = () => {
      const btn = document.getElementById("topButton");
      if (!btn) return;
      if (window.scrollY > 20) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollFunction);
    scrollFunction();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    const greetingSection = document.getElementById("greeting");
    if (greetingSection) {
      greetingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button onClick={scrollToTop} id="topButton" title="Go to top">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}