// === [ Footer Component ] ===
// Renders the site footer with:
// - Copyright text
// - Social media icon links
// - Privacy policy link
// Uses responsive layout via flex and Tailwind utility classes.
import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Social media links with corresponding icons
const links = [
  { name: "Discord", href: "#", icon: <FaDiscord /> },
  { name: "Twitter", href: "#", icon: <FaTwitter /> },
  { name: "Instagram", href: "#", icon: <FaInstagram /> },
  { name: "Facebook", href: "#", icon: <FaFacebook /> },
];
// Functional component definition
const Footer = () => {
  return (
    <>
      {/* Footer container with background and padding */}
      <footer className="w-screen bg-violet-300 py-4 text-black">
        {/* Inner layout container with responsive flex arrangement */}
        <div className="container flex flex-col items-center gap-4 md:flex-row justify-between">
          {/* Copyright notice */}
          <p className="text-center text-sm md:text-left px-4">
            &copy;Nova 2024. All rights reserved.
          </p>
          {/* Social media icons mapped from links array */}
          <div className="flex justify-center gap-4 md:justify-center">
            {links.map((link) => (
              <>
                {/* Individual social media icon link */}
                <a
                  key={link}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                >
                  {link.icon}
                </a>
              </>
            ))}
          </div>
          {/* Privacy policy link */}
          <a
            href="#privacy-policy"
            className="text-center text-sm hover:underline md:text-right"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
