import React from "react";

const defaultFields = {
  name: true,
  organizer: true,
  date: true,
  rank: true,
  techStack: true,
};

export default function HackathonsCompetitions({ data, onChange, fieldsToShow = defaultFields }) {
  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    onChange(updated);
  };

  const addEntry = () => onChange([...data, {}]);
  const removeEntry = (index) => onChange(data.filter((_, i) => i !== index));

  return (
    <div className="section">
      <h2>Hackathons / Competitions</h2>
      {data.map((entry, i) => (
        <div key={i}>
          {fieldsToShow.name && (
            <input value={entry.name || ""} onChange={(e) => handleChange(i, "name", e.target.value)} placeholder="Event Name" />
          )}
          {fieldsToShow.organizer && (
            <input value={entry.organizer || ""} onChange={(e) => handleChange(i, "organizer", e.target.value)} placeholder="Organizer" />
          )}
          {fieldsToShow.date && (
            <input type="date" value={entry.date || ""} onChange={(e) => handleChange(i, "date", e.target.value)} />
          )}
          {fieldsToShow.rank && (
            <input value={entry.rank || ""} onChange={(e) => handleChange(i, "rank", e.target.value)} placeholder="Rank / Outcome" />
          )}
          {fieldsToShow.techStack && (
            <input value={entry.techStack || ""} onChange={(e) => handleChange(i, "techStack", e.target.value)} placeholder="Tech Stack Used" />
          )}
          <button onClick={() => removeEntry(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addEntry}>Add Hackathon</button>
    </div>
  );
}
