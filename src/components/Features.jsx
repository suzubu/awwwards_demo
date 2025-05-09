// === [ Features Section ] ===
// Showcases the core products and initiatives under the Zentry umbrella using animated bento-style video cards.
// Includes:
// - Scroll-triggered tilt effect (BentoTilt)
// - Dynamic video previews with labels and descriptions (BentoCard)
// - Responsive grid layout
import React, { Children, useRef } from "react";
import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

// Tilt wrapper that applies a 3D perspective rotation based on mouse position
const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    //   relative position of mouse to position of the card; client is the mouse
    // Calculate tilt rotation based on cursor position relative to card center
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 20;
    const tiltY = (relativeX - 0.5) * -20;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// Renders an individual bento-style video card with overlay text
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Functional layout for the features grid and introductory content
const Features = () => {
  return (
    <>
      {/* Features section container with dark background */}
      <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
          {/* Intro copy above the grid */}
          <div className="px-5 py-32">
            <p className="font-circular-web text-lg text-blue-50">
              Into the Metagame Layer
            </p>
            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
              Immerse yourself in a rich and ever-expanding universe where a
              vibrant array of products converge into an interconnected overlay
              experience on your world.
            </p>
          </div>
          {/* Tilt-enabled feature card */}
          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
              src="videos/feature-1.mp4"
              title={
                <>
                  radie<b>n</b>t
                </>
              }
              description="A cross-platform metagame app, turning your activities across WEB2 & WEB3 into a rewarding adventure."
            />
          </BentoTilt>
          {/* Responsive grid of feature cards with unique layout classes */}
          <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 ">
            {/* Tilt-enabled feature card */}
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 max-sm:col-span-2">
              <BentoCard
                src="videos/feature-2.mp4"
                title={
                  <>
                    zig<b>m</b>a
                  </>
                }
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
              />
            </BentoTilt>
            {/* Tilt-enabled feature card */}
            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 max-md:col-span-1 max-md:w-full max-md:ms-0">
              <BentoCard
                src="/videos/feature-3.mp4"
                title={
                  <>
                    n<b>e</b>xus
                  </>
                }
                description="A gamified social hub, adding a new dimesnion of play to social interaction for WEB3 communities."
              />
            </BentoTilt>
            {/* Tilt-enabled feature card */}
            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 max-md:col-span-1 max-md:w-full max-md:ms-0">
              <BentoCard
                src="/videos/feature-4.mp4"
                title={
                  <>
                    az<b>u</b>l
                  </>
                }
                description="A cross-world AI Agent - elevating your gameplay to be more fun and productive"
              />
            </BentoTilt>
            {/* Tilt-enabled feature card */}
            <BentoTilt className="bento-tilt_2">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">
                  M<b>o</b>re co<b>m</b>ing soo<b>n</b>!
                </h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
            </BentoTilt>
            {/* Tilt-enabled feature card */}
            <BentoTilt className="bento-tilt_2">
              <video
                src="videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </BentoTilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
