// src/ManageJobs.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
// import "./ManageJobs.scss";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [editedJob, setEditedJob] = useState({});

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
    setEditedJob(job);
  };

  const cancelEditing = () => {
    setEditingJobId(null);
    setEditedJob({});
  };

  const handleUpdate = async () => {
    const jobRef = doc(db, "jobs", editingJobId);
    await updateDoc(jobRef, {
      role: editedJob.role,
      company: editedJob.company,
      experience: editedJob.experience,
      mode: editedJob.mode,
      skills: editedJob.skills,
    });
    setEditingJobId(null);
    fetchJobs();
  };

  const toggleSkillEdit = (skill) => {
    const skills = editedJob.skills || [];
    if (skills.includes(skill)) {
      setEditedJob({ ...editedJob, skills: skills.filter((s) => s !== skill) });
    } else {
      setEditedJob({ ...editedJob, skills: [...skills, skill] });
    }
  };

  return (
    <div>
      <h2>Manage Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          {editingJobId === job.id ? (
            <>
              <input
                value={editedJob.role}
                onChange={(e) => setEditedJob({ ...editedJob, role: e.target.value })}
              /><br />
              <input
                value={editedJob.company}
                onChange={(e) => setEditedJob({ ...editedJob, company: e.target.value })}
              /><br />
              <input
                value={editedJob.experience}
                onChange={(e) => setEditedJob({ ...editedJob, experience: e.target.value })}
              /><br />
              <select
                value={editedJob.mode}
                onChange={(e) => setEditedJob({ ...editedJob, mode: e.target.value })}
              >
                <option value="WFH">WFH</option>
                <option value="WFO">WFO</option>
              </select><br />
              <div>
                Skills: {editedJob.skills?.map((s) => (
                  <button key={s} onClick={() => toggleSkillEdit(s)}>{s}</button>
                ))}
              </div><br />
              <button onClick={handleUpdate}>Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <>
              <strong>{job.role}</strong> at <em>{job.company}</em><br />
              Skills: {job.skills?.join(", ")}<br />
              Experience: {job.experience}<br />
              Mode: {job.mode}<br />
              <button onClick={() => startEditing(job)}>Edit</button>
              <button onClick={() => handleDelete(job.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ManageJobs;
