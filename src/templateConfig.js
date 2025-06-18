import ResumeFormOne from './pages/User/ResumeForm/forms/ResumeFormOne/ResumeFormOne';
import ResumeFormTwo from './pages/User/ResumeForm/forms/ResumeFormTwo/ResumeFormTwo';
import ResumeFormThree from './pages/User/ResumeForm/forms/RsumeFormThree/RsumeFormThree';

import PDFTemplate1 from './pages/User/ResumeGenerated/templates/PDFTemplate1';
import PDFTemplate2 from './pages/User/ResumeGenerated/templates/PDFTemplate2';
import PDFTemplate3 from './pages/User/ResumeGenerated/templates/PDFTemplate3';


export const templates = {
  template1: {
    formComponent: ResumeFormOne,
    pdfComponent: PDFTemplate1,
  },
  template2: {
    formComponent: ResumeFormTwo,
    pdfComponent: PDFTemplate2,
  },
  template3: {
    formComponent: ResumeFormThree,
    pdfComponent: PDFTemplate3
  }
};
