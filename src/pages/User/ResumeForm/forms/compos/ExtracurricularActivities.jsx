import React from 'react';

const allFields = {
  role: '',
  organization: '',
  duration: '',
  description: '',
};

const ExtracurricularActivities = ({
  data = [],
  onChange = () => {},
  addEntry = () => {},
  removeEntry = () => {},
  fieldsToShow = Object.keys(allFields),
}) => {
  return (
    <div>
      <h3>Extracurricular Activities</h3>

      {data.length === 0 && (
        <p>No extracurricular activities added yet.</p>
      )}

      {data.map((activity, index) => (
        <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
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

          <button type="button" onClick={() => removeEntry(index)}>
            Remove Activity
          </button>
        </div>
      ))}

      <button type="button" onClick={addEntry}>
        Add Activity
      </button>
    </div>
  );
};

export default ExtracurricularActivities;
