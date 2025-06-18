// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./ResumeFormTwo.scss";
// import BasicInfo from "../compos/PersonalDetails";
// import EducationSection from "../compos/Education";
// import ExperienceSection from "../compos/WorkExperience";
// import ProjectsSection from "../compos/Projects";
// import SkillsSection from "../compos/SkillsAndTools";
// import CertificationsSection from "../compos/Certifications"
// import ExtracurricularActivitiesSection from "../compos/ExtracurricularActivities"

// const ResumeFormTwo = () => {
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
//         gradingType: "cgpa",
//       },
//     ],
//     experience: [
//       {
//         title: "Software Engineering Intern",
//         company: "Spotify",
//         location: "New York, NY",
//         startDate: "2021-06",
//         endDate: "2021-08",
//         bullets: [
//           "Built internal dashboard using React and TypeScript to streamline analytics workflows.",
//           "Reduced API response time by 25% through optimized queries and caching.",
//           "Collaborated with cross-functional teams to deploy features to production.",
//         ],
//       },
//     ],
//     projects: [
//       {
//         name: "Portfolio Website",
//         link: "https://janesmith.dev",
//         startDate: "2022-01",
//         endDate: "2022-12",
//         tools: "React, SCSS, Netlify",
//         description:
//           "Designed and developed a responsive portfolio website to showcase projects and blogs.",
//       },
//     ],
//     skills: {
//       languages: ["JavaScript", "TypeScript", "Python"],
//       tools: ["React", "Node.js", "Express"],
//     },
//     certifications: [
//       {
//         name: '',
//         organization: '',
//         issueDate: '',
//         expiryDate: '',
//         url: '',
//         id: '',
//       },
//     ],
//     extracurricularActivities: [
//       {
//         role: "",
//         organization: "",
//         duration: "",
//         description: "",
//       },
//     ],
//   };

//   const [formData, setFormData] = useState(() => {
//     const saved = localStorage.getItem("resume-form");
//     return saved ? JSON.parse(saved) : defaultData;
//   });
//   const [newSkill, setNewSkill] = useState({ languages: "", tools: "" });
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     localStorage.setItem("resume-form", JSON.stringify(formData));
//   }, [formData]);

//   // Original submit logic
//   const onSubmit = (e) => {
//     e.preventDefault();
//     navigate("/resume", { state: { formData, templateId } });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleArrayChange = (idx, field, value, section) => {
//     const list = Array.isArray(formData[section]) ? [...formData[section]] : [];
//     list[idx] = { ...list[idx], [field]: value };
//     setFormData({ ...formData, [section]: list });
//   };
//   const handleBulletChange = (section, i, j, value) => {
//     const updated = [...formData[section]];
//     updated[i].bullets[j] = value;
//     setFormData((prev) => ({ ...prev, [section]: updated }));
//   };

//   const addEntry = (section) => {
//     const newEntry = {
//       education: {
//         institution: "",
//         educationLevel: "",
//         startDate: "",
//         endDate: "",
//         gpa: "",
//         gradingType: "cgpa",
//       },
//       experience: {
//         title: "",
//         company: "",
//         location: "",
//         startDate: "",
//         endDate: "",
//         bullets: [""],
//       },
//       projects: {
//         name: "",
//         link: "",
//         startDate: "",
//         endDate: "",
//         tools: "",
//         description: "",
//       },
//       extracurricularActivities: {
//         role: "",
//         organization: "",
//         duration: "",
//         description: "",
//       },
//     }[section];

//     setFormData((prev) => {
//       const currentList = Array.isArray(prev[section]) ? prev[section] : [];
//       return {
//         ...prev,
//         [section]: [...currentList, newEntry],
//       };
//     });
//   };

//   const removeEntry = (section, i) => {
//     const updated = [...formData[section]];
//     updated.splice(i, 1);
//     setFormData((prev) => ({ ...prev, [section]: updated }));
//   };

