import React from "react";

const ALL_FIELDS = {
  title: (project, onChange, idx) => (
    <input
      type="text"
      placeholder="Project Title"
      value={project.title || ""}
      onChange={(e) => onChange(idx, "title", e.target.value)}
    />
  ),
  description: (project, onChange, idx) => (
    <textarea
      placeholder="Description"
      value={project.description || ""}
      onChange={(e) => onChange(idx, "description", e.target.value)}
    />
  ),
  role: (project, onChange, idx) => (
    <input
      type="text"
      placeholder="Your Role"
      value={project.role || ""}
      onChange={(e) => onChange(idx, "role", e.target.value)}
    />
  ),
  technologies: (project, onChange, idx) => (
    <input
      type="text"
      placeholder="Technologies Used"
      value={project.technologies || ""}
      onChange={(e) => onChange(idx, "technologies", e.target.value)}
    />
  ),
  startDate: (project, onChange, idx) => (
    <input
      type="date"
      value={project.startDate || ""}
      onChange={(e) => onChange(idx, "startDate", e.target.value)}
    />
  ),
  endDate: (project, onChange, idx) => (
    <input
      type="date"
      value={project.endDate || ""}
      onChange={(e) => onChange(idx, "endDate", e.target.value)}
    />
  ),
  link: (project, onChange, idx) => (
    <input
      type="url"
      placeholder="Project Link"
      value={project.link || ""}
      onChange={(e) => onChange(idx, "link", e.target.value)}
    />
  ),
  teamSize: (project, onChange, idx) => (
    <input
      type="number"
      placeholder="Team Size"
      value={project.teamSize || ""}
      onChange={(e) => onChange(idx, "teamSize", e.target.value)}
    />
  ),
  status: (project, onChange, idx) => (
    <select
      value={project.status || ""}
      onChange={(e) => onChange(idx, "status", e.target.value)}
    >
      <option value="">Select Status</option>
      <option value="Completed">Completed</option>
      <option value="Ongoing">Ongoing</option>
    </select>
  )
};

const Projects = ({
  data = [],
  onChange,
  addEntry,
  removeEntry,
  fieldsToShow,
  className = ""
}) => {
  const keys = fieldsToShow || Object.keys(ALL_FIELDS);

  return (
    <div className={`section projects ${className}`.trim()}>
      <h2>Projects</h2>
      {data.map((project, idx) => (
        <div key={idx} className="entry">
          {keys.map((key) =>
            ALL_FIELDS[key] ? (
              <div key={key} className="field">
                {ALL_FIELDS[key](project, onChange, idx)}
              </div>
            ) : null
          )}
          <button type="button" onClick={() => removeEntry(idx)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addEntry}>Add Project</button>
    </div>
  );
};

export default Projects;
