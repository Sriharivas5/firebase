import React, { useState } from "react";

const ALL_FIELDS = {
  firstName: ({ data, onChange }) => (
    <div className="form-group">
      <label>First Name</label>
      <input
        type="text"
        className="form-control"
        value={data.firstName || ""}
        onChange={e => onChange("firstName", e.target.value)}
      />
    </div>
  ),
  lastName: ({ data, onChange }) => (
    <div className="form-group">
      <label>Last Name</label>
      <input
        type="text"
        className="form-control"
        value={data.lastName || ""}
        onChange={e => onChange("lastName", e.target.value)}
      />
    </div>
  ),
  email: ({ data, onChange }) => (
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        value={data.email || ""}
        onChange={e => onChange("email", e.target.value)}
      />
    </div>
  ),
  phone: ({ data, onChange }) => (
    <div className="form-group">
      <label>Phone</label>
      <input
        type="tel"
        className="form-control"
        value={data.phone || ""}
        onChange={e => onChange("phone", e.target.value)}
      />
    </div>
  ),
  dob: ({ data, onChange }) => (
    <div className="form-group">
      <label>Date of Birth</label>
      <input
        type="date"
        className="form-control"
        value={data.dob || ""}
        onChange={e => onChange("dob", e.target.value)}
      />
    </div>
  ),
  address: ({ data, onChange }) => (
    <div className="form-group">
      <label>Address</label>
      <input
        type="text"
        className="form-control"
        value={data.address || ""}
        onChange={e => onChange("address", e.target.value)}
      />
    </div>
  ),
  objective: ({ data, onChange }) => (
    <div className="form-group">
      <label>Career Objective</label>
      <textarea
        className="form-control"
        rows={3}
        value={data.objective || ""}
        onChange={e => onChange("objective", e.target.value)}
      />
    </div>
  ),
  linkedin: ({ data, onChange }) => (
    <div className="form-group">
      <label>LinkedIn</label>
      <input
        type="url"
        className="form-control"
        value={data.linkedin || ""}
        onChange={e => onChange("linkedin", e.target.value)}
      />
    </div>
  ),
  github: ({ data, onChange }) => (
    <div className="form-group">
      <label>GitHub</label>
      <input
        type="url"
        className="form-control"
        value={data.github || ""}
        onChange={e => onChange("github", e.target.value)}
      />
    </div>
  ),
  profilePicture: ({ data, onChange }) => {
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
          onChange("profilePicture", reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="form-group">
        <label>Profile Picture</label>
        <input 
          type="file" 
          className="form-control-file" 
          accept="image/*" 
          onChange={handleChange} 
        />
        {preview && (
          <div className="mt-2">
            <img src={preview} alt="Preview" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          </div>
        )}
      </div>
    );
  }
};

const PersonalDetails = ({ data = {}, onChange, fieldsToShow, className = "" }) => {
  const keys = fieldsToShow || Object.keys(ALL_FIELDS);
  
  return (
    <div className={`personal-details ${className}`}>
      <h2 className="mb-4">Personal Details</h2>
      <div className="row">
        {keys.map(key => (
          <div key={key} className="col-md-6 mb-3">
            {ALL_FIELDS[key] && ALL_FIELDS[key]({ data, onChange })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetails;