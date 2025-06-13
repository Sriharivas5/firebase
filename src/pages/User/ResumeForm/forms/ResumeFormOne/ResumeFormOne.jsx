// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./ResumeFormOne.scss";

// // A generic text input that can also render month pickers
// const TextInput = ({ label, name, value, onChange, type = "text", readOnly = false }) => (
//   <div className="form-group">
//     <label>{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       readOnly={readOnly}
//     />
//   </div>
// );

// const TextAreaInput = ({ label, name, value, onChange, rows = 3 }) => (
//   <div className="form-group">
//     <label>{label}</label>
//     <textarea
//       name={name}
//       rows={rows}
//       value={value}
//       onChange={onChange}
//     />
//   </div>
// );

// const BasicInfo = ({ data, onChange }) => (
//   <>
//     <h2>Basic Information</h2>
//     <div className="form-row">
//       <TextInput label="Name" name="name" value={data.name} onChange={onChange} />
//       <TextInput label="Email" name="email" value={data.email} onChange={onChange} />
//       <TextInput label="Phone" name="phone" value={data.phone} onChange={onChange} />
//     </div>
//     <div className="form-row">
//       <TextInput label="Location" name="location" value={data.location} onChange={onChange} />
//       <TextInput label="Website" name="website" value={data.website} onChange={onChange} />
//     </div>
//     <div className="form-row">
//       <TextInput label="LinkedIn" name="linkedin" value={data.linkedin} onChange={onChange} />
//       <TextInput label="GitHub" name="github" value={data.github} onChange={onChange} />
//     </div>
//   </>
// );

// const ObjectiveSection = ({ value, onChange }) => (
//   <>
//     <h2>Objective / Summary</h2>
//     <TextAreaInput
//       label="Objective"
//       name="objective"
//       value={value}
//       onChange={onChange}
//       rows={4}
//     />
//   </>
// );

// const EducationSection = ({ education, onChange, addEntry, removeEntry }) => (
//   <>
//     <h2>Education</h2>
//     {education.map((edu, i) => (
//       <div key={i} className="dynamic-section">
//         <div className="form-row">
//           <TextInput
//             label="Institution"
//             name="institution"
//             value={edu.institution}
//             onChange={e => onChange("education", i, "institution", e.target.value)}
//           />
//           <TextInput
//             label="Education Level"
//             name="educationLevel"
//             value={edu.educationLevel}
//             onChange={e => onChange("education", i, "educationLevel", e.target.value)}
//           />
//         </div>
//         <div className="form-row">
//           <TextInput
//             label="Start Date"
//             type="month"
//             name="startDate"
//             value={edu.startDate}
//             onChange={e => onChange("education", i, "startDate", e.target.value)}
//           />
//           <TextInput
//             label="End Date"
//             type="month"
//             name="endDate"
//             value={edu.endDate}
//             onChange={e => onChange("education", i, "endDate", e.target.value)}
//           />
//           <TextInput
//             label={edu.gradingType === "percentage" ? "Percentage" : "CGPA"}
//             name="gpa"
//             value={edu.gpa}
//             onChange={e => onChange("education", i, "gpa", e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Grading Type</label>
//           <div className="radio-group">
//             <label>
//               <input
//                 type="radio"
//                 name={`gradingType-${i}`}
//                 value="cgpa"
//                 checked={edu.gradingType === "cgpa"}
//                 onChange={() => onChange("education", i, "gradingType", "cgpa")}
//               />
//               CGPA
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name={`gradingType-${i}`}
//                 value="percentage"
//                 checked={edu.gradingType === "percentage"}
//                 onChange={() => onChange("education", i, "gradingType", "percentage")}
//               />
//               Percentage
//             </label>
//           </div>
//         </div>
//         {education.length > 1 && (
//           <button type="button" onClick={() => removeEntry("education", i)}>
//             Remove Education
//           </button>
//         )}
//         <hr />
//       </div>
//     ))}
//     <button type="button" onClick={() => addEntry("education")}>
//       Add Education
//     </button>
//   </>
// );

