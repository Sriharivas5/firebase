// src/Retrieve.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Retrieve = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const jobData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobData);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div >
          <strong>Role:</strong> {job.role}<br />
          <strong>Company:</strong> {job.company}<br />
          <strong>Experience:</strong> {job.experience}<br />
          <strong>Mode:</strong> {job.mode}<br />
          <strong>Skills:</strong> {job.skills?.join(", ")}
        </div>
      ))}
    </div>
  );
};

export default Retrieve;
