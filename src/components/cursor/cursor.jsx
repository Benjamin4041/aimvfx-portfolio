import React, { useState, useEffect, useRef } from "react";
import "./cursor.css";

class HoverButton {
  constructor(el, onEnter, onLeave) {
    this.hovered = false;
    this.animatingHover = false;
    this.forceOut = false;
    this.timing = 0.65;
    this.el = el;
    this.bg = el.querySelector(".bg");

    this.el.addEventListener("mouseenter", onEnter);
    this.el.addEventListener("mouseleave", onLeave);
  }

  hoverInAnim = () => {
    if (!this.hovered) {
      this.hovered = true;
      this.animatingHover = true;
      this.forceOut = false;

      // Simulating GSAP animation with CSS transition
      this.bg.style.transform = "translateX(-12%)";

      setTimeout(() => {
        this.animatingHover = false;
        if (this.forceOut) {
          this.forceOut = false;
          this.hoverOutAnim();
        }
      }, this.timing * 1000);
    }
  };

  hoverOutAnim = () => {
    this.hovered = false;
    this.bg.style.transform = "translateX(100%)";
  };
}

export default function Cursor() {
  const cursorRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);
  const [idle, setIdle] = useState(false);

  const amount = 20;
  const sineDots = Math.floor(amount * 0.3);
  const width = 26;
  const idleTimeout = 150;

  // Initialize dots
  useEffect(() => {
    const newDots = Array.from({ length: amount }, (_, index) => ({
      index,
      x: 0,
      y: 0,
      scale: 1 - 0.05 * index,
      angleX: 0,
      angleY: 0,
      lockX: 0,
      lockY: 0,
    }));
    setDots(newDots);
  }, []);

  // Mouse move and idle logic
  useEffect(() => {
    let timeoutId;

    const onMouseMove = (event) => {
      const x = event.clientX - width / 2;
      const y = event.clientY - width / 2;
      setMousePosition({ x, y });
      resetIdleTimer();
    };

    const startIdleTimer = () => {
      timeoutId = setTimeout(() => {
        setIdle(true);
        setDots((prevDots) =>
          prevDots.map((dot) => ({
            ...dot,
            lockX: dot.x,
            lockY: dot.y,
            angleX: Math.PI * 2 * Math.random(),
            angleY: Math.PI * 2 * Math.random(),
          }))
        );
      }, idleTimeout);
    };

    const resetIdleTimer = () => {
      clearTimeout(timeoutId);
      setIdle(false);
      startIdleTimer();
    };

    window.addEventListener("mousemove", onMouseMove);
    startIdleTimer();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    let animationFrameId;

    const animateDots = () => {
      setDots((prevDots) =>
        prevDots.map((dot, index, dots) => {
          const nextDot = dots[index + 1] || dots[0];

          let x = mousePosition.x;
          let y = mousePosition.y;

          if (idle && index > sineDots) {
            dot.angleX += 0.05;
            dot.angleY += 0.05;
            dot.y =
              dot.lockY + Math.sin(dot.angleY) * ((width / 2) * dot.scale);
            dot.x =
              dot.lockX + Math.sin(dot.angleX) * ((width / 2) * dot.scale);
          } else {
            dot.x = x;
            dot.y = y;
          }

          return dot;
        })
      );

      animationFrameId = requestAnimationFrame(animateDots);
    };

    animationFrameId = requestAnimationFrame(animateDots);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, idle]);

  // Hover button effect
  useEffect(() => {
    const buttonEl = document.getElementById("button");
    let hoverButton;

    if (buttonEl) {
      hoverButton = new HoverButton(
        buttonEl,
        () => hoverButton.hoverInAnim(),
        () => hoverButton.hoverOutAnim()
      );
    }

    return () => {
      if (hoverButton) {
        buttonEl.removeEventListener("mouseenter", hoverButton.hoverInAnim);
        buttonEl.removeEventListener("mouseleave", hoverButton.hoverOutAnim);
      }
    };
  }, []);

  return (
    <div id="cursor" className="Cursor" ref={cursorRef}>
      {dots.map((dot, index) => (
        <span
          key={index}
          style={{
            transform: `translate(${dot.x}px, ${dot.y}px) scale(${dot.scale})`,
            backgroundColor: "white",
          }}
        />
      ))}
    </div>
  );
}
