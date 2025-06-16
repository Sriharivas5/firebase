import React from "react";
import TextInput from "./TextInput";

const EducationSection = ({ education, onChange, addEntry, removeEntry }) => (
  <>
    <h2>Education</h2>
    {education.map((edu, i) => (
      <div key={i} className="dynamic-section">
        <div className="form-row">
          <TextInput
            label="Institution"
            name="institution"
            value={edu.institution}
            onChange={e => onChange("education", i, "institution", e.target.value)}
          />
          <TextInput
            label="Education Level"
            name="educationLevel"
            value={edu.educationLevel}
            onChange={e => onChange("education", i, "educationLevel", e.target.value)}
          />
        </div>
        <div className="form-row">
          <TextInput
            label="Start Date"
            type="month"
            name="startDate"
            value={edu.startDate}
            onChange={e => onChange("education", i, "startDate", e.target.value)}
          />
          <TextInput
            label="End Date"
            type="month"
            name="endDate"
            value={edu.endDate}
            onChange={e => onChange("education", i, "endDate", e.target.value)}
          />
          <TextInput
            label={edu.gradingType === "percentage" ? "Percentage" : "CGPA"}
            name="gpa"
            value={edu.gpa}
            onChange={e => onChange("education", i, "gpa", e.target.value)}
          />
          <div className="form-group">
            <label>Grading Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name={`gradingType-${i}`}
                  value="cgpa"
                  checked={edu.gradingType === "cgpa"}
                  onChange={() => onChange("education", i, "gradingType", "cgpa")}
                />
                CGPA
              </label>
              <label>
                <input
                  type="radio"
                  name={`gradingType-${i}`}
                  value="percentage"
                  checked={edu.gradingType === "percentage"}
                  onChange={() => onChange("education", i, "gradingType", "percentage")}
                />
                Percentage
              </label>
            </div>
          </div>
        </div>
        {education.length > 1 && (
          <button type="button" onClick={() => removeEntry("education", i)}>
            Remove Education
          </button>
        )}
      </div>
    ))}
    <button type="button" onClick={() => addEntry("education")}>
      Add Education
    </button>
  </>
);

export default EducationSection;
