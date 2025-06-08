// import { useState } from "react";
// import { db } from "../../../firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import "./Upload.scss";

// // Initial predefined lists
// const initialSkills = [
//   "React",
//   "Firebase",
//   "Node.js",
//   "JavaScript",
//   "TypeScript",
//   "Tailwind",
//   "MongoDB",
//   "Express",
// ];

// const initialStacks = [
//   "frontend",
//   "backend",
//   "fullstack",
//   "devops",
//   "salesforce",
//   "bpo",
// ];

// const Upload = () => {
//   const [role, setRole] = useState("");
//   const [company, setCompany] = useState("");
//   const [customSkill, setCustomSkill] = useState("");
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const [experience, setExperience] = useState("");
//   const [location, setLocation] = useState("");
//   const [applyUrl, setApplyUrl] = useState("");

//   const [predefinedSkills, setPredefinedSkills] = useState(initialSkills);
//   const [newSuggestedSkill, setNewSuggestedSkill] = useState("");

//   const [predefinedStacks, setPredefinedStacks] = useState(initialStacks);
//   const [selectedStacks, setSelectedStacks] = useState([]);
//   const [customStack, setCustomStack] = useState("");
//   const [newSuggestedStack, setNewSuggestedStack] = useState("");

//   const toggleSkill = (skill) => {
//     setSelectedSkills((prev) =>
//       prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
//     );
//   };

//   const toggleStack = (stack) => {
//     setSelectedStacks((prev) =>
//       prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
//     );
//   };

//   const addCustomSkill = () => {
//     const trimmed = customSkill.trim();
//     if (trimmed && !selectedSkills.includes(trimmed)) {
//       setSelectedSkills([...selectedSkills, trimmed]);
//       setCustomSkill("");
//     }
//   };

//   const addCustomStack = () => {
//     const trimmed = customStack.trim();
//     if (trimmed && !selectedStacks.includes(trimmed)) {
//       setSelectedStacks([...selectedStacks, trimmed]);
//       setCustomStack("");
//     }
//   };

//   const addToPredefinedSkills = () => {
//     const trimmed = newSuggestedSkill.trim();
//     if (
//       trimmed &&
//       !predefinedSkills.includes(trimmed) &&
//       /^[a-zA-Z0-9+.#\s-]{2,20}$/.test(trimmed)
//     ) {
//       setPredefinedSkills([...predefinedSkills, trimmed]);
//       setNewSuggestedSkill("");
//     }
//   };

//   const addToPredefinedStacks = () => {
//     const trimmed = newSuggestedStack.trim();
//     if (
//       trimmed &&
//       !predefinedStacks.includes(trimmed) &&
//       /^[a-zA-Z0-9+.#\s-]{2,20}$/.test(trimmed)
//     ) {
//       setPredefinedStacks([...predefinedStacks, trimmed]);
//       setNewSuggestedStack("");
//     }
//   };

//   const handleUpload = async () => {
//     const job = {
//       role,
//       company,
//       skills: selectedSkills,
//       experience,
//       location,
//       stack: selectedStacks,
//       applyUrl,
//       createdAt: serverTimestamp(),
//     };

//     try {
//       await addDoc(collection(db, "jobs"), job);
//       alert("Job uploaded!");
//       setRole("");
//       setCompany("");
//       setSelectedSkills([]);
//       setExperience("");
//       setLocation("");
//       setCustomSkill("");
//       setSelectedStacks([]);
//       setCustomStack("");
//       setApplyUrl("");
//     } catch (error) {
//       console.error("Error uploading job:", error);
//     }
//   };

//   return (
//     <div className="UploadContainer">
//       <h2>Upload Job</h2>



import { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Upload.scss";

const initialSkills = [
  "React", "Firebase", "Node.js", "JavaScript",
  "TypeScript", "Tailwind", "MongoDB", "Express",
];

const initialStacks = [
  "frontend", "backend", "fullstack",
  "devops", "salesforce", "bpo",
];

const Upload = () => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [customSkill, setCustomSkill] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [applyUrl, setApplyUrl] = useState("");

  const [predefinedSkills, setPredefinedSkills] = useState(initialSkills);
  const [newSuggestedSkill, setNewSuggestedSkill] = useState("");

  const [predefinedStacks, setPredefinedStacks] = useState(initialStacks);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [customStack, setCustomStack] = useState("");
  const [newSuggestedStack, setNewSuggestedStack] = useState("");

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

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUpload = async () => {
    // VALIDATIONS
    if (!role.trim()) {
      alert("Role is required.");
      return;
    }
    if (!company.trim()) {
      alert("Company name is required.");
      return;
    }
    if (selectedSkills.length === 0) {
      alert("Please select at least one skill.");
      return;
    }
    if (selectedStacks.length === 0) {
      alert("Please select at least one stack.");
      return;
    }
    if (!applyUrl.trim()) {
      alert("Apply URL is required.");
      return;
    }
    if (!isValidUrl(applyUrl)) {
      alert("Please enter a valid URL.");
      return;
    }

    const job = {
      role,
      company,
      skills: selectedSkills,
      experience,
      location,
      stack: selectedStacks,
      applyUrl,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "jobs"), job);
      alert("Job uploaded successfully!");
      setRole("");
      setCompany("");
      setSelectedSkills([]);
      setExperience("");
      setLocation("");
      setCustomSkill("");
      setSelectedStacks([]);
      setCustomStack("");
      setApplyUrl("");
    } catch (error) {
      console.error("Error uploading job:", error);
      alert("Error uploading job. Please try again.");
    }
  };

  return (
    <div className="UploadContainer">
      <h2>Upload Job</h2>
      {/* Side by side Role and Company */}
      <div className="form-row">
        <div className="form-group">
          <input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            required={true}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
          />
        </div>
      </div>

      <div className="selection-section">
        <strong>Skills:</strong>
        <div className="button-group">
          {predefinedSkills.map((skill) => (
            <button
              key={skill}
              type="button"
              className={selectedSkills.includes(skill) ? "selected" : ""}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="input-add">
          <input
            placeholder="Add custom skill"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomSkill()}
            type="text"
          />
          <button type="button" onClick={addCustomSkill}>
            Add
          </button>
        </div>

        <div className="selected-list">
          <strong>Selected Skills:</strong> <p>{selectedSkills.join(", ") || "None"}</p>
        </div>

        <div className="input-add" style={{ marginTop: "1rem" }}>
          <input
            placeholder="New suggested skill"
            value={newSuggestedSkill}
            onChange={(e) => setNewSuggestedSkill(e.target.value)}
            type="text"
          />
          <button type="button" onClick={addToPredefinedSkills}>
            Add to List
          </button>
        </div>
      </div>

      <div className="selection-section">
        <strong>Stack:</strong>
        <div className="button-group">
          {predefinedStacks.map((stack) => (
            <button
              key={stack}
              type="button"
              className={selectedStacks.includes(stack) ? "selected" : ""}
              onClick={() => toggleStack(stack)}
            >
              {stack}
            </button>
          ))}
        </div>

        <div className="input-add">
          <input
            placeholder="Add custom stack"
            value={customStack}
            onChange={(e) => setCustomStack(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCustomStack()}
            type="text"
          />
          <button type="button" onClick={addCustomStack}>
            Add
          </button>
        </div>

        <div className="selected-list">
          <strong>Selected Stacks:</strong> {selectedStacks.join(", ") || "None"}
        </div>

        <div className="input-add" style={{ marginTop: "1rem" }}>
          <input
            placeholder="New suggested stack"
            value={newSuggestedStack}
            onChange={(e) => setNewSuggestedStack(e.target.value)}
            type="text"
          />
          <button type="button" onClick={addToPredefinedStacks}>
            Add to Stack List
          </button>
        </div>
      </div>

      {/* Side by side Experience, Location and Apply URL */}
      <div className="form-row">
        <div className="form-group">
          <input
            placeholder="Experience (e.g. 2 years)"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="text"
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Apply Link (URL)"
            value={applyUrl}
            onChange={(e) => setApplyUrl(e.target.value)}
            type="url"
          />
        </div>
      </div>

      <button className="upload-button" type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default Upload;
