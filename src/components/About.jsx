// === [ About Section ] ===
// Displays the hero/about section with animated text and a scroll-triggered fullscreen image reveal.
// - Uses GSAP ScrollTrigger to animate a clip mask on scroll.
// - Contains animated titles and introductory copy for the Zentry experience.

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

// Functional section definition
const About = () => {
  useGSAP(() => {
    // Scroll-triggered GSAP animation that expands a clipped mask to fullscreen
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Expands the masked element to full viewport width/height with no border radius
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <>
      {/* Top-level container for About section */}
      <div id="about" className="min-h-screen w-screen">
        {/* Header content including welcome label, animated title, and supporting text */}
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          <p className="font-general text-sm uppercase md:text-[10px]">
            Welcome to Zentry
          </p>

          {/* Animated headline using custom AnimatedTitle component */}
          <AnimatedTitle
            title="Disc<b>o</b>ver the world's largest <br /> shared <b>a</b>dventure"
            containerClass="mt-5 !text-black text-center"
          />

          {/* Supporting subtext paragraphs below the title */}
          <div className="about-subtext">
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
            <p className="text-gray-500">
              Zentry unites every player from countless games and platforms,
              both digital and physical, into a unified Play Economy
            </p>
          </div>
        </div>

        {/* Scroll-triggered masked image section */}
        <div className="h-dvh w-screen" id="clip">
          {/* Image mask container — animated by GSAP */}
          <div className="mask-clip-path about-image">
            {/* Fullscreen background image inside animated mask */}
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
