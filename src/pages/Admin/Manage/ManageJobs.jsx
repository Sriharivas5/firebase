import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [editedJob, setEditedJob] = useState({});
  const [newSkill, setNewSkill] = useState("");
  const [newStack, setNewStack] = useState("");

  const fetchJobs = async () => {
    const jobSnapshot = await getDocs(collection(db, "jobs"));
    const jobList = jobSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setJobs(jobList);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      await deleteDoc(doc(db, "jobs", id));
      fetchJobs();
    }
  };

  const startEditing = (job) => {
    setEditingJobId(job.id);
    setEditedJob({ ...job });
    setNewSkill("");
    setNewStack("");
  };

  const cancelEditing = () => {
    setEditingJobId(null);
    setEditedJob({});
    setNewSkill("");
    setNewStack("");
  };

  const handleUpdate = async () => {
    const jobRef = doc(db, "jobs", editingJobId);
    await updateDoc(jobRef, {
      role: editedJob.role,
      company: editedJob.company,
      experience: editedJob.experience,
      mode: editedJob.mode,
      skills: editedJob.skills || [],
      stack: editedJob.stack || [],
    });
    setEditingJobId(null);
    fetchJobs();
  };

  const toggleArrayItem = (key, value) => {
    const currentList = editedJob[key] || [];
    if (currentList.includes(value)) {
      setEditedJob({
        ...editedJob,
        [key]: currentList.filter((item) => item !== value),
      });
    } else {
      setEditedJob({
        ...editedJob,
        [key]: [...currentList, value],
      });
    }
  };

  const addToArrayField = (key, valueSetter, value) => {
    const trimmed = value.trim();
    if (
      trimmed &&
      !(editedJob[key] || []).includes(trimmed)
    ) {
      setEditedJob({
        ...editedJob,
        [key]: [...(editedJob[key] || []), trimmed],
      });
      valueSetter(""); // reset input
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Manage Jobs</h2>
      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
          }}
        >
          {editingJobId === job.id ? (
            <>
              <input
                placeholder="Role"
                value={editedJob.role}
                onChange={(e) =>
                  setEditedJob({ ...editedJob, role: e.target.value })
                }
              />
              <br />
              <input
                placeholder="Company"
                value={editedJob.company}
                onChange={(e) =>
                  setEditedJob({ ...editedJob, company: e.target.value })
                }
              />
              <br />
              <input
                placeholder="Experience"
                value={editedJob.experience}
                onChange={(e) =>
                  setEditedJob({ ...editedJob, experience: e.target.value })
                }
              />
              <br />
              <select
                value={editedJob.mode}
                onChange={(e) =>
                  setEditedJob({ ...editedJob, mode: e.target.value })
                }
              >
                <option value="Remote">Remote</option>
                <option value="In Office">In Office</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              <br />
              <div style={{ marginTop: "10px" }}>
                <strong>Skills:</strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(editedJob.skills || []).map((s, i) => (
                    <button key={i} onClick={() => toggleArrayItem("skills", s)}>
                      {s} ❌
                    </button>
                  ))}
                </div>
                <input
                  value={newSkill}
                  placeholder="Add skill"
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    addToArrayField("skills", setNewSkill, newSkill)
                  }
                />
                <button
                  onClick={() =>
                    addToArrayField("skills", setNewSkill, newSkill)
                  }
                >
                  Add Skill
                </button>
              </div>

              <div style={{ marginTop: "10px" }}>
                <strong>Stack:</strong>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {(editedJob.stack || []).map((s, i) => (
                    <button key={i} onClick={() => toggleArrayItem("stack", s)}>
                      {s} ❌
                    </button>
                  ))}
                </div>
                <input
                  value={newStack}
                  placeholder="Add stack"
                  onChange={(e) => setNewStack(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    addToArrayField("stack", setNewStack, newStack)
                  }
                />
                <button
                  onClick={() =>
                    addToArrayField("stack", setNewStack, newStack)
                  }
                >
                  Add Stack
                </button>
              </div>

              <br />
              <button onClick={handleUpdate}>Save</button>{" "}
              <button onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <>
              <strong>{job.role}</strong> at <em>{job.company}</em> <br />
              <small>Experience:</small> {job.experience} <br />
              <small>Mode:</small> {job.mode} <br />
              <small>Skills:</small> {(job.skills || []).join(", ")} <br />
              <small>Stack:</small> {(job.stack || []).join(", ")} <br />
              <button onClick={() => startEditing(job)}>Edit</button>{" "}
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageJobs;
