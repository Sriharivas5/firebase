import React from "react";

const defaultFields = {
  role: true,
  organization: true,
  duration: true,
  description: true,
};

export default function VolunteerExperience({ data, onChange, fieldsToShow = defaultFields }) {
  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    onChange(updated);
  };

  const addEntry = () => onChange([...data, {}]);
  const removeEntry = (index) => onChange(data.filter((_, i) => i !== index));

  return (
    <div className="section">
      <h2>Volunteer Experience / Extracurriculars</h2>
      {data.map((entry, i) => (
        <div key={i} className="entry">
          {fieldsToShow.role && (
            <input value={entry.role || ""} onChange={(e) => handleChange(i, "role", e.target.value)} placeholder="Role / Title" />
          )}
          {fieldsToShow.organization && (
            <input value={entry.organization || ""} onChange={(e) => handleChange(i, "organization", e.target.value)} placeholder="Organization" />
          )}
          {fieldsToShow.duration && (
            <input value={entry.duration || ""} onChange={(e) => handleChange(i, "duration", e.target.value)} placeholder="Duration" />
          )}
          {fieldsToShow.description && (
            <textarea value={entry.description || ""} onChange={(e) => handleChange(i, "description", e.target.value)} placeholder="Description" />
          )}
          <button onClick={() => removeEntry(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addEntry}>Add Volunteer Experience</button>
    </div>
  );
}