// const ExperienceSection = ({
//   experience,
//   onChange,
//   onBulletChange,
//   addEntry,
//   removeEntry,
//   addBullet,
//   removeBullet
// }) => (
//   <>
//     <h2>Experience</h2>
//     {experience.map((exp, i) => (
//       <div key={i} className="dynamic-section">
//         <div className="form-row">
//           <TextInput
//             label="Title"
//             name="title"
//             value={exp.title}
//             onChange={e => onChange("experience", i, "title", e.target.value)}
//           />
//           <TextInput
//             label="Company"
//             name="company"
//             value={exp.company}
//             onChange={e => onChange("experience", i, "company", e.target.value)}
//           />
//         </div>
//         <div className="form-row">
//           <TextInput
//             label="Location"
//             name="location"
//             value={exp.location}
//             onChange={e => onChange("experience", i, "location", e.target.value)}
//           />
//           <TextInput
//             label="Start Date"
//             type="month"
//             name="startDate"
//             value={exp.startDate}
//             onChange={e => onChange("experience", i, "startDate", e.target.value)}
//           />
//           <TextInput
//             label="End Date"
//             type="month"
//             name="endDate"
//             value={exp.endDate}
//             onChange={e => onChange("experience", i, "endDate", e.target.value)}
//           />
//         </div>
//         <label>Responsibilities / Achievements</label>
//         {exp.bullets.map((bullet, idx) => (
//           <div key={idx} className="form-group bullet-point">
//             <textarea
//               rows={2}
//               value={bullet}
//               onChange={e => onBulletChange("experience", i, idx, e.target.value)}
//             />
//             {exp.bullets.length > 1 && (
//               <button
//                 type="button"
//                 onClick={() => removeBullet(i, idx)}
//                 className="remove-bullet-btn"
//               >
//                 ×
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={() => addBullet(i)}>
//           Add Bullet Point
//         </button>
//         {experience.length > 1 && (
//           <button type="button" onClick={() => removeEntry("experience", i)}>
//             Remove Experience
//           </button>
//         )}
//         <hr />
//       </div>
//     ))}
//     <button type="button" onClick={() => addEntry("experience")}>
//       Add Experience
//     </button>
//   </>
// );

// const ProjectsSection = ({ projects, onChange, addEntry, removeEntry }) => (
//   <>
//     <h2>Projects</h2>
//     {projects.map((proj, i) => (
//       <div key={i} className="dynamic-section">
//         <div className="form-row">
//           <TextInput
//             label="Name"
//             name="name"
//             value={proj.name}
//             onChange={e => onChange("projects", i, "name", e.target.value)}
//           />
//           <TextInput
//             label="Link"
//             name="link"
//             value={proj.link}
//             onChange={e => onChange("projects", i, "link", e.target.value)}
//           />
//         </div>
//         <div className="form-row">
//           <TextInput
//             label="Start Date"
//             type="month"
//             name="startDate"
//             value={proj.startDate}
//             onChange={e => onChange("projects", i, "startDate", e.target.value)}
//           />
//           <TextInput
//             label="End Date"
//             type="month"
//             name="endDate"
//             value={proj.endDate}
//             onChange={e => onChange("projects", i, "endDate", e.target.value)}
//           />
//           <TextInput
//             label="Skills"
//             name="tools"
//             value={proj.tools}
//             onChange={e => onChange("projects", i, "tools", e.target.value)}
//           />
//         </div>
//         <TextAreaInput
//           label="Description"
//           name="description"
//           value={proj.description}
//           onChange={e => onChange("projects", i, "description", e.target.value)}
//         />
//         {projects.length > 1 && (
//           <button type="button" onClick={() => removeEntry("projects", i)}>
//             Remove Project
//           </button>
//         )}
//         <hr />
//       </div>
//     ))}
//     <button type="button" onClick={() => addEntry("projects")}>
//       Add Project
//     </button>
//   </>
// );

// const SkillsSection = ({ skills, newSkill, setNewSkill, addSkill, removeSkill }) => (
//   <>
//     <h2>Skills</h2>
//     <h3>Languages</h3>
//     <div className="skills-row">
//       {skills.languages.map((lang, i) => (
//         <div className="form-group skill-group" key={i}>
//           <input type="text" value={lang} readOnly />
//           <button
//             type="button"
//             onClick={() => removeSkill("languages", i)}
//             className="remove-x"
//           >
//             ×
//           </button>
//         </div>
//       ))}
//       <input
//         type="text"
//         value={newSkill.languages}
//         placeholder="Add language"
//         onChange={e => setNewSkill(prev => ({ ...prev, languages: e.target.value }))}
//       />
//       <button type="button" onClick={() => addSkill("languages")}>
//         Add Language
//       </button>
//     </div>
//     <h3>Tools & Technologies</h3>
//     <div className="skills-row">
//       {skills.tools.map((tool, i) => (
//         <div className="form-group skill-group" key={i}>
//           <input type="text" value={tool} readOnly />
//           <button
//             type="button"
//             onClick={() => removeSkill("tools", i)}
//             className="remove-x"
//           >
//             ×
//           </button>
//         </div>
//       ))}
//       <input
//         type="text"
//         value={newSkill.tools}
//         placeholder="Add tool"
//         onChange={e => setNewSkill(prev => ({ ...prev, tools: e.target.value }))}
//       />
//       <button type="button" onClick={() => addSkill("tools")}>
//         Add Tool
//       </button>
//     </div>
//   </>
// );

