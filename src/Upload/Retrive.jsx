// src/Retrieve.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";

import "./Retrive.scss";

const Retrieve = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const jobData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || null, // Convert to JS Date
        };
      });
      setJobs(jobData);
    };

    fetchJobs();
  }, []);

  return (
    <div className="retrieve">
      <h2>Job Listings</h2>
      <div className="cards">
        {jobs.map((job) => (
          <div className="card" key={job.id}>
            <h2>Role: {job.role}</h2>
            <h3>Company: {job.company}</h3>
            <div className="flex">
              <h3>Experience: {job.experience}</h3>
              <h3>Mode: {job.mode}</h3>
            </div>
            <h3>Skills: {job.skills?.join(", ")}</h3>
            <h3>
              Posted {job.createdAt ? formatDistanceToNow(job.createdAt, { addSuffix: true }).replace("about ", "") : "some time ago"}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Retrieve;
