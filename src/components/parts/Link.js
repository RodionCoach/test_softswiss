import React from "react";
import PropTypes from "prop-types";

const Link = ({ href, className, children, ariaLabel }) => {
  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
};

// Just for example, not used in the project. Because its plain js without typings.
Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
};

Link.defaultProps = {
  className: "",
  ariaLabel: "",
};

export default Link;