// const ResumeFormOne = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const templateId = state?.templateId || "template1";

//   const defaultData = {
//     name: "Jane Smith",
//     location: "San Francisco, CA",
//     email: "jane.smith@example.com",
//     phone: "9876543210",
//     website: "janesmith.dev",
//     linkedin: "linkedin.com/in/janesmith",
//     github: "github.com/janesmith",
//     objective:
//       "Aspiring software engineer with a passion for building impactful applications using modern web technologies.",

//     education: [
//       {
//         institution: "Stanford University",
//         educationLevel: "Graduation",
//         startDate: "2018-09",
//         endDate: "2022-06",
//         gpa: "3.9",
//         gradingType: "cgpa"
//       }
//     ],

//     experience: [
//       {
//         title: "Software Engineering Intern",
//         company: "Spotify",
//         location: "New York, NY",
//         date: "June 2021 - August 2021",
//         bullets: [
//           "Built internal dashboard using React and TypeScript to streamline analytics workflows.",
//           "Reduced API response time by 25% through optimized queries and caching.",
//           "Collaborated with cross-functional teams to deploy features to production."
//         ]
//       }
//     ],

//     projects: [
//       {
//         name: "Portfolio Website",
//         link: "https://janesmith.dev",
//         startDate: "2022-01",
//         endDate: "2022-12",
//         tools: "React, SCSS, Netlify",
//         description:
//           "Designed and developed a responsive portfolio website to showcase projects and blogs."
//       },
//       {
//         name: "Task Manager App",
//         link: "https://github.com/janesmith/task-manager",
//         startDate: "2023-01",
//         endDate: "2023-06",
//         tools: "React, Node.js, MongoDB",
//         description:
//           "Full-stack task management tool with user auth, real-time updates, and dark mode."
//       },
//       {
//         name: "AI Chatbot",
//         link: "https://github.com/janesmith/ai-chatbot",
//         startDate: "2023-07",
//         endDate: "2023-12",
//         tools: "Python, Flask, OpenAI API",
//         description:
//           "Built a conversational chatbot using OpenAI's GPT API for answering academic questions."
//       }
//     ],

//     skills: {
//       languages: ["JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS"],
//       tools: ["React", "Node.js", "Express", "MongoDB", "Git", "Docker", "Figma", "Firebase", "Vite"]
//     }
//   };

//   const [formData, setFormData] = useState(() => {
//     const saved = localStorage.getItem("resume-form");
//     return saved ? JSON.parse(saved) : defaultData;
//   });

//   const [newSkill, setNewSkill] = useState({ languages: "", tools: "" });

//   useEffect(() => {
//     localStorage.setItem("resume-form", JSON.stringify(formData));
//   }, [formData]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleArrayChange = (section, i, field, value) => {
//     const updated = [...formData[section]];
//     updated[i][field] = value;
//     setFormData(prev => ({ ...prev, [section]: updated }));
//   };

//   const handleBulletChange = (section, i, j, value) => {
//     const updated = [...formData[section]];
//     updated[i].bullets[j] = value;
//     setFormData(prev => ({ ...prev, [section]: updated }));
//   };

//   const addEntry = section => {
//     const newEntry = {
//       education: {
//         institution: "",
//         educationLevel: "",
//         startDate: "",
//         endDate: "",
//         gpa: "",
//         gradingType: "cgpa"
//       },
//       experience: { title: "", company: "", location: "", date: "", bullets: [""] },
//       projects: { name: "", link: "", startDate: "", endDate: "", tools: "", description: "" }
//     }[section];
//     setFormData(prev => ({
//       ...prev,
//       [section]: [...prev[section], newEntry]
//     }));
//   };

//   const removeEntry = (section, i) => {
//     const updated = [...formData[section]];
//     updated.splice(i, 1);
//     setFormData(prev => ({ ...prev, [section]: updated }));
//   };

//   const addBullet = i => {
//     const updated = [...formData.experience];
//     updated[i].bullets.push("");
//     setFormData(prev => ({ ...prev, experience: updated }));
//   };

//   const removeBullet = (i, j) => {
//     const updated = [...formData.experience];
//     updated[i].bullets.splice(j, 1);
//     setFormData(prev => ({ ...prev, experience: updated }));
//   };

