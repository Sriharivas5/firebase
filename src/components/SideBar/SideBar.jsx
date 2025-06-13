// src/components/Sidebar.jsx
import React from "react";
import "./Sidebar.scss";

const Sidebar = ({
  sortOrder,
  setSortOrder,
  selectedStacks,
  setSelectedStacks,
  allStacks,
}) => {
  const handleStackChange = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  return (
    <aside className="sidebar">
      <div className="sort-section">
        <label>
          Sort by:&nbsp;
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        </label>
      </div>

      <div className="stack-filters">
        <strong>Filter by Stack:</strong>
        <div className="stack-list">
          {allStacks.map((stack) => (
            <label className="custom-checkbox" key={stack}>
              <input
                type="checkbox"
                checked={selectedStacks.includes(stack)}
                onChange={() => handleStackChange(stack)}
              />
              <span className="checkmark"></span>
              {stack}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
