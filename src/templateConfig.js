import ResumeFormOne from './pages/User/ResumeForm/forms/ResumeFormOne/ResumeFormOne';
import ResumeFormTwo from './pages/User/ResumeForm/forms/ResumeFormTwo/ResumeFormTwo';
import PDFTemplate2 from './pages/User/ResumeGenerated/templates/PDFTemplate2';
import PDFTemplate1 from './pages/User/ResumeGenerated/templates/PDFTemplate1';
export const templates = {
  template1: {
    formComponent: ResumeFormOne,
    pdfComponent: PDFTemplate1,
  },
  template2: {
    formComponent: ResumeFormTwo,
    pdfComponent: PDFTemplate2,
  },
};
