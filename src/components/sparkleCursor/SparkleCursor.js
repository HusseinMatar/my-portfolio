// src/components/SparkleCursor.jsx
import { useEffect } from "react";
import "./SparkleCursor.scss";

const SparkleCursor = () => {
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.left = `${x - 3}px`; // Center the sparkle
      sparkle.style.top = `${y - 3}px`;
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600);
    };

    const handleMouseMove = (e) => {
      createSparkle(e.pageX, e.pageY);
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      if (touch) {
        createSparkle(touch.pageX, touch.pageY);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return null; // No visible JSX needed
};

export default SparkleCursor;
