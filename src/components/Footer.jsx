import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const links = [
  { name: "Discord", href: "#", icon: <FaDiscord /> },
  { name: "Twitter", href: "#", icon: <FaTwitter /> },
  { name: "Instagram", href: "#", icon: <FaInstagram /> },
  { name: "Facebook", href: "#", icon: <FaFacebook /> },
];
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container flex flex-col items-center gap-4 md:flex-row justify-between">
        <p className="text-center text-sm md:text-left px-4">
          &copy;Nova 2024. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 md:justify-center">
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
