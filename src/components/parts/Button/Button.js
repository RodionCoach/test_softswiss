import React from "react";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  className = "",
  noHoverEffect = false,
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} ${
        noHoverEffect ? "no-hover-effect" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