//   const addBullet = (i) => {
//     const updated = [...formData.experience];
//     updated[i].bullets.push("");
//     setFormData((prev) => ({ ...prev, experience: updated }));
//   };

//   const removeBullet = (i, j) => {
//     const updated = [...formData.experience];
//     updated[i].bullets.splice(j, 1);
//     setFormData((prev) => ({ ...prev, experience: updated }));
//   };

//   const addSkill = (type) => {
//     const value = newSkill[type].trim();
//     if (!value || formData.skills[type].includes(value)) return;
//     setFormData((prev) => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [type]: [...prev.skills[type], value],
//       },
//     }));
//     setNewSkill((prev) => ({ ...prev, [type]: "" }));
//   };

//   const removeSkill = (type, i) => {
//     const updated = [...formData.skills[type]];
//     updated.splice(i, 1);
//     setFormData((prev) => ({
//       ...prev,
//       skills: {
//         ...prev.skills,
//         [type]: updated,
//       },
//     }));
//   };
//   const steps = [
//     <BasicInfo key="basic"
//       data={formData}
//       onChange={handleChange}
//       fieldsToShow={['firstName', 'primaryPhone', 'dob', 'objective']}
//     />,
//     <EducationSection
//       key="edu"
//       education={formData.education}
//       onChange={handleArrayChange}
//       addEntry={addEntry}
//       removeEntry={removeEntry}
//       fieldsToShow={['degree', 'startYear']}
//     />
//     ,
//     <ExperienceSection
//       data={formData.experience}
//       onChange={(idx, field, value) => handleArrayChange(idx, field, value, "experience")}
//       onBulletChange={(idx, bi, val) => {
//         const updated = [...formData.experience];
//         if (!updated[idx].bullets) updated[idx].bullets = [];
//         updated[idx].bullets[bi] = val;
//         setFormData({ ...formData, experience: updated });
//       }}
//       addEntry={addEntry}
//       removeEntry={removeEntry}
//       addBullet={idx => {
//         const updated = [...formData.experience];
//         if (!updated[idx].bullets) updated[idx].bullets = [];
//         updated[idx].bullets.push("");
//         setFormData({ ...formData, experience: updated });
//       }}
//       removeBullet={(idx, bi) => {
//         const updated = [...formData.experience];
//         updated[idx].bullets?.splice(bi, 1);
//         setFormData({ ...formData, experience: updated });
//       }}
//       fieldsToShow={["jobTitle", "company", "startDate", "endDate", "bullets", "addBullet"]}
//     />,
//     <ProjectsSection
//       data={formData.projects}
//       onChange={(idx, field, value) => handleArrayChange(idx, field, value, "projects")}
//       addEntry={() => {
//         setFormData({
//           ...formData,
//           projects: [...formData.projects, {
//             title: "",
//             description: "",
//             role: "",
//             technologies: "",
//             startDate: "",
//             endDate: "",
//             link: "",
//             teamSize: "",
//             status: ""
//           }]
//         });
//       }}
//       removeEntry={(idx) => {
//         const updated = [...formData.projects];
//         updated.splice(idx, 1);
//         setFormData({ ...formData, projects: updated });
//       }}
//       fieldsToShow={["title", "description", "link", "status"]}
//     />
//     ,
//     <SkillsSection
//       data={formData.skills}
//       fieldsToShow={["languages", "tools"]}
//       addSkill={(type, value) => {
//         if (!formData.skills[type]) formData.skills[type] = [];
//         setFormData((prev) => ({
//           ...prev,
//           skills: {
//             ...prev.skills,
//             [type]: [...prev.skills[type], value],
//           },
//         }));
//       }}
//       removeSkill={(type, idx) => {
//         const updated = [...formData.skills[type]];
//         updated.splice(idx, 1);
//         setFormData((prev) => ({
//           ...prev,
//           skills: {
//             ...prev.skills,
//             [type]: updated,
//           },
//         }));
//       }}
//     />
//     ,
//     <CertificationsSection
//       certifications={formData.certifications}
//       onChange={handleChange}
//       addEntry={addEntry}
//       removeEntry={removeEntry}
//       fieldsToShow={['name', 'organization', 'issueDate', 'expiryDate', 'url', 'id']}
//     />,
//     <ExtracurricularActivitiesSection
//       data={formData.extracurricularActivities}
//       onChange={(idx, field, value) =>
//         handleArrayChange(idx, field, value, "extracurricularActivities")
//       }
//       addEntry={() => addEntry("extracurricularActivities")}
//       removeEntry={(idx) => removeEntry("extracurricularActivities", idx)}
//       fieldsToShow={["role", "organization", "duration", "description"]}
//     />
//   ];

