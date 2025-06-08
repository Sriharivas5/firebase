import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import {
  formatDistanceToNow,
  subDays,
  isSameDay,
} from "date-fns";
import "./ManageJobs.scss";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [editedJob, setEditedJob] = useState({});
  const [newSkill, setNewSkill] = useState("");
  const [newStack, setNewStack] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showRecentOnly, setShowRecentOnly] = useState(false);

  const fetchJobs = async () => {
    const jobSnapshot = await getDocs(collection(db, "jobs"));
    const sevenDaysAgo = subDays(new Date(), 7);

    const jobList = jobSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.() || null,
      };
    });

    // Filter only jobs posted exactly 7 days ago if checkbox is enabled
    const filteredList = showRecentOnly
      ? jobList.filter((job) => job.createdAt && isSameDay(job.createdAt, sevenDaysAgo))
      : jobList;

    // Sort by createdAt
    filteredList.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return sortOrder === "newest"
        ? b.createdAt - a.createdAt
        : a.createdAt - b.createdAt;
    });

    setJobs(filteredList);
  };

  useEffect(() => {
    fetchJobs();
  }, [sortOrder, showRecentOnly]);

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
      role: editedJob.role || "",
      company: editedJob.company || "",
      skills: editedJob.skills || [],
      experience: editedJob.experience || "",
      location: editedJob.location || "",
      stack: editedJob.stack || [],
      applyUrl: editedJob.applyUrl || "",
    });
    setEditingJobId(null);
    fetchJobs();
  };

  const toggleArrayItem = (key, value) => {
    const currentList = editedJob[key] || [];
    setEditedJob({
      ...editedJob,
      [key]: currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value],
    });
  };

  const addToArrayField = (key, valueSetter, value) => {
    const trimmed = value.trim();
    if (trimmed && !(editedJob[key] || []).includes(trimmed)) {
      setEditedJob({
        ...editedJob,
        [key]: [...(editedJob[key] || []), trimmed],
      });
      valueSetter("");
    }
  };

  return (
    <div className="manage-jobs">
      <h2>Manage Jobs</h2>

      <div className="sort-section">
        <label>Sort By: </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest to Oldest</option>
          <option value="oldest">Oldest to Newest</option>
        </select>

        <label style={{ marginLeft: "1rem" }}>
          <input
            type="checkbox"
            checked={showRecentOnly}
            onChange={() => setShowRecentOnly(!showRecentOnly)}
          />
          {" "}Show only jobs from exactly 7 days ago
        </label>
      </div>

      <div className="cards">
        {jobs.map((job) => (
          <div key={job.id}>
            {editingJobId === job.id ? (
              <div className="job-card-edit">
                <div className="inputs">
                  <input
                    placeholder="Role"
                    value={editedJob.role}
                    onChange={(e) =>
                      setEditedJob({ ...editedJob, role: e.target.value })
                    }
                  />
                  <br /><br />
                  <input
                    placeholder="Company"
                    value={editedJob.company}
                    onChange={(e) =>
                      setEditedJob({ ...editedJob, company: e.target.value })
                    }
                  />
                  <br /><br />
                  <input
                    placeholder="Experience"
                    value={editedJob.experience}
                    onChange={(e) =>
                      setEditedJob({ ...editedJob, experience: e.target.value })
                    }
                  />
                  <br /><br />
                  <input
                    placeholder="Location"
                    value={editedJob.location || ""}
                    onChange={(e) =>
                      setEditedJob({ ...editedJob, location: e.target.value })
                    }
                  />
                  <br /><br />
                  <input
                    placeholder="Apply URL"
                    value={editedJob.applyUrl || ""}
                    onChange={(e) =>
                      setEditedJob({ ...editedJob, applyUrl: e.target.value })
                    }
                  />
                  <br /><br />
                </div>

                <div className="flex">
                  <strong>Skills:</strong>
                  <div className="tags-container">
                    {(editedJob.skills || []).map((s, i) => (
                      <button key={i} onClick={() => toggleArrayItem("skills", s)}>
                        {s} ❌
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <input
                    value={newSkill}
                    placeholder="Add skill"
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      addToArrayField("skills", setNewSkill, newSkill)
                    }
                  />
                  <button onClick={() => addToArrayField("skills", setNewSkill, newSkill)}>
                    Add Skill
                  </button>
                </div>

                <div className="flex">
                  <strong>Stacks:</strong>
                  <div className="tags-container">
                    {(editedJob.stack || []).map((s, i) => (
                      <button key={i} onClick={() => toggleArrayItem("stack", s)}>
                        {s} ❌
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <input
                    value={newStack}
                    placeholder="Add stack"
                    onChange={(e) => setNewStack(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" &&
                      addToArrayField("stack", setNewStack, newStack)
                    }
                  />
                  <button onClick={() => addToArrayField("stack", setNewStack, newStack)}>
                    Add Stack
                  </button>
                </div>

                <button onClick={handleUpdate}>Save</button>{" "}
                <button onClick={cancelEditing}>Cancel</button>
              </div>
            ) : (
              <div className="job-card">
                <strong>{job.role}</strong> at <em>{job.company}</em>
                <br />
                <small>Experience:</small> {job.experience}
                <br />
                <small>Location:</small> {job.location}
                <br />
                <small>Skills:</small> {(job.skills || []).join(", ")}
                <br />
                <small>Stack:</small> {(job.stack || []).join(", ")}
                <br />
                <small>Apply Link:</small>{" "}
                <a href={job.applyUrl} target="_blank" rel="noreferrer">
                  {job.applyUrl}
                </a>
                <br />
                {job.createdAt && (
                  <small>
                    Posted:{" "}
                    {formatDistanceToNow(new Date(job.createdAt), {
                      addSuffix: true,
                    })}
                  </small>
                )}
                <br />
                <button onClick={() => startEditing(job)}>Edit</button>{" "}
                <button onClick={() => handleDelete(job.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageJobs;
