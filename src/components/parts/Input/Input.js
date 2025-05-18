import React from "react";
import "./Input.scss";

const Input = ({
  variant = "checkbox",
  id,
  label,
  className = "",
  wrapperClassName = "",
  labelClassName = "",
  children,
}) => {
  const inputClassName = `input input--${variant} ${className}`;
  const wrapperClass = `input-wrapper ${wrapperClassName}`;
  const labelClass = `input__label input__label--${variant} ${labelClassName}`;

  return (
    <div className={wrapperClass}>
      <input type={variant} id={id} className={inputClassName} />
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default Input;
