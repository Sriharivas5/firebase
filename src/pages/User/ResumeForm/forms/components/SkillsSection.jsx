import React from "react";

const SkillsSection = ({ skills, newSkill, setNewSkill, addSkill, removeSkill }) => (
  <>
    <h2>Skills</h2>
    <h3>Languages</h3>
    <div className="skills-row">
      {skills.languages.map((lang, i) => (
        <div className="form-group skill-group" key={i}>
          <input type="text" value={lang} readOnly />
          <button
            type="button"
            onClick={() => removeSkill("languages", i)}
            className="remove-x"
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={newSkill.languages}
        placeholder="Add language"
        onChange={e => setNewSkill(prev => ({ ...prev, languages: e.target.value }))}
      />
      <button type="button" onClick={() => addSkill("languages")}>
        Add Language
      </button>
    </div>
    <h3>Tools & Technologies</h3>
    <div className="skills-row">
      {skills.tools.map((tool, i) => (
        <div className="form-group skill-group" key={i}>
          <input type="text" value={tool} readOnly />
          <button
            type="button"
            onClick={() => removeSkill("tools", i)}
            className="remove-x"
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={newSkill.tools}
        placeholder="Add tool"
        onChange={e => setNewSkill(prev => ({ ...prev, tools: e.target.value }))}
      />
      <button type="button" onClick={() => addSkill("tools")}>
        Add Tool
      </button>
    </div>
  </>
);

export default SkillsSection;
