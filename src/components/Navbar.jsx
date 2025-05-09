// === [ Navbar Component ] ===
// Sticky navigation bar that animates based on scroll position and supports an audio visualizer toggle.
// Features:
// - Scroll-up show / scroll-down hide behavior with GSAP animation
// - Audio play/pause with animated visual bars
// - Navigation links and "Products" button

import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

// Nav items used for anchor navigation
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Handle nav visibility based on scroll direction (adds/removes floating class)
  //   if Scroll Y is 0 aka at the top, nav container remove the floating nav class, keep normal nav; if scrolling down, remove normal nav and add floating nav; if scrolling up have both visible.
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // Animate nav position and opacity using GSAP when visibility changes
  //   when scrolling down or back up, adds a fade affect to the floating nav bar
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : "-100",
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  // Play or pause audio when toggle state changes
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);
  return (
    <>
      {/* Nav container with fixed positioning and transition */}
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        {/* Centered header wrapper for consistent vertical alignment */}
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          {/* Main navigation layout: logo, nav links, and audio control */}
          <nav className="flex size-full items-center justify-between p-4">
            {/* Left section: logo and Products button */}
            <div className="flex items-center gap-7">
              <img src="/img/logo.png" alt="logo" className="w-10" />
              <Button
                id="product-button"
                title="Products"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden items-center justify center gap-1"
              />
            </div>
            {/* Right section: nav links and audio toggle */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item) => (
                  <>
                    {/* Render anchor link for each nav item */}
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="nav-hover-btn"
                    >
                      {item}
                    </a>
                  </>
                ))}
              </div>

              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5 cursor-pointer"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <>
                    {/* Animated audio indicator bar */}
                    <div
                      key={bar}
                      className={`indicator-line ${
                        isIndicatorActive ? "active" : ""
                      }`}
                      style={{
                        animationDelay: `${bar * 0.1}s`,
                      }}
                    />
                  </>
                ))}
              </button>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
