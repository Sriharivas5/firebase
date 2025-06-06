import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import "./Fetch_Jobs.scss";

const Retrieve = () => {
  const [jobs, setJobs] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [allStacks, setAllStacks] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const q = query(collection(db, "jobs"), orderBy("createdAt", sortOrder));
      const snapshot = await getDocs(q);
      const jobData = snapshot.docs.map((doc) => {
        const data = doc.data();
        const jobStack = Array.isArray(data.stack) ? data.stack : [];
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate() || null,
          stack: jobStack,
        };
      });

      // Get unique stack names
      const stackSet = new Set();
      jobData.forEach((job) => {
        job.stack.forEach((s) => stackSet.add(s));
      });
      setAllStacks(Array.from(stackSet).sort());

      setJobs(jobData);
    };

    fetchJobs();
  }, [sortOrder]);

  const filteredJobs =
    selectedStacks.length === 0
      ? jobs
      : jobs.filter((job) =>
          job.stack.some((s) => selectedStacks.includes(s))
        );

  const handleStackChange = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack)
        ? prev.filter((s) => s !== stack)
        : [...prev, stack]
    );
  };

  return (
    <div className="retrieve">
      <h2>Job Listings</h2>

      {/* Sort and Filter Controls */}
      <div className="filter-sort-controls">
        <label>
          Sort by:&nbsp;
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        </label>

        <div className="stack-filters">
          <strong>Filter by Stack:</strong><br />
          {allStacks.map((stack) => (
            <label key={stack} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={selectedStacks.includes(stack)}
                onChange={() => handleStackChange(stack)}
              />
              {stack}
            </label>
          ))}
        </div>
      </div>

      {/* Job Cards */}
      <div className="cards">
        {filteredJobs.length === 0 ? (
          <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
            No job listings match for the selected filters.
          </p>
        ) : (
          filteredJobs.map((job) => (
            <div className="card" key={job.id}>
              <h2>Role: {job.role}</h2>
              <h3>Company: {job.company}</h3>

              <div className="flex">
                <h3>Experience: {job.experience}</h3>
                <h3>
                  Mode:{" "}
                  {job.mode === "WFH"
                    ? "Work from Home"
                    : job.mode === "WFO"
                    ? "In Office"
                    : job.mode}
                </h3>
              </div>

              <h3>
                Skills:
                <div className="skills">
                  {Array.isArray(job.skills) &&
                    job.skills.map((skill, index) => (
                      <button key={index} className="skill-button">
                        {skill}
                      </button>
                    ))}
                </div>
              </h3>

              <h3>
                Posted{" "}
                {job.createdAt
                  ? formatDistanceToNow(job.createdAt, {
                      addSuffix: true,
                    }).replace("about ", "")
                  : "some time ago"}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Retrieve;
