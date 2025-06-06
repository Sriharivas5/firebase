import React from "react";
import "../../styles/template-three.scss";

const TemplateThree = ({ data }) => {
  const renderBullets = (bullets) =>
    bullets?.length ? <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul> : null;
  const joinArray = (arr) => arr?.join(", ") || "";

  return (
    <div id="resume" className="resume-container template-three">
      <h1>{data.name}</h1>
      <p>{data.location} | {data.email} | {data.phThree}</p>
      <p>{data.website} | {data.linkedin} | {data.github}</p>
      <hr />

      <h2>Education</h2>
      {data.education.map((edu, i) => (
        <div key={i}>
          <p><strong>{edu.institution}</strong> ({edu.date})</p>
          <p>{edu.gpa}</p>
          <p>Coursework: {edu.coursework}</p>
        </div>
      ))}

      <h2>Experience</h2>
      {data.experience.map((exp, i) => (
        <div key={i}>
          <p><strong>{exp.title}</strong>, {exp.company} - {exp.location} ({exp.date})</p>
          {renderBullets(exp.bullets)}
        </div>
      ))}

      <h2>Projects</h2>
      {data.projects.map((proj, i) => (
        <div key={i}>
          <p><strong>{proj.name}</strong> – <a href={proj.link}>{proj.link}</a> ({proj.date})</p>
          <p>{proj.description}</p>
          <p>Tools: {proj.tools}</p>
        </div>
      ))}

      <h2>Skills</h2>
      <p><strong>Languages:</strong> {joinArray(data.skills.languages)}</p>
      <p><strong>Tools:</strong> {joinArray(data.skills.tools)}</p>
    </div>
  );
};

export default TemplateThree;