import React from "react";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  readOnly = false,
  className = "",
  ...rest
}) => (
  <div className={`form-group ${className}`} {...rest}>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

export default TextInput;
