import React from 'react';

const allFields = {
  role: '',
  organization: '',
  duration: '',
  description: '',
};

const ExtracurricularActivities = ({ data, onChange, fieldsToShow = Object.keys(allFields) }) => {
  return (
    <div>
      <h3>Extracurricular Activities</h3>
      {data.map((activity, index) => (
        <div key={index}>
          {fieldsToShow.includes('role') && (
            <input
              placeholder="Role / Title"
              value={activity.role}
              onChange={(e) => onChange(index, 'role', e.target.value)}
            />
          )}
          {fieldsToShow.includes('organization') && (
            <input
              placeholder="Organization"
              value={activity.organization}
              onChange={(e) => onChange(index, 'organization', e.target.value)}
            />
          )}
          {fieldsToShow.includes('duration') && (
            <input
              placeholder="Duration"
              value={activity.duration}
              onChange={(e) => onChange(index, 'duration', e.target.value)}
            />
          )}
          {fieldsToShow.includes('description') && (
            <textarea
              placeholder="Description"
              value={activity.description}
              onChange={(e) => onChange(index, 'description', e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExtracurricularActivities;
