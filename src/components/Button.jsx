// === [ Button Component ] ===
// Reusable button component with optional left/right icons and customizable styling.
// Props:
// - title: main button label
// - id: optional HTML ID
// - leftIcon / rightIcon: React elements (e.g. icons) to display before/after the label
// - containerClass: additional Tailwind classes to extend styling
import React from "react";

// Functional component definition
const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
  return (
    <>
      {/* Main button wrapper with style and layout classes */}
      <button
        id={id}
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-violet-50 text-black ${containerClass}`}
      >
        {/* Optional left icon */}
        {leftIcon}
        {/* Text wrapper to enable inline-flex styling and effects */}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          {/* Render the button title text */}
          <div>{title}</div>
        </span>
        {/* Optional right icon */}
        {rightIcon}
      </button>
    </>
  );
};

export default Button;
