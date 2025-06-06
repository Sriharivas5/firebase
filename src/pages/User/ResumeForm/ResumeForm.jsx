// components/ResumeForm.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../../../styles/form.scss";

const ResumeForm = ({ onSubmit }) => {
 const { state } = useLocation();
  const templateId = state?.templateId || "template1";
  const navigate = useNavigate();

  // Initial state with arrays for dynamic sections
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
        coursework: "Computer Architecture, Comparison of Learning Algorithms, Computational Theory",
      }
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
      }
    ],

    publications: [
      {
        title: "3D Finite Element Analysis of No-Insulation Coils",
        authors: "Frodo Baggins, John Doe, Samwise Gamgee",
        doi: "10.1109/TASC.2023.3340648",
      }
    ],

    projects: [
      {
        name: "Multi-User Drawing Tool",
        link: "github.com/name/repo",
        description: "Developed synchronized electronic classroom chalkboard",
        tools: "C++, MFC",
        date: "", // Optional field
      }
    ],

    skills: {
      languages: ["C++", "C", "Java", "Objective-C", "C#", "SQL", "JavaScript"],
      tools: [".NET", "Microsoft SQL Server", "XCode", "Interface Builder"],
    }
  });

  // Handle simple inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle nested dynamic array changes for experience, education, projects, publications
  const handleArrayChange = (section, index, field, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = value;
    setFormData(prev => ({ ...prev, [section]: updatedSection }));
  };

  // Handle adding bullet points for experience
  const handleBulletChange = (section, expIndex, bulletIndex, value) => {
    const updatedSection = [...formData[section]];
    updatedSection[expIndex].bullets[bulletIndex] = value;
    setFormData(prev => ({ ...prev, [section]: updatedSection }));
  };

  // Add new empty entry for a section
  const addEntry = (section) => {
    let newEntry;
    switch(section) {
      case "education":
        newEntry = { institution: "", date: "", gpa: "", coursework: "" };
        break;
      case "experience":
        newEntry = { title: "", company: "", location: "", date: "", bullets: [""] };
        break;
      case "publications":
        newEntry = { title: "", authors: "", doi: "" };
        break;
      case "projects":
        newEntry = { name: "", link: "", description: "", tools: "", date: "" };
        break;
      default:
        return;
    }
    setFormData(prev => ({ ...prev, [section]: [...prev[section], newEntry] }));
  };

  // Add bullet point for experience
  const addBullet = (expIndex) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].bullets.push("");
    setFormData(prev => ({ ...prev, experience: updatedExperience }));
  };

  // Remove bullet point for experience
  const removeBullet = (expIndex, bulletIndex) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[expIndex].bullets.splice(bulletIndex, 1);
    setFormData(prev => ({ ...prev, experience: updatedExperience }));
  };

  // Handle skills add / remove (languages and tools)
  const addSkill = (type) => {
    const updatedSkills = {...formData.skills};
    updatedSkills[type].push("");
    setFormData(prev => ({ ...prev, skills: updatedSkills }));
  };

  const handleSkillChange = (type, index, value) => {
    const updatedSkills = {...formData.skills};
    updatedSkills[type][index] = value;
    setFormData(prev => ({ ...prev, skills: updatedSkills }));
  };

  const removeSkill = (type, index) => {
    const updatedSkills = {...formData.skills};
    updatedSkills[type].splice(index, 1);
    setFormData(prev => ({ ...prev, skills: updatedSkills }));
  };

  // Remove entry for arrays (experience, education, publications, projects)
  const removeEntry = (section, index) => {
    const updatedSection = [...formData[section]];
    updatedSection.splice(index, 1);
    setFormData(prev => ({ ...prev, [section]: updatedSection }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  // };

   const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/resume", {
      state: { formData, templateId },
    });
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>

      {/* Basic Info */}
      <h2>Basic Information</h2>
      {["name", "location", "email", "phone", "website", "linkedin", "github"].map(field => (
        <div className="form-group" key={field}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input type="text" name={field} value={formData[field]} onChange={handleChange} />
        </div>
      ))}

      {/* Education */}
      <h2>Education</h2>
      {formData.education.map((edu, i) => (
        <div key={i} className="dynamic-section">
          <div className="form-group">
            <label>Institution</label>
            <input
              type="text"
              value={edu.institution}
              onChange={e => handleArrayChange("education", i, "institution", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              value={edu.date}
              onChange={e => handleArrayChange("education", i, "date", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>GPA</label>
            <input
              type="text"
              value={edu.gpa}
              onChange={e => handleArrayChange("education", i, "gpa", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Coursework</label>
            <textarea
              rows={3}
              value={edu.coursework}
              onChange={e => handleArrayChange("education", i, "coursework", e.target.value)}
            />
          </div>
          {formData.education.length > 1 && (
            <button type="button" onClick={() => removeEntry("education", i)}>Remove Education</button>
          )}
          <hr />
        </div>
      ))}
      <button type="button" onClick={() => addEntry("education")}>Add Education</button>

      {/* Experience */}
      <h2>Experience</h2>
      {formData.experience.map((exp, i) => (
        <div key={i} className="dynamic-section">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={exp.title}
              onChange={e => handleArrayChange("experience", i, "title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              value={exp.company}
              onChange={e => handleArrayChange("experience", i, "company", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={exp.location}
              onChange={e => handleArrayChange("experience", i, "location", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              value={exp.date}
              onChange={e => handleArrayChange("experience", i, "date", e.target.value)}
            />
          </div>

          <label>Responsibilities / Achievements</label>
          {exp.bullets.map((bullet, idx) => (
            <div key={idx} className="form-group bullet-point">
              <textarea
                rows={2}
                value={bullet}
                onChange={e => handleBulletChange("experience", i, idx, e.target.value)}
              />
              {exp.bullets.length > 1 && (
                <button type="button" onClick={() => removeBullet(i, idx)} className="remove-bullet-btn">
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => addBullet(i)}>Add Bullet Point</button>

          {formData.experience.length > 1 && (
            <button type="button" onClick={() => removeEntry("experience", i)}>Remove Experience</button>
          )}
          <hr />
        </div>
      ))}
      <button type="button" onClick={() => addEntry("experience")}>Add Experience</button>

      {/* Publications */}
      <h2>Publications</h2>
      {formData.publications.map((pub, i) => (
        <div key={i} className="dynamic-section">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={pub.title}
              onChange={e => handleArrayChange("publications", i, "title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Authors</label>
            <input
              type="text"
              value={pub.authors}
              onChange={e => handleArrayChange("publications", i, "authors", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>DOI</label>
            <input
              type="text"
              value={pub.doi}
              onChange={e => handleArrayChange("publications", i, "doi", e.target.value)}
            />
          </div>
          {formData.publications.length > 1 && (
            <button type="button" onClick={() => removeEntry("publications", i)}>Remove Publication</button>
          )}
          <hr />
        </div>
      ))}
      <button type="button" onClick={() => addEntry("publications")}>Add Publication</button>

      {/* Projects */}
      <h2>Projects</h2>
      {formData.projects.map((proj, i) => (
        <div key={i} className="dynamic-section">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={proj.name}
              onChange={e => handleArrayChange("projects", i, "name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Link</label>
            <input
              type="text"
              value={proj.link}
              onChange={e => handleArrayChange("projects", i, "link", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="text"
              value={proj.date}
              onChange={e => handleArrayChange("projects", i, "date", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows={3}
              value={proj.description}
              onChange={e => handleArrayChange("projects", i, "description", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Tools</label>
            <input
              type="text"
              value={proj.tools}
              onChange={e => handleArrayChange("projects", i, "tools", e.target.value)}
            />
          </div>
          {formData.projects.length > 1 && (
            <button type="button" onClick={() => removeEntry("projects", i)}>Remove Project</button>
          )}
          <hr />
        </div>
      ))}
      <button type="button" onClick={() => addEntry("projects")}>Add Project</button>

      {/* Skills */}
      <h2>Skills</h2>

      {/* Languages */}
      <h3>Languages</h3>
      {formData.skills.languages.map((lang, i) => (
        <div className="form-group skill-group" key={i}>
          <input
            type="text"
            value={lang}
            onChange={e => handleSkillChange("languages", i, e.target.value)}
          />
          <button type="button" onClick={() => removeSkill("languages", i)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => addSkill("languages")}>Add Language</button>

      {/* Tools */}
      <h3>Tools & Technologies</h3>
      {formData.skills.tools.map((tool, i) => (
        <div className="form-group skill-group" key={i}>
          <input
            type="text"
            value={tool}
            onChange={e => handleSkillChange("tools", i, e.target.value)}
          />
          <button type="button" onClick={() => removeSkill("tools", i)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => addSkill("tools")}>Add Tool</button>

      <button type="submit" className="generate-btn">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
