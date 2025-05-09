// === [ Story Section ] ===
// A scrollable 3D-tilt hero section introducing the Zentry narrative.
// Includes:
// - AnimatedTitle component with styled text
// - Interactive image with mouse-based tilt using GSAP
// - Descriptive text and CTA button
import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

// Functional component definition
const Story = () => {
  const frameRef = useRef(null);

  // Reset image rotation when the cursor leaves the image area
  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  // Calculate and apply GSAP-driven rotation based on cursor position
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -30;
    const rotateY = ((x - centerX) / centerX) * 30;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 800,
      ease: "power1.inOut",
    });
  };

  return (
    <>
      {/* Outer section container with ID for anchor linking */}
      <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          {/* Section subtitle or tagline */}
          <p className="font-general text-sm uppercase md:text-[10px]">
            the multiversal ip world
          </p>
          <div className="relative size-full">
            {/* Animated headline with styled letters and line breaks */}
            <AnimatedTitle
              title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
              sectionId="#story"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
            {/* Image container with rounded mask and interactive motion */}
            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  {/* Interactive image that rotates on hover using GSAP */}
                  <img
                    ref={frameRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    src="/img/entrance.webp"
                    alt="entrace"
                    className="object-contain"
                  />
                </div>
              </div>
              {/* SVG filter applied globally for rounded corner blur effect */}
              <RoundedCorners />
            </div>
          </div>
          {/* Positioned caption and call-to-action layout */}
          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              {/* Supporting paragraph describing the Zentry realm */}
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Where realms converge, lies Zentry nd the boundless pillar.
                Discover its secrets and shape your fate amidst infitie
                opportunities
              </p>
              {/* Call-to-action button linking to the Prologue section */}
              <Button
                id="realm-button"
                title="discover prologue"
                containerClass="mt-5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
