import React, { useState } from "react";

const Skills = ({
  data = { languages: [], tools: [] },
  fieldsToShow = ["languages", "tools"],
  onAddSkill,
  onRemoveSkill,
}) => {
  const [newSkill, setNewSkill] = useState({
    languages: "",
    tools: "",
  });

  const [errors, setErrors] = useState({
    languages: "",
    tools: "",
  });

  const handleAdd = (type) => {
    const skillValue = newSkill[type].trim();
    
    // Validation
    if (!skillValue) {
      setErrors(prev => ({ ...prev, [type]: "Please enter a value" }));
      return;
    }
    
    if (data[type].includes(skillValue)) {
      setErrors(prev => ({ ...prev, [type]: "Skill already exists" }));
      return;
    }

    // Clear error and add skill
    setErrors(prev => ({ ...prev, [type]: "" }));
    onAddSkill(type, skillValue);
    setNewSkill(prev => ({ ...prev, [type]: "" }));
  };

  const handleKeyDown = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd(type);
    }
  };

  return (
    <div className="skills-section mb-8 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>

      {fieldsToShow.includes("languages") && (
        <div className="skill-group mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-lg font-medium text-gray-700">Programming Languages</label>
            <span className="text-sm text-gray-500">
              {data.languages.length} added
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {data.languages.map((lang, idx) => (
              <div 
                key={`lang-${idx}`} 
                className="skill-chip bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
              >
                <span>{lang}</span>
                <button 
                  type="button" 
                  className="ml-2 text-blue-600 hover:text-blue-800"
                  onClick={() => onRemoveSkill("languages", idx)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className={`flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.languages ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. JavaScript, Python"
              value={newSkill.languages}
              onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, "languages")}
            />
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              onClick={() => handleAdd("languages")}
            >
              Add
            </button>
          </div>
          {errors.languages && (
            <p className="mt-1 text-sm text-red-600">{errors.languages}</p>
          )}
        </div>
      )}

      {fieldsToShow.includes("tools") && (
        <div className="skill-group">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-lg font-medium text-gray-700">Tools & Technologies</label>
            <span className="text-sm text-gray-500">
              {data.tools.length} added
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {data.tools.map((tool, idx) => (
              <div 
                key={`tool-${idx}`} 
                className="skill-chip bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center"
              >
                <span>{tool}</span>
                <button 
                  type="button" 
                  className="ml-2 text-green-600 hover:text-green-800"
                  onClick={() => onRemoveSkill("tools", idx)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className={`flex-1 p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                errors.tools ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g. React, Git, Docker"
              value={newSkill.tools}
              onChange={(e) => setNewSkill({ ...newSkill, tools: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, "tools")}
            />
            <button
              type="button"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              onClick={() => handleAdd("tools")}
            >
              Add
            </button>
          </div>
          {errors.tools && (
            <p className="mt-1 text-sm text-red-600">{errors.tools}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Skills;