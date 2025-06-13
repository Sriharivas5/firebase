import React from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';
import { templates } from '../../../templateConfig';
import "./ResumeGenerated.scss";
const ResumeGenerated = () => {
  const location = useLocation();
  const { templateId, formData } = location.state || {};

  const PDFComponent = templates[templateId]?.pdfComponent;

  if (!PDFComponent || !formData) {
    return <div>Error generating resume.</div>;
  }

  return (
    <div className='genertaedResume'>
      {/* <h2>Preview Resume</h2> */}
      <PDFViewer id="pdf">
        <PDFComponent formData={formData} />
      </PDFViewer>
      {/* <PDFDownloadLink
        document={<PDFComponent formData={formData} />}
        fileName="resume.pdf"
      >
        {({ loading }) => (loading ? 'Preparing download...' : 'Download PDF')}
      </PDFDownloadLink> */}
    </div>
  );
};

export default ResumeGenerated;
