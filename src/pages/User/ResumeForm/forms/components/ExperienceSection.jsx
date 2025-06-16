import React from "react";
import TextInput from "./TextInput";

const ExperienceSection = ({
  experience,
  onChange,
  onBulletChange,
  addEntry,
  removeEntry,
  addBullet,
  removeBullet
}) => (
  <>
    <h2>Experience</h2>
    {experience.map((exp, i) => (
      <div key={i} className="dynamic-section">
        <div className="form-row">
          <TextInput
            label="Title"
            name="title"
            value={exp.title}
            onChange={e => onChange("experience", i, "title", e.target.value)}
          />
          <TextInput
            label="Company"
            name="company"
            value={exp.company}
            onChange={e => onChange("experience", i, "company", e.target.value)}
          />
        </div>
        <div className="form-row">
          <TextInput
            label="Location"
            name="location"
            value={exp.location}
            onChange={e => onChange("experience", i, "location", e.target.value)}
          />
          <TextInput
            label="Start Date"
            type="month"
            name="startDate"
            value={exp.startDate}
            onChange={e => onChange("experience", i, "startDate", e.target.value)}
          />
          <TextInput
            label="End Date"
            type="month"
            name="endDate"
            value={exp.endDate}
            onChange={e => onChange("experience", i, "endDate", e.target.value)}
          />
        </div>
        <label>Responsibilities / Achievements</label>
        {exp.bullets.map((bullet, idx) => (
          <div key={idx} className="form-group bullet-point">
            <textarea
              rows={2}
              value={bullet}
              onChange={e => onBulletChange("experience", i, idx, e.target.value)}
            />
            {exp.bullets.length > 1 && (
              <button
                type="button"
                onClick={() => removeBullet(i, idx)}
                className="remove-bullet-btn"
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => addBullet(i)}>
          Add Bullet Point
        </button>
        {experience.length > 1 && (
          <button type="button" onClick={() => removeEntry("experience", i)}>
            Remove Experience
          </button>
        )}
        <hr />
      </div>
    ))}
    <button type="button" onClick={() => addEntry("experience")}>
      Add Experience
    </button>
  </>
);

export default ExperienceSection;
