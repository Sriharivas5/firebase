import React from "react";

const TextInput = ({ label, name, value, onChange, type = "text", readOnly = false }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

export default TextInput;
