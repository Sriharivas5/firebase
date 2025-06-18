import React from "react";

const WorkExperience = ({
  data = [],
  onChange,
  onBulletChange,
  addEntry,
  removeEntry,
  addBullet,
  removeBullet,
  fieldsToShow = ["title", "company", "startDate", "endDate", "bullets"],
}) => {
  const handleAddExperience = () => {
    addEntry("experience");
  };

  const handleRemoveExperience = (index) => {
    removeEntry("experience", index);
  };

  const handleAddBullet = (expIndex) => {
    addBullet("experience", expIndex);
  };

  const handleRemoveBullet = (expIndex, bulletIndex) => {
    removeBullet("experience", expIndex, bulletIndex);
  };

  const handleFieldChange = (expIndex, field, value) => {
    onChange("experience", expIndex, field, value);
  };

  const handleBulletTextChange = (expIndex, bulletIndex, value) => {
    onBulletChange("experience", expIndex, bulletIndex, value);
  };

  return (
    <div className="work-experience mb-4">
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      
      {data.map((exp, idx) => (
        <div key={idx} className="experience-entry mb-6 p-4 border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {fieldsToShow.includes("title") && (
              <div>
                <label className="block text-sm font-medium mb-1">Job Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="e.g. Software Engineer"
                  value={exp.title || ""}
                  onChange={(e) => handleFieldChange(idx, "title", e.target.value)}
                />
              </div>
            )}
            
            {fieldsToShow.includes("company") && (
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="e.g. Google"
                  value={exp.company || ""}
                  onChange={(e) => handleFieldChange(idx, "company", e.target.value)}
                />
              </div>
            )}
            
            {fieldsToShow.includes("startDate") && (
              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  value={exp.startDate || ""}
                  onChange={(e) => handleFieldChange(idx, "startDate", e.target.value)}
                />
              </div>
            )}
            
            {fieldsToShow.includes("endDate") && (
              <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  value={exp.endDate || ""}
                  onChange={(e) => handleFieldChange(idx, "endDate", e.target.value)}
                />
              </div>
            )}
          </div>

          {fieldsToShow.includes("bullets") && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Responsibilities</label>
              {exp.bullets?.map((bullet, bulletIdx) => (
                <div key={bulletIdx} className="bullet-item flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border rounded"
                    placeholder={`Bullet point ${bulletIdx + 1}`}
                    value={bullet}
                    onChange={(e) => handleBulletTextChange(idx, bulletIdx, e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                    onClick={() => handleRemoveBullet(idx, bulletIdx)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2"
                onClick={() => handleAddBullet(idx)}
              >
                Add Responsibility
              </button>
            </div>
          )}

          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={() => handleRemoveExperience(idx)}
          >
            Remove This Experience
          </button>
        </div>
      ))}

      <button
        type="button"
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={handleAddExperience}
      >
        Add New Experience
      </button>
    </div>
  );
};

export default WorkExperience;