//   return (
//     <form className="resume-form1" onSubmit={onSubmit}>
//       {steps[step]}
//       <div className="wizard-buttons">
//         {step > 0 && (
//           <button type="button" onClick={() => setStep((s) => s - 1)}>
//             Prev
//           </button>
//         )}
//         {step < steps.length ? (
//           <button type="button" onClick={() => setStep((s) => s + 1)}>
//             Next
//           </button>
//         ) : (
//           <button type="submit" className="generate-btn">
//             Generate Resume
//           </button>
//         )}
//       </div>
//     </form>
//   );
// };

// export default ResumeFormTwo;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "../compos/PersonalDetails";
import EducationSection from "../compos/Education";
import ExperienceSection from "../compos/WorkExperience";
import ProjectsSection from "../compos/Projects";
import SkillsSection from "../compos/SkillsAndTools";
import CertificationsSection from "../compos/Certifications";
import ExtracurricularActivitiesSection from "../compos/ExtracurricularActivities";
import HackathonsCompetitionsSection from "../compos/HackathonsCompetitions"
const ResumeFormTwo = ({ templateId = "template1" }) => {
  const navigate = useNavigate();

  const defaultData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    objective: "",
    linkedin: "",
    github: "",
    profilePicture: "",
    education: [{
      institution: "",
      degree: "",
      startYear: "",
      endYear: "",
      grade: ""
    }],
    experience: [{
      company: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      bullets: [""]
    }],
    projects: [{
      title: "",
      description: "",
      link: ""
    }],
    skills: {
      languages: [],
      tools: []
    },
    certifications: [{
      name: "",
      organization: "",
      issueDate: ""
    }],
    extracurricularActivities: [{
      role: "",
      organization: "",
      description: ""
    }]
  };

  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setFormData(prev => {
      const updated = [...prev[section]];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const addEntry = (section) => {
    setFormData(prev => {
      const newEntry = {
        education: {
          institution: "",
          degree: "",
          startYear: "",
          endYear: "",
          grade: ""
        },
        experience: {
          company: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          bullets: [""]
        },
        projects: {
          title: "",
          description: "",
          link: ""
        },
        certifications: {
          name: "",
          organization: "",
          issueDate: ""
        },
        extracurricularActivities: {
          role: "",
          organization: "",
          description: ""
        }
      }[section];

      return {
        ...prev,
        [section]: [...prev[section], newEntry]
      };
    });
  };

  const removeEntry = (section, index) => {
    setFormData(prev => {
      const updated = [...prev[section]];
      updated.splice(index, 1);
      return { ...prev, [section]: updated };
    });
  };

  const handleBulletChange = (section, entryIndex, bulletIndex, value) => {
    setFormData(prev => {
      const updated = [...prev[section]];
      updated[entryIndex].bullets[bulletIndex] = value;
      return { ...prev, [section]: updated };
    });
  };

  const addBullet = (section, entryIndex) => {
    setFormData(prev => {
      const updated = [...prev[section]];
      updated[entryIndex].bullets.push("");
      return { ...prev, [section]: updated };
    });
  };

  const removeBullet = (section, entryIndex, bulletIndex) => {
    setFormData(prev => {
      const updated = [...prev[section]];
      updated[entryIndex].bullets.splice(bulletIndex, 1);
      return { ...prev, [section]: updated };
    });
  };

  const handleSkillChange = (type, action, value, index) => {
    setFormData(prev => {
      const updatedSkills = { ...prev.skills };

      if (action === "add") {
        updatedSkills[type] = [...updatedSkills[type], value];
      } else if (action === "remove") {
        updatedSkills[type] = updatedSkills[type].filter((_, i) => i !== index);
      }

      return { ...prev, skills: updatedSkills };
    });
  };

  const [step, setStep] = useState(0);

  const steps = [
    <PersonalDetails
      key="personal"
      data={formData}
      onChange={handleChange}
      fieldsToShow={['firstName', 'lastName', 'email', 'phone', 'objective', 'linkedin', 'github']}
    />,
    <EducationSection
      key="education"
      education={formData.education}
      onChange={(idx, field, value) => handleArrayChange("education", idx, field, value)}
      addEntry={() => addEntry("education")}
      removeEntry={(idx) => removeEntry("education", idx)}
      fieldsToShow={['institution', 'degree', 'startYear', 'endYear']}
    />,
    <ExperienceSection
      data={formData.experience}
      onChange={handleArrayChange}  // Should accept (section, index, field, value)
      onBulletChange={handleBulletChange}  // Should accept (section, entryIndex, bulletIndex, value)
      addEntry={addEntry}  // Should accept (section)
      removeEntry={removeEntry}  // Should accept (section, index)
      addBullet={addBullet}  // Should accept (section, entryIndex)
      removeBullet={removeBullet}  // Should accept (section, entryIndex, bulletIndex)
    />,
    <ProjectsSection
      key="projects"
      data={formData.projects}
      onChange={(idx, field, value) => handleArrayChange("projects", idx, field, value)}
      addEntry={() => addEntry("projects")}
      removeEntry={(idx) => removeEntry("projects", idx)}
      fieldsToShow={['title', 'description', 'link']}
    />,
    <SkillsSection
      key="skills"
      data={formData.skills}
      onAddSkill={(type, value) => handleSkillChange(type, "add", value)}
      onRemoveSkill={(type, index) => handleSkillChange(type, "remove", null, index)}
      fieldsToShow={['languages', 'tools']}
    />,
    <CertificationsSection
      key="certifications"
      certifications={formData.certifications}
      onChange={handleArrayChange}
      addEntry={addEntry}
      removeEntry={removeEntry}
      fieldsToShow={['name', 'organization', 'issueDate', 'url']}
    />,
   
    <HackathonsCompetitionsSection
      data={formData.hackathons}
      onChange={(updatedData) => {
        setFormData({ ...formData, hackathons: updatedData });
      }}
      fieldsToShow={{
        name: true,
        organizer: true,
        date: true,
        rank: true,
        techStack: true
      }}
    />
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debug: Log the current formData before navigation
    console.log("Submitting form data:", formData);

    // Get the latest from localStorage as a double-check
    const latestData = localStorage.getItem("resumeData");
    console.log("Latest from localStorage:", latestData);

    // Use the state formData, but fallback to localStorage if needed
    const dataToSend = formData || (latestData ? JSON.parse(latestData) : null);

    if (!dataToSend) {
      console.error("No form data available to submit");
      return;
    }

    navigate("/resume", {
      state: {
        formData: dataToSend,
        templateId
      }
    });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        {steps[step]}

        <div className="d-flex justify-content-between mt-4">
          {step > 0 && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep(prev => prev - 1)}
            >
              Previous
            </button>
          )}

          {step <= steps.length - 1 ? (
            <button
              type="button"
              className="btn btn-primary ml-auto"
              onClick={() => setStep(prev => prev + 1)}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success ml-auto"
            >
              Generate Resume2
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResumeFormTwo;