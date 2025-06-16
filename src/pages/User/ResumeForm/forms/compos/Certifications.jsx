import React from 'react';
import TextInput from './TextInput';

const Certifications = ({
  certifications = [],
  onChange,
  addEntry,
  removeEntry,
  fieldsToShow = ['name', 'organization', 'issueDate', 'expiryDate', 'url', 'id'],
}) => {
  return (
    <div className="section certifications">
      <h2>Certifications</h2>
      {certifications.map((cert, i) => (
        <div key={i} className="dynamic-section">
          {fieldsToShow.includes('name') && (
            <TextInput
              label="Certificate Name"
              name="name"
              value={cert.name}
              onChange={e => onChange('certifications', i, 'name', e.target.value)}
            />
          )}
          {fieldsToShow.includes('organization') && (
            <TextInput
              label="Issuing Organization"
              name="organization"
              value={cert.organization}
              onChange={e => onChange('certifications', i, 'organization', e.target.value)}
            />
          )}
          {fieldsToShow.includes('issueDate') && (
            <TextInput
              label="Issue Date"
              type="date"
              name="issueDate"
              value={cert.issueDate}
              onChange={e => onChange('certifications', i, 'issueDate', e.target.value)}
            />
          )}
          {fieldsToShow.includes('expiryDate') && (
            <TextInput
              label="Expiry Date"
              type="date"
              name="expiryDate"
              value={cert.expiryDate}
              onChange={e => onChange('certifications', i, 'expiryDate', e.target.value)}
            />
          )}
          {fieldsToShow.includes('url') && (
            <TextInput
              label="Credential URL"
              name="url"
              value={cert.url}
              onChange={e => onChange('certifications', i, 'url', e.target.value)}
            />
          )}
          {fieldsToShow.includes('id') && (
            <TextInput
              label="Certificate ID"
              name="id"
              value={cert.id}
              onChange={e => onChange('certifications', i, 'id', e.target.value)}
            />
          )}
          {certifications.length > 1 && (
            <button type="button" onClick={() => removeEntry('certifications', i)}>
              Remove Certification
            </button>
          )}
          <hr />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addEntry('certifications', {
            name: '',
            organization: '',
            issueDate: '',
            expiryDate: '',
            url: '',
            id: '',
          })
        }
      >
        Add Certification
      </button>
    </div>
  );
};

export default Certifications;
