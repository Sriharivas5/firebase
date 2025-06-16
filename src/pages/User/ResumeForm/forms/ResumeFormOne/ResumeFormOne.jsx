




// // src/pages/ResumeFormOne.jsx


// import React, { useState } from "react";
// import PersonalDetails from "../compos/PersonalDetails";
// import Education from "../compos/Education";
// import Experience from "../compos/WorkExperience";
// import Skills from "../compos/SkillsAndTools";
// import "./ResumeFormOne.scss"


// const FormOne = () => {
//   // Full default state
//   const [personalData, setPersonalData] = useState({});
//   const [educationData, setEducationData] = useState([
//     {
//       degree: "",
//       specialization: "",
//       institution: "",
//       board: "",
//       location: "",
//       startYear: "",
//       endYear: "",
//       grade: "",
//       notes: ""
//     }
//   ]);
//   const [experienceData, setExperienceData] = useState([
//     {
//       jobTitle: "",
//       company: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       present: false,
//       employmentType: "",
//       bullets: [""],
//       technologies: ""
//     }
//   ]);
//   const [skillsData, setSkillsData] = useState({
//     technical: "",
//     soft: "",
//     tools: "",
//     languages: "",
//     level: ""
//   });

//   // Handlers
//   const handlePersonalChange = (field, value) =>
//     setPersonalData(prev => ({ ...prev, [field]: value }));

//   const handleEducationChange = (idx, field, value) => {
//     const arr = [...educationData];
//     arr[idx][field] = value;
//     setEducationData(arr);
//   };

//   const handleExperienceChange = (idx, field, value) => {
//     const arr = [...experienceData];
//     arr[idx][field] = value;
//     setExperienceData(arr);
//   };

//   const handleBulletChange = (idx, bi, value) => {
//     const arr = [...experienceData];
//     arr[idx].bullets[bi] = value;
//     setExperienceData(arr);
//   };

//   const addEducation = () =>
//     setEducationData(prev => [...prev, {
//       degree: "",
//       specialization: "",
//       institution: "",
//       board: "",
//       location: "",
//       startYear: "",
//       endYear: "",
//       grade: "",
//       notes: ""
//     }]);

//   const removeEducation = idx =>
//     setEducationData(prev => prev.filter((_, i) => i !== idx));

//   const addExperience = () =>
//     setExperienceData(prev => [...prev, {
//       jobTitle: "",
//       company: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       present: false,
//       employmentType: "",
//       bullets: [""],
//       technologies: ""
//     }]);

//   const removeExperience = idx =>
//     setExperienceData(prev => prev.filter((_, i) => i !== idx));

//   const addBullet = idx => {
//     const arr = [...experienceData];
//     arr[idx].bullets.push("");
//     setExperienceData(arr);
//   };

//   const removeBullet = (idx, bi) => {
//     const arr = [...experienceData];
//     arr[idx].bullets.splice(bi, 1);
//     setExperienceData(arr);
//   };

//   const handleSkillsChange = (field, value) =>
//     setSkillsData(prev => ({ ...prev, [field]: value }));

//   // Example: only show a subset of fields in this form
//   const personalFields = ["firstName", "lastName", "primaryEmail", "phone","nationality"];
//   const educationFields = ["institution", "startYear", "endYear"];
//   const experienceFields = ["company", "jobTitle", "startDate", "endDate"];
//   const skillsFields = ["technical", "tools"];

//   return (
//     <div >
//       <h1>Resume Builder — FormOne</h1>

//       <PersonalDetails
//         data={personalData}
//         onChange={handlePersonalChange}
//         fieldsToShow={personalFields}
//           className="form-one-basicInfo"
//       />

//       <Education
//         data={educationData}
//         onChange={handleEducationChange}
//         addEntry={addEducation}
//         removeEntry={removeEducation}
//         fieldsToShow={educationFields}
//       />

//       <Experience
//         data={experienceData}
//         onChange={handleExperienceChange}
//         onBulletChange={handleBulletChange}
//         addEntry={addExperience}
//         removeEntry={removeExperience}
//         addBullet={addBullet}
//         removeBullet={removeBullet}
//         fieldsToShow={experienceFields}
//       />

//       <Skills
//         data={skillsData}
//         onChange={handleSkillsChange}
//         fieldsToShow={skillsFields}
//       />
//     </div>
//   );
// };

// export default FormOne;


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResumeFormOne.scss";

// import BasicInfo from "../compos/PersonalDetails";
// import EducationSection from "../components/EducationSection";
// import ExperienceSection from "../components/ExperienceSection";
// import ProjectsSection from "../components/ProjectsSection";
// import SkillsSection from "../components/SkillsSection";


