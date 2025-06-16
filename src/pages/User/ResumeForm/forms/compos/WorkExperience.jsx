import React from "react";

const WorkExperience = ({
  data,
  onChange,
  onBulletChange,
  addEntry,
  removeEntry,
  addBullet,
  removeBullet,
  fieldsToShow = [],
}) => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {data.map((exp, idx) => (
        <div key={idx} className="experience-entry">
          {fieldsToShow.includes("jobTitle") && (
            <input
              type="text"
              placeholder="Job Title"
              value={exp.title || ""}
              onChange={(e) => onChange(idx, "title", e.target.value)}
            />
          )}
          {fieldsToShow.includes("company") && (
            <input
              type="text"
              placeholder="Company"
              value={exp.company || ""}
              onChange={(e) => onChange(idx, "company", e.target.value)}
            />
          )}
          {fieldsToShow.includes("startDate") && (
            <input
              type="date"
              placeholder="Start Date"
              value={exp.startDate || ""}
              onChange={(e) => onChange(idx, "startDate", e.target.value)}
            />
          )}
          {fieldsToShow.includes("endDate") && (
            <input
              type="date"
              placeholder="End Date"
              value={exp.endDate || ""}
              onChange={(e) => onChange(idx, "endDate", e.target.value)}
            />
          )}
          {fieldsToShow.includes("bullets") &&
            exp.bullets?.map((b, bi) => (
              <div key={bi} className="bullet-item">
                <input
                  type="text"
                  placeholder={`Bullet ${bi + 1}`}
                  value={b}
                  onChange={(e) => onBulletChange(idx, bi, e.target.value)}
                />
                <button type="button" onClick={() => removeBullet(idx, bi)}>Remove</button>
              </div>
            ))}
          {fieldsToShow.includes("addBullet") && (
            <button type="button" onClick={() => addBullet(idx)}>Add Bullet</button>
          )}
          <button type="button" onClick={() => removeEntry("experience", idx)}>Remove Experience</button>
        </div>
      ))}
      <button type="button" onClick={() => addEntry("experience")}>Add Experience</button>
    </div>
  );
};

export default WorkExperience;
