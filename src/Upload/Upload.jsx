// src/Upload.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Upload.scss"

// Initial default skills
const initialSkills = [
  "React",
  "Firebase",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "MongoDB",
  "Express",
];

const Upload = () => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [customSkill, setCustomSkill] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [mode, setMode] = useState("WFH");

  const [predefinedSkills, setPredefinedSkills] = useState(initialSkills);
  const [newSuggestedSkill, setNewSuggestedSkill] = useState("");

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const addCustomSkill = () => {
    const trimmed = customSkill.trim();
    if (trimmed && !selectedSkills.includes(trimmed)) {
      setSelectedSkills([...selectedSkills, trimmed]);
      setCustomSkill("");
    }
  };

  const handleUpload = async () => {
    const job = {
      role,
      company,
      skills: selectedSkills,
      experience,
      mode,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "jobs"), job);
      alert("Job uploaded!");
      setRole("");
      setCompany("");
      setSelectedSkills([]);
      setExperience("");
      setMode("WFH");
      setCustomSkill("");
    } catch (error) {
      console.error("Error uploading job:", error);
    }
  };

  // 🔽🔽🔽 OPTIONAL FEATURE: Add to predefined skills 🔽🔽🔽
  const addToPredefinedSkills = () => {
    const trimmed = newSuggestedSkill.trim();
    if (
      trimmed &&
      !predefinedSkills.includes(trimmed) &&
      /^[a-zA-Z0-9+.#\s-]{2,20}$/.test(trimmed)
    ) {
      setPredefinedSkills([...predefinedSkills, trimmed]);
      setNewSuggestedSkill("");
    }
  };
  // 🔼🔼🔼 END OPTIONAL FEATURE 🔼🔼🔼

  return (
    <div>
      <h2>Upload Job</h2>

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      /><br /><br />

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      /><br /><br />

      <strong>Skills:</strong>
      <div >
        {predefinedSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => toggleSkill(skill)}

          >
            {skill}
          </button>
        ))}
      </div>

      <input
        placeholder="Add custom skill"
        value={customSkill}
        onChange={(e) => setCustomSkill(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
      />
      <button onClick={addCustomSkill}>Add</button><br /><br />

      <div>
        <strong>Selected Skills:</strong> {selectedSkills.join(", ")}
      </div><br />

      {/* 🔽🔽🔽 OPTIONAL FEATURE: Add to Predefined Skills 🔽🔽🔽 */}
      <div >
        <strong>Add to Suggested Skills:</strong><br />
        <input
          placeholder="New suggested skill"
          value={newSuggestedSkill}
          onChange={(e) => setNewSuggestedSkill(e.target.value)}
        />
        <button onClick={addToPredefinedSkills}>Add to List</button>
      </div>
      {/* 🔼🔼🔼 END OPTIONAL FEATURE 🔼🔼🔼 */}

      <input
        placeholder="Experience (e.g. 2 years)"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      /><br /><br />

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="WFH">WFH</option>
        <option value="WFO">WFO</option>
      </select><br /><br />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
