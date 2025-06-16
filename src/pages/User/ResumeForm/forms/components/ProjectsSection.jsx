import React from "react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

const ProjectsSection = ({ projects, onChange, addEntry, removeEntry }) => (
  <>
    <h2>Projects</h2>
    {projects.map((proj, i) => (
      <div key={i} className="dynamic-section">
        <div className="form-row">
          <TextInput
            label="Name"
            name="name"
            value={proj.name}
            onChange={e => onChange("projects", i, "name", e.target.value)}
          />
          <TextInput
            label="Link"
            name="link"
            value={proj.link}
            onChange={e => onChange("projects", i, "link", e.target.value)}
          />
        </div>
        <div className="form-row">
          <TextInput
            label="Start Date"
            type="month"
            name="startDate"
            value={proj.startDate}
            onChange={e => onChange("projects", i, "startDate", e.target.value)}
          />
          <TextInput
            label="End Date"
            type="month"
            name="endDate"
            value={proj.endDate}
            onChange={e => onChange("projects", i, "endDate", e.target.value)}
          />
          <TextInput
            label="Skills"
            name="tools"
            value={proj.tools}
            onChange={e => onChange("projects", i, "tools", e.target.value)}
          />
        </div>
        <TextAreaInput
          label="Description"
          name="description"
          value={proj.description}
          onChange={e => onChange("projects", i, "description", e.target.value)}
        />
        {projects.length > 1 && (
          <button type="button" onClick={() => removeEntry("projects", i)}>
            Remove Project
          </button>
        )}
        <hr />
      </div>
    ))}
    <button type="button" onClick={() => addEntry("projects")}>
      Add Project
    </button>
  </>
);

export default ProjectsSection;
