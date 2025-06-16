import React, { useState } from "react";

const Skills = ({ data = {}, fieldsToShow = [], addSkill, removeSkill }) => {
  const [newSkill, setNewSkill] = useState({
    languages: "",
    tools: "",
  });

  const handleAdd = (type) => {
    const trimmed = newSkill[type].trim();
    if (!trimmed) return;

    const currentSkills = Array.isArray(data[type]) ? data[type] : [];
    if (currentSkills.includes(trimmed)) return;

    addSkill(type, trimmed);
    setNewSkill((prev) => ({ ...prev, [type]: "" }));
  };

  return (
    <div className="section">
      <h2>Skills</h2>

      {fieldsToShow.includes("languages") && (
        <div className="input-group">
          <label>Languages</label>
          <div className="dynamic-list">
            {(data.languages || []).map((lang, idx) => (
              <div key={idx} className="chip">
                {lang}
                <button type="button" onClick={() => removeSkill("languages", idx)}>×</button>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add language"
              value={newSkill.languages}
              onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleAdd("languages")}
            />
            <button type="button" onClick={() => handleAdd("languages")}>Add</button>
          </div>
        </div>
      )}

      {fieldsToShow.includes("tools") && (
        <div className="input-group">
          <label>Tools</label>
          <div className="dynamic-list">
            {(data.tools || []).map((tool, idx) => (
              <div key={idx} className="chip">
                {tool}
                <button type="button" onClick={() => removeSkill("tools", idx)}>×</button>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add tool"
              value={newSkill.tools}
              onChange={(e) => setNewSkill({ ...newSkill, tools: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleAdd("tools")}
            />
            <button type="button" onClick={() => handleAdd("tools")}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