//   const addSkill = type => {
//     const value = newSkill[type].trim();
//     if (!value || formData.skills[type].includes(value)) return;
//     setFormData(prev => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [type]: [...prev.skills[type], value]
//       }
//     }));
//     setNewSkill(prev => ({ ...prev, [type]: "" }));
//   };

//   const removeSkill = (type, i) => {
//     const updated = [...formData.skills[type]];
//     updated.splice(i, 1);
//     setFormData(prev => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [type]: updated
//       }
//     }));
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     navigate("/resume", { state: { formData, templateId } });
//   };

//   return (
//     <form className="resume-form1" onSubmit={onSubmit}>
//       <div className="left">
//         <BasicInfo data={formData} onChange={handleChange} />
//         <ObjectiveSection value={formData.objective} onChange={handleChange} />
//         <EducationSection
//           education={formData.education}
//           onChange={handleArrayChange}
//           addEntry={addEntry}
//           removeEntry={removeEntry}
//         />
//         <ExperienceSection
//           experience={formData.experience}
//           onChange={handleArrayChange}
//           onBulletChange={handleBulletChange}
//           addEntry={addEntry}
//           removeEntry={removeEntry}
//           addBullet={addBullet}
//           removeBullet={removeBullet}
//         />
//       </div>
//       <div className="right">
//         <ProjectsSection
//           projects={formData.projects}
//           onChange={handleArrayChange}
//           addEntry={addEntry}
//           removeEntry={removeEntry}
//         />
//         <SkillsSection
//           skills={formData.skills}
//           newSkill={newSkill}
//           setNewSkill={setNewSkill}
//           addSkill={addSkill}
//           removeSkill={removeSkill}
//         />
//         <button type="submit" className="generate-btn">
//           Generate Resume
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ResumeFormOne;
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResumeFormOne.scss";

// A generic text input that can also render month pickers
const TextInput = ({ label, name, value, onChange, type = "text", readOnly = false }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

const TextAreaInput = ({ label, name, value, onChange, rows = 3 }) => (
  <div className="form-group">
    <label>{label}</label>
    <textarea
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  </div>
);

const BasicInfo = ({ data, onChange }) => (
  <>
    <h2>Basic Information</h2>
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
    <h2>Objective / Summary</h2>
    <TextAreaInput
      label="Objective"
      name="objective"
      value={data.objective}
      onChange={onChange}
      rows={4}
    />
  </>
);

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
        {education.length > 1 && (
          <button type="button" onClick={() => removeEntry("education", i)}>
            Remove Education
          </button>
        )}
        </div>
        
      </div>
    ))}
    <button type="button" onClick={() => addEntry("education")}>
      Add Education
    </button>
  </>
);

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

