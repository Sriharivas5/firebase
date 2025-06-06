import { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Upload.scss";

// Initial predefined lists
const initialSkills = [
  "React", "Firebase", "Node.js", "JavaScript", "TypeScript", "Tailwind", "MongoDB", "Express",
];

const initialStacks = [
  "frontend", "backend", "fullstack", "devops", "salesforce", "bpo",
];

const Upload = () => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [customSkill, setCustomSkill] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [mode, setMode] = useState("Remote");

  const [predefinedSkills, setPredefinedSkills] = useState(initialSkills);
  const [newSuggestedSkill, setNewSuggestedSkill] = useState("");

  const [predefinedStacks, setPredefinedStacks] = useState(initialStacks);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [customStack, setCustomStack] = useState("");
  const [newSuggestedStack, setNewSuggestedStack] = useState(""); // ➕ For adding to predefined stacks

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleStack = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  const addCustomSkill = () => {
    const trimmed = customSkill.trim();
    if (trimmed && !selectedSkills.includes(trimmed)) {
      setSelectedSkills([...selectedSkills, trimmed]);
      setCustomSkill("");
    }
  };

  const addCustomStack = () => {
    const trimmed = customStack.trim();
    if (trimmed && !selectedStacks.includes(trimmed)) {
      setSelectedStacks([...selectedStacks, trimmed]);
      setCustomStack("");
    }
  };

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

  const addToPredefinedStacks = () => {
    const trimmed = newSuggestedStack.trim();
    if (
      trimmed &&
      !predefinedStacks.includes(trimmed) &&
      /^[a-zA-Z0-9+.#\s-]{2,20}$/.test(trimmed)
    ) {
      setPredefinedStacks([...predefinedStacks, trimmed]);
      setNewSuggestedStack("");
    }
  };

  const handleUpload = async () => {
    const job = {
      role,
      company,
      skills: selectedSkills,
      experience,
      mode,
      stack: selectedStacks,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "jobs"), job);
      alert("Job uploaded!");
      setRole("");
      setCompany("");
      setSelectedSkills([]);
      setExperience("");
      setMode("Remote");
      setCustomSkill("");
      setSelectedStacks([]);
      setCustomStack("");
    } catch (error) {
      console.error("Error uploading job:", error);
    }
  };

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
      <div>
        {predefinedSkills.map((skill) => (
          <button key={skill} onClick={() => toggleSkill(skill)}>
            {selectedSkills.includes(skill) ? "✅ " : ""}{skill}
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

      {/* Add to Suggested Skills */}
      <div>
        <strong>Add to Suggested Skills:</strong><br />
        <input
          placeholder="New suggested skill"
          value={newSuggestedSkill}
          onChange={(e) => setNewSuggestedSkill(e.target.value)}
        />
        <button onClick={addToPredefinedSkills}>Add to List</button>
      </div><br />

      {/* Stack Selection Section */}
      <strong>Stack:</strong>
      <div>
        {predefinedStacks.map((stack) => (
          <button key={stack} onClick={() => toggleStack(stack)}>
            {selectedStacks.includes(stack) ? "✅ " : ""}{stack}
          </button>
        ))}
      </div>

      <input
        placeholder="Add custom stack"
        value={customStack}
        onChange={(e) => setCustomStack(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addCustomStack()}
      />
      <button onClick={addCustomStack}>Add</button><br /><br />

      <div>
        <strong>Selected Stacks:</strong> {selectedStacks.join(", ")}
      </div><br />

      {/* ➕ Add to Suggested Stack List */}
      <div>
        <strong>Add to Suggested Stacks:</strong><br />
        <input
          placeholder="New suggested stack"
          value={newSuggestedStack}
          onChange={(e) => setNewSuggestedStack(e.target.value)}
        />
        <button onClick={addToPredefinedStacks}>Add to Stack List</button>
      </div><br />

      <input
        placeholder="Experience (e.g. 2 years)"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      /><br /><br />

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="Remote">Remote</option>
        <option value="In Office">In Office</option>
        <option value="Hybrid">Hybrid</option>

      </select><br /><br />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
