import React from "react";
import "../../styles/template-two.scss";

const TemplateTwo = ({ data }) => {
  const renderBullets = (bullets) =>
    bullets?.length ? <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul> : null;
  const joinArray = (arr) => arr?.join(", ") || "";

  return (
    <div  id="resume" className="resume-container template-two">
      <header>
        <h1>{data.name}</h1>
        <div className="contact-bar">
          <span>{data.email}</span> | <span>{data.phone}</span> | <span>{data.website}</span>
        </div>
      </header>

      <section>
        <h2>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i}>
            <h3>{exp.title} – {exp.company}</h3>
            <p>{exp.location} | {exp.date}</p>
            {renderBullets(exp.bullets)}
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i}>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.date} | {edu.gpa}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <p><strong>Languages:</strong> {joinArray(data.skills.languages)}</p>
        <p><strong>Technologies:</strong> {joinArray(data.skills.tools)}</p>
      </section>

      <section>
        <h2>Projects</h2>
        {data.projects.map((proj, i) => (
          <div key={i}>
            <p><strong>{proj.name}</strong> – <a href={proj.link}>{proj.link}</a></p>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TemplateTwo;
