import React from "react";

const Link = ({ href, className, children, ariaLabel }) => {
  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default Link;
