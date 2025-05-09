// === [ AnimatedTitle Component ] ===
// Breaks up a title string into words and animates each word on scroll using GSAP.
// Props:
// - title: the full HTML-compatible string to animate
// - containerClass: custom class name(s) for outer wrapper

import gsap from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// Functional component definition
const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  // Set up GSAP scroll-triggered animation when the component mounts
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power1.inOut",
        stagger: 0.02,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Render the title broken into animated word spans within flexible wrapped lines
  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {/* Break the title string into lines based on <br /> and wrap each line */}
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {/* Wrap each word in a span for individual animation */}
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
