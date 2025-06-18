import React from 'react';
import { FaTrash, FaPlus, FaLink, FaIdCard, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Certifications = ({
  certifications = [],
  onChange,
  addEntry,
  removeEntry,
  fieldsToShow = ['name', 'organization', 'issueDate', 'expiryDate', 'url', 'id'],
}) => {
  const handleAddCertification = () => {
    addEntry('certifications', {
      name: '',
      organization: '',
      issueDate: '',
      expiryDate: '',
      url: '',
      id: '',
    });
  };

  const handleRemoveCertification = (index) => {
    removeEntry('certifications', index);
  };

  return (
    <div className="certifications-section mb-8 p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Certifications</h2>
        <button
          type="button"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          onClick={handleAddCertification}
        >
          <FaPlus /> Add Certification
        </button>
      </div>

      {certifications.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No certifications added yet
        </div>
      )}

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-entry p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {fieldsToShow.includes('name') && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaIdCard /> Certificate Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. AWS Certified Developer"
                    value={cert.name}
                    onChange={(e) => onChange('certifications', index, 'name', e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.includes('organization') && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaBuilding /> Issuing Organization
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. Amazon Web Services"
                    value={cert.organization}
                    onChange={(e) => onChange('certifications', index, 'organization', e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.includes('issueDate') && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaCalendarAlt /> Issue Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={cert.issueDate}
                    onChange={(e) => onChange('certifications', index, 'issueDate', e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.includes('expiryDate') && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaCalendarAlt /> Expiry Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={cert.expiryDate}
                    onChange={(e) => onChange('certifications', index, 'expiryDate', e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.includes('url') && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaLink /> Credential URL
                  </label>
                  <input
                    type="url"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/certificate"
                    value={cert.url}
                    onChange={(e) => onChange('certifications', index, 'url', e.target.value)}
                  />
                </div>
              )}

              {fieldsToShow.includes('id') && (
                <div className="input-group">
                  <label className="block text-sm font-medium mb-1 flex items-center gap-2">
                    <FaIdCard /> Certificate ID
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g. AWS-123456"
                    value={cert.id}
                    onChange={(e) => onChange('certifications', index, 'id', e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                onClick={() => handleRemoveCertification(index)}
              >
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
