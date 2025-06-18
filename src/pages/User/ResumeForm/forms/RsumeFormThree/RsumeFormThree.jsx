

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
const ResumeFormThree = ({ templateId = "template1" }) => {
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

export default ResumeFormThree;