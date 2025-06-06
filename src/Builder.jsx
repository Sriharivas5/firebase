import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { jsPDF } from "jspdf";
import "./Tester.scss";

const ResumeBuilderTest = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState(null);
  const { register, handleSubmit } = useForm();

  const templates = ["template1", "template2"];

  const onSubmit = (data) => {
    setFormData(data);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Name: ${formData.fullName}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`Phone: ${formData.phone}`, 10, 30);
    doc.save("resume.pdf");
  };

  return (
    <div className="resume-builder">
      {!selectedTemplate ? (
        <div className="template-select">
          <h2>Select a Resume Template</h2>
          <div className="template-options">
            {templates.map((template) => (
              <div
                key={template}
                className="template-box"
                onClick={() => setSelectedTemplate(template)}
              >
                <p>{template}</p>
              </div>
            ))}
          </div>
        </div>
      ) : !formData ? (
        <form onSubmit={handleSubmit(onSubmit)} className="resume-form">
          <h2>Enter Your Details</h2>
          <input {...register("fullName")} placeholder="Full Name" required />
          <input {...register("email")} placeholder="Email" required />
          <input {...register("phone")} placeholder="Phone" required />
          <button type="submit">Generate Resume</button>
        </form>
      ) : (
        <div className={`resume-preview ${selectedTemplate}`}>
          <h2>{formData.fullName}</h2>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          <button onClick={generatePDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilderTest;
