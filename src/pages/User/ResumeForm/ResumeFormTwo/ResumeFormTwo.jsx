import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./ResumeFormTwo.scss";

const TextInput = ({ label, name, value, onChange, readOnly = false }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

const TextAreaInput = ({ label, value, onChange, rows = 3 }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea rows={rows} value={value} onChange={onChange} />
  </div>
);

const BasicInfo = ({ data, onChange }) => (
  <>
    <h2>Basic Information Form Two</h2>

    <div className="form-row">
      <TextInput label="Name" name="name" value={data.name} onChange={onChange} />
      <TextInput label="Email" name="email" value={data.email} onChange={onChange} />
      <TextInput label="Phone" name="phone" value={data.phone} onChange={onChange} />
    </div>

    <div className="form-row">
      <TextInput label="Location" name="location" value={data.location} onChange={onChange} />
      <TextInput label="Website" name="website" value={data.website} onChange={onChange} />
    </div>

    <div className="form-row">
      <TextInput label="LinkedIn" name="linkedin" value={data.linkedin} onChange={onChange} />
      <TextInput label="GitHub" name="github" value={data.github} onChange={onChange} />
    </div>
  </>
);

const EducationSection = ({ education, onChange, addEntry, removeEntry }) => (
  <>
    <h2>Education</h2>
    {education.map((edu, i) => (
      <div key={i} className="dynamic-section">
        <TextInput
          label="Institution"
          value={edu.institution}
          onChange={e => onChange("education", i, "institution", e.target.value)}
        />

        <div className="form-row">
          <TextInput
            label="Date"
            value={edu.date}
            onChange={e => onChange("education", i, "date", e.target.value)}
          />
          <TextInput
            label="GPA"
            value={edu.gpa}
            onChange={e => onChange("education", i, "gpa", e.target.value)}
          />
        </div>

        <TextAreaInput
          label="Coursework"
          value={edu.coursework}
          onChange={e => onChange("education", i, "coursework", e.target.value)}
        />

        {education.length > 1 && (
          <button type="button" onClick={() => removeEntry("education", i)}>
            Remove Education
          </button>
        )}
        <hr />
      </div>
    ))}

    <button type="button" onClick={() => addEntry("education")}>Add Education</button>
  </>
);

const ExperienceSection = ({
  experience,
  onChange,
  onBulletChange,
  addEntry,
  removeEntry,
  addBullet,
  removeBullet,
}) => (
  <>
    <h2>Experience</h2>
    {experience.map((exp, i) => (
      <div key={i} className="dynamic-section">
        <div className="form-row">
          <TextInput
            label="Title"
            value={exp.title}
            onChange={e => onChange("experience", i, "title", e.target.value)}
          />
          <TextInput
            label="Company"
            value={exp.company}
            onChange={e => onChange("experience", i, "company", e.target.value)}
          />
        </div>

        <div className="form-row">
          <TextInput
            label="Location"
            value={exp.location}
            onChange={e => onChange("experience", i, "location", e.target.value)}
          />
          <TextInput
            label="Date"
            value={exp.date}
            onChange={e => onChange("experience", i, "date", e.target.value)}
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
                x
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
    <button type="button" onClick={() => addEntry("experience")}>Add Experience</button>
  </>
);

const ProjectsSection = ({ projects, onChange, addEntry, removeEntry }) => (
  <>
    <h2>Projects</h2>
    {projects.map((proj, i) => (
      <div key={i} className="dynamic-section">
        <div className="form-row">
          <TextInput
            label="Name"
            value={proj.name}
            onChange={e => onChange("projects", i, "name", e.target.value)}
          />
          <TextInput
            label="Link"
            value={proj.link}
            onChange={e => onChange("projects", i, "link", e.target.value)}
          />
        </div>

        <div className="form-row">
          <TextInput
            label="Date"
            value={proj.date}
            onChange={e => onChange("projects", i, "date", e.target.value)}
          />
          <TextInput
            label="Skills"
            value={proj.tools}
            onChange={e => onChange("projects", i, "tools", e.target.value)}
          />
        </div>

        <TextAreaInput
          label="Description"
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
    <button type="button" onClick={() => addEntry("projects")}>Add Project</button>
  </>
);

const SkillsSection = ({ skills, onChange, addSkill, removeSkill }) => (
  <>
    <h2>Skills</h2>

    <h3>Languages</h3>
    <div className="skills-row">
      {skills.languages.map((lang, i) => (
        <div className="form-group skill-group" key={i}>
          <input
            type="text"
            value={lang}
            readOnly
          />
          <button
            type="button"
            onClick={() => removeSkill("languages", i)}
            className="remove-x"
            aria-label={`Remove language ${lang}`}
          >
            ×
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addSkill("languages")}>Add Language</button>
    </div>

    <h3>Tools & Technologies</h3>
    <div className="skills-row">
      {skills.tools.map((tool, i) => (
        <div className="form-group skill-group" key={i}>
          <input
            type="text"
            value={tool}
            readOnly
          />
          <button
            type="button"
            onClick={() => removeSkill("tools", i)}
            className="remove-x"
            aria-label={`Remove tool ${tool}`}
          >
            ×
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addSkill("tools")}>Add Tool</button>
    </div>
  </>
);

const ResumeFormTwo  = () => {
  const { state } = useLocation();
  const templateId = state?.templateId || "template1";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "John Doe",
    location: "Your Location",
    email: "youremail@yourdomain.com",
    phone: "0541 999 99 99",
    website: "yourwebsite.com",
    linkedin: "linkedin.com/in/yourusername",
    github: "github.com/yourusername",
    education: [
      {
        institution: "University of Pennsylvania, BS in Computer Science",
        date: "Sept 2000 – May 2005",
        gpa: "GPA: 3.9/4.0",
        coursework:
          "Computer Architecture, Comparison of Learning Algorithms, Computational Theory",
      },
    ],
    experience: [
      {
        title: "Software Engineer",
        company: "Apple",
        location: "Cupertino, CA",
        date: "June 2005 – Aug 2007",
        bullets: [
          "Reduced time to render user buddy lists by 75% by implementing a prediction algorithm",
          "Integrated iChat with Spotlight Search",
          "Redesigned chat file format",
        ],
      },
    ],
    projects: [
      {
        name: "Multi-User Drawing Tool",
        link: "github.com/name/repo",
        description: "Developed synchronized electronic classroom chalkboard",
        tools: "C++, MFC",
        date: "",
      },
    ],
    skills: {
      languages: ["C++", "C", "Java", "Objective-C", "C#", "SQL", "JavaScript"],
      tools: [".NET", "Microsoft SQL Server", "XCode", "Interface Builder"],
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = value;
    setFormData((prev) => ({ ...prev, [section]: updatedSection }));
  };

  const handleBulletChange = (section, expIndex, bulletIndex, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[expIndex].bullets[bulletIndex] = value;
    setFormData((prev) => ({ ...prev, [section]: updatedSection }));
  };

  const addEntry = (section) => {
    let newEntry;
    switch (section) {
      case "education":
        newEntry = { institution: "", date: "", gpa: "", coursework: "" };
        break;
      case "experience":
        newEntry = { title: "", company: "", location: "", date: "", bullets: [""] };
        break;
      case "projects":
        newEntry = { name: "", link: "", description: "", tools: "", date: "" };
        break;
      default:
        return;
    }
    setFormData((prev) => ({ ...prev, [section]: [...prev[section], newEntry] }));
  };

  const removeEntry = (section, index) => {
    const updatedSection = [...formData[section]];
    updatedSection.splice(index, 1);
    setFormData((prev) => ({ ...prev, [section]: updatedSection }));
  };

  const addBullet = (expIndex) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].bullets.push("");
    setFormData((prev) => ({ ...prev, experience: updatedExperience }));
  };

  const removeBullet = (expIndex, bulletIndex) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].bullets.splice(bulletIndex, 1);
    setFormData((prev) => ({ ...prev, experience: updatedExperience }));
  };

  // For adding/removing skills
  const addSkill = (type) => {
    // Prompt for new skill
    const newSkill = prompt(`Enter new ${type === "languages" ? "language" : "tool"}`);
    if (!newSkill) return;

    // Prevent duplicates
    if (formData.skills[type].includes(newSkill.trim())) return;

    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: [...prev.skills[type], newSkill.trim()],
      },
    }));
  };

  const removeSkill = (type, index) => {
    const updatedSkills = [...formData.skills[type]];
    updatedSkills.splice(index, 1);
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: updatedSkills,
      },
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // For demo, just alert or navigate
    // alert("Resume data ready to generate!");
    e.preventDefault();
    navigate("/resume", {
      state: { formData, templateId },
    });
  };

  return (
    <form className="resume-form" onSubmit={onSubmit}>
      <BasicInfo data={formData} onChange={handleChange} />

      <EducationSection
        education={formData.education}
        onChange={handleArrayChange}
        addEntry={addEntry}
        removeEntry={removeEntry}
      />

      <ExperienceSection
        experience={formData.experience}
        onChange={handleArrayChange}
        onBulletChange={handleBulletChange}
        addEntry={addEntry}
        removeEntry={removeEntry}
        addBullet={addBullet}
        removeBullet={removeBullet}
      />

      <ProjectsSection
        projects={formData.projects}
        onChange={handleArrayChange}
        addEntry={addEntry}
        removeEntry={removeEntry}
      />

      <SkillsSection
        skills={formData.skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
      />

      <button type="submit" className="generate-btn">Generate Resume</button>
    </form>
  );
};

export default ResumeFormTwo ;