import BasicInfo from "../compos/PersonalDetails";
import EducationSection from "../compos/Education";
import ExperienceSection from "../compos/WorkExperience";
import ProjectsSection from "../compos/Projects";
import SkillsSection from "../compos/SkillsAndTools";
import CertificationsSection from "../compos/Certifications"
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
        gradingType: "cgpa",
      },
    ],
    experience: [
      {
        title: "Software Engineering Intern",
        company: "Spotify",
        location: "New York, NY",
        startDate: "2021-06",
        endDate: "2021-08",
        bullets: [
          "Built internal dashboard using React and TypeScript to streamline analytics workflows.",
          "Reduced API response time by 25% through optimized queries and caching.",
          "Collaborated with cross-functional teams to deploy features to production.",
        ],
      },
    ],
    projects: [
      {
        name: "Portfolio Website",
        link: "https://janesmith.dev",
        startDate: "2022-01",
        endDate: "2022-12",
        tools: "React, SCSS, Netlify",
        description:
          "Designed and developed a responsive portfolio website to showcase projects and blogs.",
      },
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "Python"],
      tools: ["React", "Node.js", "Express"],
    },
    certifications: [
      {
        name: '',
        organization: '',
        issueDate: '',
        expiryDate: '',
        url: '',
        id: '',
      },
    ],
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

  // Original submit logic
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/resume", { state: { formData, templateId } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (idx, field, value, section) => {
    const list = Array.isArray(formData[section]) ? [...formData[section]] : [];
    list[idx] = { ...list[idx], [field]: value };
    setFormData({ ...formData, [section]: list });
  };
  const handleBulletChange = (section, i, j, value) => {
    const updated = [...formData[section]];
    updated[i].bullets[j] = value;
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  const addEntry = (section) => {
    const newEntry = {
      education: {
        institution: "",
        educationLevel: "",
        startDate: "",
        endDate: "",
        gpa: "",
        gradingType: "cgpa",
      },
      experience: {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        bullets: [""],
      },
      projects: {
        name: "",
        link: "",
        startDate: "",
        endDate: "",
        tools: "",
        description: "",
      },
    }[section];

    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newEntry],
    }));
  };

  const removeEntry = (section, i) => {
    const updated = [...formData[section]];
    updated.splice(i, 1);
    setFormData((prev) => ({ ...prev, [section]: updated }));
  };

  const addBullet = (i) => {
    const updated = [...formData.experience];
    updated[i].bullets.push("");
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const removeBullet = (i, j) => {
    const updated = [...formData.experience];
    updated[i].bullets.splice(j, 1);
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  const addSkill = (type) => {
    const value = newSkill[type].trim();
    if (!value || formData.skills[type].includes(value)) return;
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: [...prev.skills[type], value],
      },
    }));
    setNewSkill((prev) => ({ ...prev, [type]: "" }));
  };

  const removeSkill = (type, i) => {
    const updated = [...formData.skills[type]];
    updated.splice(i, 1);
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [type]: updated,
      },
    }));
  };
  const steps = [
    <BasicInfo key="basic"
      data={formData}
      onChange={handleChange}
      fieldsToShow={['firstName', 'primaryPhone', 'dob', 'objective']}
    />,
    <EducationSection
      key="edu"
      education={formData.education}
      onChange={handleArrayChange}
      addEntry={addEntry}
      removeEntry={removeEntry}
      fieldsToShow={['degree', 'startYear',]}

    />,
    <ExperienceSection
      data={formData.experience}
      onChange={(idx, field, value) => handleArrayChange(idx, field, value, "experience")}
      onBulletChange={(idx, bi, val) => {
        const updated = [...formData.experience];
        if (!updated[idx].bullets) updated[idx].bullets = [];
        updated[idx].bullets[bi] = val;
        setFormData({ ...formData, experience: updated });
      }}
      addEntry={addEntry}
      removeEntry={removeEntry}
      addBullet={idx => {
        const updated = [...formData.experience];
        if (!updated[idx].bullets) updated[idx].bullets = [];
        updated[idx].bullets.push("");
        setFormData({ ...formData, experience: updated });
      }}
      removeBullet={(idx, bi) => {
        const updated = [...formData.experience];
        updated[idx].bullets?.splice(bi, 1);
        setFormData({ ...formData, experience: updated });
      }}
      fieldsToShow={["jobTitle", "company", "startDate", "endDate", "bullets", "addBullet"]}
    />,
    <ProjectsSection
      data={formData.projects}
      onChange={(idx, field, value) => handleArrayChange(idx, field, value, "projects")}
      addEntry={() => {
        setFormData({
          ...formData,
          projects: [...formData.projects, {
            title: "",
            description: "",
            role: "",
            technologies: "",
            startDate: "",
            endDate: "",
            link: "",
            teamSize: "",
            status: ""
          }]
        });
      }}
      removeEntry={(idx) => {
        const updated = [...formData.projects];
        updated.splice(idx, 1);
        setFormData({ ...formData, projects: updated });
      }}
      fieldsToShow={["title", "description", "link", "status"]}
    />
    ,
    <SkillsSection
      data={formData.skills}
      fieldsToShow={["languages", "tools"]}
      addSkill={(type, value) => {
        if (!formData.skills[type]) formData.skills[type] = [];
        setFormData((prev) => ({
          ...prev,
          skills: {
            ...prev.skills,
            [type]: [...prev.skills[type], value],
          },
        }));
      }}
      removeSkill={(type, idx) => {
        const updated = [...formData.skills[type]];
        updated.splice(idx, 1);
        setFormData((prev) => ({
          ...prev,
          skills: {
            ...prev.skills,
            [type]: updated,
          },
        }));
      }}
    />
    ,
    <CertificationsSection
      certifications={formData.certifications}
      onChange={handleChange}
      addEntry={addEntry}
      removeEntry={removeEntry}
      fieldsToShow={['name', 'organization', 'issueDate', 'expiryDate', 'url', 'id']}
    />

  ];


  return (
    <form className="resume-form1" onSubmit={onSubmit}>
      {steps[step]}
      <div className="wizard-buttons">
        {step > 0 && (
          <button type="button" onClick={() => setStep((s) => s - 1)}>
            Prev
          </button>
        )}
        {step < steps.length ? (
          <button type="button" onClick={() => setStep((s) => s + 1)}>
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
