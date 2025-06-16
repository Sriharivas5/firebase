import React, { useState } from "react";

const ALL_FIELDS = {
  firstName: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="First Name"
      value={data.firstName || ""}
      onChange={e => onChange("firstName", e.target.value)}
    />
  ),
  middleName: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Middle Name"
      value={data.middleName || ""}
      onChange={e => onChange("middleName", e.target.value)}
    />
  ),
  lastName: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Last Name"
      value={data.lastName || ""}
      onChange={e => onChange("lastName", e.target.value)}
    />
  ),
  dob: ({ data, onChange }) => (
    <input
      type="date"
      placeholder="Date of Birth"
      value={data.dob || ""}
      onChange={e => onChange("dob", e.target.value)}
    />
  ),
  gender: ({ data, onChange }) => (
    <select value={data.gender || ""} onChange={e => onChange("gender", e.target.value)}>
      <option value="">Gender</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  ),
  primaryPhone: ({ data, onChange }) => (
    <input
      type="tel"
      placeholder="Primary Phone"
      value={data.primaryPhone || ""}
      onChange={e => onChange("primaryPhone", e.target.value)}
    />
  ),
  alternatePhone: ({ data, onChange }) => (
    <input
      type="tel"
      placeholder="Alternate Phone"
      value={data.alternatePhone || ""}
      onChange={e => onChange("alternatePhone", e.target.value)}
    />
  ),
  primaryEmail: ({ data, onChange }) => (
    <input
      type="email"
      placeholder="Primary Email"
      value={data.primaryEmail || ""}
      onChange={e => onChange("primaryEmail", e.target.value)}
    />
  ),
  alternateEmail: ({ data, onChange }) => (
    <input
      type="email"
      placeholder="Alternate Email"
      value={data.alternateEmail || ""}
      onChange={e => onChange("alternateEmail", e.target.value)}
    />
  ),
  linkedin: ({ data, onChange }) => (
    <input
      type="url"
      placeholder="LinkedIn Profile"
      value={data.linkedin || ""}
      onChange={e => onChange("linkedin", e.target.value)}
    />
  ),
  github: ({ data, onChange }) => (
    <input
      type="url"
      placeholder="GitHub / Portfolio / Website"
      value={data.github || ""}
      onChange={e => onChange("github", e.target.value)}
    />
  ),
  addressStreet: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Street Address"
      value={data.addressStreet || ""}
      onChange={e => onChange("addressStreet", e.target.value)}
    />
  ),
  addressCity: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="City"
      value={data.addressCity || ""}
      onChange={e => onChange("addressCity", e.target.value)}
    />
  ),
  addressState: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="State"
      value={data.addressState || ""}
      onChange={e => onChange("addressState", e.target.value)}
    />
  ),
  addressZip: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Zip Code"
      value={data.addressZip || ""}
      onChange={e => onChange("addressZip", e.target.value)}
    />
  ),
  addressCountry: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Country"
      value={data.addressCountry || ""}
      onChange={e => onChange("addressCountry", e.target.value)}
    />
  ),
  nationality: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Nationality"
      value={data.nationality || ""}
      onChange={e => onChange("nationality", e.target.value)}
    />
  ),
  maritalStatus: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Marital Status"
      value={data.maritalStatus || ""}
      onChange={e => onChange("maritalStatus", e.target.value)}
    />
  ),
  languagesKnown: ({ data, onChange }) => (
    <input
      type="text"
      placeholder="Languages Known"
      value={data.languagesKnown || ""}
      onChange={e => onChange("languagesKnown", e.target.value)}
    />
  ),
  profilePicture: ({ data, onChange }) => {
    const [preview, setPreview] = useState(data.profilePicture || null);
    const handleFile = e => {
      const file = e.target.files[0];
      setPreview(URL.createObjectURL(file));
      onChange("profilePicture", file);
    };
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleFile} />
        {preview && <img src={preview} alt="Profile" height={80} />}
      </div>
    );
  },
  objective: ({ data, onChange }) => (
    <textarea
      placeholder="Objective / Summary"
      rows={4}
      value={data.objective || ""}
      onChange={e => onChange("objective", e.target.value)}
    />
  )
};

const PersonalDetails = ({ data = {}, onChange, fieldsToShow, className = "" }) => {
  const keys = fieldsToShow || Object.keys(ALL_FIELDS);
  return (
    <div className={`section personal-details ${className}`.trim()}>
      <h2>Personal Details</h2>
      {keys.map(key =>
        ALL_FIELDS[key]
          ? <div key={key} className="field">{ALL_FIELDS[key]({ data, onChange })}</div>
          : null
      )}
    </div>
  );
};

export default PersonalDetails;
