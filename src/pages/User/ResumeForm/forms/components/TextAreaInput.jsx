import React from "react";

const TextAreaInput = ({ label, name, value, onChange, rows = 3 }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextAreaInput;
