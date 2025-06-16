import React from "react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

const BasicInfo = ({ data, onChange }) => (
  <>
    <h2>Basic Information</h2>
    <div className="form-row">
      <TextInput label="Name" name="name" value={data.name} onChange={onChange} />
      <TextInput label="Email" name="email" value={data.email} onChange={onChange} />
      <TextInput label="Phone" name="phone" value={data.phone} onChange={onChange} />
    </div>
    <div className="form-row">
      <TextInput label="Location" name="location" value={data.location} onChange={onChange} />
      <TextInput label="Website" name="website" value={data.website} onChange={onChange} />
    </div>
    <div className="form-row">
      <TextInput label="LinkedIn" name="linkedin" value={data.linkedin} onChange={onChange} />
      <TextInput label="GitHub" name="github" value={data.github} onChange={onChange} />
    </div>
    <h2>Objective / Summary</h2>
    <TextAreaInput
      label="Objective"
      name="objective"
      value={data.objective}
      onChange={onChange}
      rows={4}
    />
  </>
);

export default BasicInfo;
