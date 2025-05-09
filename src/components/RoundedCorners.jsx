// === [ RoundedCorners SVG Filter ] ===
// Invisible SVG filter used to apply rounded glow/corner blur effect via CSS `filter: url(#flt_tag)`.
// Included globally in the DOM so any element can reference it by ID.
import React from "react";

// Functional component definition
const RoundedCorners = () => {
  // Hidden SVG element defining reusable filter
  return (
    <svg
      className="invisible absolute size-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        // Custom SVG filter named "flt_tag" — adds a Gaussian blur and color
        matrix effect
        <filter id="flt_tag">
          // Gaussian blur effect applied to source
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          // Color matrix to intensify the blur
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="flt_tag"
          />
          // Composite the effect back onto the source
          <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

export default RoundedCorners;
