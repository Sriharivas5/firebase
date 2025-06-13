// import { useEffect, useState } from "react";
// import { db } from "../../../firebase";
// import { collection, getDocs, query, orderBy } from "firebase/firestore";
// import { formatDistanceToNow } from "date-fns";
// // import "./Fetch_Jobs.scss";
// import "./Fetch_Jobs_Dark.scss"

// const Retrieve = () => {
//   const [jobs, setJobs] = useState([]);
//   const [sortOrder, setSortOrder] = useState("desc");
//   const [selectedStacks, setSelectedStacks] = useState([]);
//   const [allStacks, setAllStacks] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const q = query(collection(db, "jobs"), orderBy("createdAt", sortOrder));
//       const snapshot = await getDocs(q);
//       const jobData = snapshot.docs.map((doc) => {
//         const data = doc.data();
//         const jobStack = Array.isArray(data.stack) ? data.stack : [];
//         return {
//           id: doc.id,
//           ...data,
//           createdAt: data.createdAt?.toDate() || null,
//           stack: jobStack,
//         };
//       });

//       // Get unique stack names
//       const stackSet = new Set();
//       jobData.forEach((job) => {
//         job.stack.forEach((s) => stackSet.add(s));
//       });
//       setAllStacks(Array.from(stackSet).sort());

//       setJobs(jobData);
//     };

//     fetchJobs();
//   }, [sortOrder]);

//   const filteredJobs =
//     selectedStacks.length === 0
//       ? jobs
//       : jobs.filter((job) =>
//         job.stack.some((s) => selectedStacks.includes(s))
//       );

//   const handleStackChange = (stack) => {
//     setSelectedStacks((prev) =>
//       prev.includes(stack)
//         ? prev.filter((s) => s !== stack)
//         : [...prev, stack]
//     );
//   };

//   return (
//     <div className="retrieve">
//       <h2>Job Listings</h2>

//       {/* Sort and Filter Controls */}
//       <div className="filter-sort-controls">
//         <label>
//           Sort by:&nbsp;
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="desc">Newest to Oldest</option>
//             <option value="asc">Oldest to Newest</option>
//           </select>
//         </label>

//         <div className="stack-filters">
//           <strong>Filter by Stack:</strong><br />
//           <div>
//             {allStacks.map((stack) => (
//               <label key={stack} style={{ marginRight: "10px" }}>
//                 <input
//                   type="checkbox"
//                   checked={selectedStacks.includes(stack)}
//                   onChange={() => handleStackChange(stack)}
//                 />
//                 {stack}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Job Cards */}
//       <div className="cards">
//         {filteredJobs.length === 0 ? (
//           <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
//             No job listings match for the selected filters.
//           </p>
//         ) : (
//           filteredJobs.map((job) => (
//             <div className="card" key={job.id}>
//               <h3>Role: {job.role}</h3>
//               <h4>Company: {job.company}</h4>

//               <div className="flex">
//                 <h4>Experience: {job.experience}</h4>
//                 <h4>
//                   Location :
//                   {job.location}
//                 </h4>
//               </div>

//               <h4>
//                 Skills:
//                 <div className="skills">
//                   {Array.isArray(job.skills) &&
//                     job.skills.map((skill, index) => (
//                       <button key={index} className="skill-button">
//                         {skill}
//                       </button>
//                     ))}
//                 </div>
//               </h4>

//               <div className="flex">
//                 <h4>
//                   Posted
//                   {job.createdAt
//                     ? formatDistanceToNow(job.createdAt, {
//                       addSuffix: true,
//                     }).replace("about ", "")
//                     : "some time ago"}
//                 </h4>

//                 <a href={job.applyUrl} target="blank"><button>Apply Here</button></a>

//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Retrieve;


import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import Sidebar from "../../../components/SideBar/SideBar"; // Adjust this path if needed
import "./Fetch_Jobs_Dark.scss";
import "./Fetch_Jobs_Light.scss"

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

      // Extract all unique stacks
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

  return (
    <div className="main">
      <div className="retrieve ">
        <h2>Job Listings</h2>

        <div className="content-container">
          <Sidebar
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            selectedStacks={selectedStacks}
            setSelectedStacks={setSelectedStacks}
            allStacks={allStacks}
          />

          <div className="cards">
            {filteredJobs.length === 0 ? (
              <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
                No job listings match for the selected filters.
              </p>
            ) : (
              filteredJobs.map((job) => (
                <div className="card" key={job.id}>
                  <h3>Role: {job.role}</h3>
                  <h4>Company: {job.company}</h4>

                  <div className="flex">
                    <h4>Experience: {job.experience}</h4>
                    <h4>Location: {job.location}</h4>
                  </div>

                  <h4>
                    Skills:
                    <div className="skills">
                      {Array.isArray(job.skills) &&
                        job.skills.map((skill, index) => (
                          <button key={index} className="skill-button">
                            {skill}
                          </button>
                        ))}
                    </div>
                  </h4>

                  <div className="flex">
                    <h4>
                      Posted{" "}
                      {job.createdAt
                        ? formatDistanceToNow(job.createdAt, {
                          addSuffix: true,
                        }).replace("about ", "")
                        : "some time ago"}
                    </h4>

                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                      <button>Apply Here</button>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrieve;
