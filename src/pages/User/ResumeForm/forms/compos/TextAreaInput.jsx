import React from "react";

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  rows = 3,
  className = "",
  ...rest
}) => (
  <div className={`form-group ${className}`} {...rest}>
    <label htmlFor={name}>{label}</label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextAreaInput;