const SkillsSection = ({ skills, newSkill, setNewSkill, addSkill, removeSkill }) => (
  <>
    <h2>Skills</h2>
    <h3>Languages</h3>
    <div className="skills-row">
      {skills.languages.map((lang, i) => (
        <div className="form-group skill-group" key={i}>
          <input type="text" value={lang} readOnly />
          <button
            type="button"
            onClick={() => removeSkill("languages", i)}
            className="remove-x"
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={newSkill.languages}
        placeholder="Add language"
        onChange={e => setNewSkill(prev => ({ ...prev, languages: e.target.value }))}
      />
      <button type="button" onClick={() => addSkill("languages")}>
        Add Language
      </button>
    </div>
    <h3>Tools & Technologies</h3>
    <div className="skills-row">
      {skills.tools.map((tool, i) => (
        <div className="form-group skill-group" key={i}>
          <input type="text" value={tool} readOnly />
          <button
            type="button"
            onClick={() => removeSkill("tools", i)}
            className="remove-x"
          >
            ×
          </button>
        </div>
      ))}
      <input
        type="text"
        value={newSkill.tools}
        placeholder="Add tool"
        onChange={e => setNewSkill(prev => ({ ...prev, tools: e.target.value }))}
      />
      <button type="button" onClick={() => addSkill("tools")}>
        Add Tool
      </button>
    </div>
  </>
);

const ResumeFormOne = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const templateId = state?.templateId || "template1";

  const defaultData = {
    name: "Jane Smith",
    location: "San Francisco, CA",
    email: "jane.smith@example.com",
    phone: "9876543210",
    website: "janesmith.dev",
    linkedin: "linkedin.com/in/janesmith",
    github: "github.com/janesmith",
    objective:
      "Aspiring software engineer with a passion for building impactful applications using modern web technologies.",

    education: [
      {
        institution: "Stanford University",
        educationLevel: "Graduation",
        startDate: "2018-09",
        endDate: "2022-06",
        gpa: "3.9",
        gradingType: "cgpa"
      }
    ],

    experience: [
      {
        title: "Software Engineering Intern",
        company: "Spotify",
        location: "New York, NY",
        date: "June 2021 - August 2021",
        bullets: [
          "Built internal dashboard using React and TypeScript to streamline analytics workflows.",
          "Reduced API response time by 25% through optimized queries and caching.",
          "Collaborated with cross-functional teams to deploy features to production."
        ]
      }
    ],

    projects: [
      {
        name: "Portfolio Website",
        link: "https://janesmith.dev",
        startDate: "2022-01",
        endDate: "2022-12",
        tools: "React, SCSS, Netlify",
        description:
          "Designed and developed a responsive portfolio website to showcase projects and blogs."
      }
    ],

    skills: {
      languages: ["JavaScript", "TypeScript", "Python"],
      tools: ["React", "Node.js", "Express"]
    }
  };

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("resume-form");
    return saved ? JSON.parse(saved) : defaultData;
  });
  const [newSkill, setNewSkill] = useState({ languages: "", tools: "" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    localStorage.setItem("resume-form", JSON.stringify(formData));
  }, [formData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleArrayChange = (section, i, field, value) => {
    const updated = [...formData[section]];
    updated[i][field] = value;
    setFormData(prev => ({ ...prev, [section]: updated }));
  };
  const handleBulletChange = (section, i, j, value) => {
    const updated = [...formData[section]];
    updated[i].bullets[j] = value;
    setFormData(prev => ({ ...prev, [section]: updated }));
  };
  const addEntry = section => {
    const newEntry = {
      education: {
        institution: "",
        educationLevel: "",
        startDate: "",
        endDate: "",
        gpa: "",
        gradingType: "cgpa"
      },
      experience: { title: "", company: "", location: "", date: "", bullets: [""] },
      projects: { name: "", link: "", startDate: "", endDate: "", tools: "", description: "" }
    }[section];
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newEntry]
    }));
  };
  const removeEntry = (section, i) => {
    const updated = [...formData[section]];
    updated.splice(i, 1);
    setFormData(prev => ({ ...prev, [section]: updated }));
  };
  const addBullet = i => {
    const updated = [...formData.experience];
    updated[i].bullets.push("");
    setFormData(prev => ({ ...prev, experience: updated }));
  };
  const removeBullet = (i, j) => {
    const updated = [...formData.experience];
    updated[i].bullets.splice(j, 1);
    setFormData(prev => ({ ...prev, experience: updated }));
  };
  const addSkill = type => {
    const value = newSkill[type].trim();
    if (!value || formData.skills[type].includes(value)) return;
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: [...prev.skills[type], value]
      }
    }));
    setNewSkill(prev => ({ ...prev, [type]: "" }));
  };
  const removeSkill = (type, i) => {
    const updated = [...formData.skills[type]];
    updated.splice(i, 1);
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: updated
      }
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    navigate("/resume", { state: { formData, templateId } });
  };

  const steps = [
    <BasicInfo key="basic" data={formData} onChange={handleChange} />,
    <EducationSection
      key="edu"
      education={formData.education}
      onChange={handleArrayChange}
      addEntry={addEntry}
      removeEntry={removeEntry}
    />,
    <ExperienceSection
      key="exp"
      experience={formData.experience}
      onChange={handleArrayChange}
      onBulletChange={handleBulletChange}
      addEntry={addEntry}
      removeEntry={removeEntry}
      addBullet={addBullet}
      removeBullet={removeBullet}
    />,
    <div key="skills-projects">
      <ProjectsSection
        projects={formData.projects}
        onChange={handleArrayChange}
        addEntry={addEntry}
        removeEntry={removeEntry}
      />
      <SkillsSection
        skills={formData.skills}
        newSkill={newSkill}
        setNewSkill={setNewSkill}
        addSkill={addSkill}
        removeSkill={removeSkill}
      />
    </div>
  ];

  return (
    <form className="resume-form1" onSubmit={onSubmit}>
      {steps[step]}
      <div className="wizard-buttons">
        {step > 0 && (
          <button type="button" onClick={() => setStep(s => s - 1)}>
            Prev
          </button>
        )}
        {step < steps.length - 1 ? (
          <button type="button" onClick={() => setStep(s => s + 1)}>
            Next
          </button>
        ) : (
          <button type="submit" className="generate-btn">
            Generate Resume
          </button>
        )}
      </div>
    </form>
  );
};

export default ResumeFormOne;
