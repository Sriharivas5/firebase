import React from "react";
import { useLocation } from "react-router-dom";
import { generatePDF } from "../../../utils/generatePDF";

import TemplateOne from "../../../components/templates/TemplateOne";
import TemplateTwo from "../../../components/templates/TemplateTwo";
import TemplateThree from "../../../components/templates/TemplateThree";

const templates = {
  template1: TemplateOne,
  template2: TemplateTwo,
  template3: TemplateThree,

};

const ResumeGenerated = () => {
  const { state } = useLocation();
  const { formData, templateId } = state || {};
  const SelectedTemplate = templates[templateId] || TemplateOne;

  if (!formData) return <p>Invalid data. Please go back and fill the form.</p>;

  return (
    <div>
      <SelectedTemplate data={formData} />
      <button onClick={() => generatePDF("resume")}>Download as PDF</button>
    </div>
  );
};

export default ResumeGenerated;
