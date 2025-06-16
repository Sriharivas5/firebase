import React from "react";

export default function HobbiesInterests({ data, onChange }) {
  const handleChange = (index, value) => {
    const updated = [...data];
    updated[index] = value;
    onChange(updated);
  };

  const addEntry = () => onChange([...data, ""]);
  const removeEntry = (index) => onChange(data.filter((_, i) => i !== index));

  return (
    <div className="section">
      <h2>Hobbies & Interests</h2>
      {data.map((item, i) => (
        <div key={i}>
          <input value={item} onChange={(e) => handleChange(i, e.target.value)} placeholder="Hobby / Interest" />
          <button onClick={() => removeEntry(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addEntry}>Add Hobby</button>
    </div>
  );
}
