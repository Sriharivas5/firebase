import React from "react";
import { FaTrash, FaPlus, FaTrophy, FaCalendarAlt, FaCode, FaUserTie } from "react-icons/fa";

const defaultFields = {
  name: true,
  organizer: true,
  date: true,
  rank: true,
  techStack: true,
};

export default function HackathonsCompetitions({ 
  data = [], 
  onChange, 
  fieldsToShow = defaultFields 
}) {
  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addEntry = () => {
    onChange([...data, {
      name: "",
      organizer: "",
      date: "",
      rank: "",
      techStack: ""
    }]);
  };

  const removeEntry = (index) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="hackathons-section mb-8 p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Hackathons / Competitions
        </h2>
        <button
          type="button"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          onClick={addEntry}
        >
          <FaPlus /> Add Entry
        </button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No hackathons or competitions added yet
        </div>
      )}

      <div className="space-y-6">
        {data.map((entry, index) => (
          <div 
            key={index} 
            className="entry-card p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {fieldsToShow.name && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaTrophy /> Event Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. Hack the North"
                    value={entry.name || ""}
                    onChange={(e) => handleChange(index, "name", e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.organizer && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaUserTie /> Organizer
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. University of Waterloo"
                    value={entry.organizer || ""}
                    onChange={(e) => handleChange(index, "organizer", e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.date && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaCalendarAlt /> Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={entry.date || ""}
                    onChange={(e) => handleChange(index, "date", e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.rank && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaTrophy /> Rank / Outcome
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. 1st Place, Finalist"
                    value={entry.rank || ""}
                    onChange={(e) => handleChange(index, "rank", e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.techStack && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaCode /> Tech Stack
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. React, Node.js, MongoDB"
                    value={entry.techStack || ""}
                    onChange={(e) => handleChange(index, "techStack", e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                onClick={() => removeEntry(index)}
              >
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}