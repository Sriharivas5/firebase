import React from "react";

const ALL_FIELDS = {
  degree: (edu, onChange, idx) => (
    <input
      type="text"
      placeholder="Degree (e.g. B.Tech)"
      value={edu.degree || ""}
      onChange={e => onChange(idx, "degree", e.target.value)}
    />
  ),
  specialization: (edu, onChange, idx) => (
    <input
      type="text"
      placeholder="Specialization / Major"
      value={edu.specialization || ""}
      onChange={e => onChange(idx, "specialization", e.target.value)}
    />
  ),
  institution: (edu, onChange, idx) => (
    <input
      type="text"
      placeholder="Institution Name"
      value={edu.institution || ""}
      onChange={e => onChange(idx, "institution", e.target.value)}
    />
  ),
  board: (edu, onChange, idx) => (
    <input
      type="text"
      placeholder="University / Board"
      value={edu.board || ""}
      onChange={e => onChange(idx, "board", e.target.value)}
    />
  ),
  location: (edu, onChange, idx) => (
    <input
      type="text"
      placeholder="Location"
      value={edu.location || ""}
      onChange={e => onChange(idx, "location", e.target.value)}
    />
  ),
  startYear: (edu, onChange, idx) => (
    <input
      type="month"
      placeholder="Start Year"
      value={edu.startYear || ""}
      onChange={e => onChange(idx, "startYear", e.target.value)}
    />
  ),
  endYear: (edu, onChange, idx) => (
    <input
      type="month"
      placeholder="End Year"
      value={edu.endYear || ""}
      onChange={e => onChange(idx, "endYear", e.target.value)}
    />
  ),
  grade: (edu, onChange, idx) => (
    <input
      type="text"
      placeholder="Grade / Percentage / CGPA"
      value={edu.grade || ""}
      onChange={e => onChange(idx, "grade", e.target.value)}
    />
  ),
  notes: (edu, onChange, idx) => (
    <textarea
      placeholder="Additional Notes / Projects"
      rows={2}
      value={edu.notes || ""}
      onChange={e => onChange(idx, "notes", e.target.value)}
    />
  ),
};

const Education = ({
  education = [],
  onChange,
  addEntry,
  removeEntry,
  fieldsToShow,
  className = ""
}) => {
  const keys = fieldsToShow?.filter(key => {
    const exists = !!ALL_FIELDS[key];
    if (!exists) console.warn(`Invalid field key passed to Education: '${key}'`);
    return exists;
  }) || Object.keys(ALL_FIELDS);

  console.log("🎓 fieldsToShow from parent:", fieldsToShow);
  console.log("🎯 Filtered field keys to render:", keys);

  return (
    <div className={`section education ${className}`.trim()}>
      <h2>Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="entry">
          {keys.map(key =>
            <div key={key} className="field">
              {ALL_FIELDS[key](edu, onChange, idx)}
            </div>
          )}
          <button type="button" onClick={() => removeEntry("education", idx)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => addEntry("education")}>Add Education</button>
    </div>
  );
};

export default Education;
