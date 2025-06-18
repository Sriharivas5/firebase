import React from "react";
import { FaTrash, FaPlus, FaHeart } from "react-icons/fa";

export default function HobbiesInterests({ 
  data = [], 
  onChange,
  fieldsToShow = true 
}) {
  const handleChange = (index, value) => {
    const updated = [...data];
    updated[index] = value;
    onChange(updated);
  };

  const addEntry = () => onChange([...data, ""]);
  const removeEntry = (index) => onChange(data.filter((_, i) => i !== index));

  if (!fieldsToShow) return null;

  return (
    <div className="hobbies-section mb-8 p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaHeart className="text-red-500" /> Hobbies & Interests
        </h2>
        <button
          type="button"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          onClick={addEntry}
        >
          <FaPlus /> Add
        </button>
      </div>

      {data.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No hobbies/interests added yet
        </div>
      )}

      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="hobby-entry flex items-center gap-4 p-3 border rounded">
            <input
              type="text"
              className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. Photography, Chess, Hiking"
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            <button
              type="button"
              className="flex items-center gap-1 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={() => removeEntry(index)}
            >
              <FaTrash /> Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}