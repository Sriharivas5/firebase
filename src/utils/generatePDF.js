
import html2canvas from "html2canvas";import jsPDF from "jspdf";

export const generatePDF = async (target = "resume") => {
  const element =
    typeof target === "string" ? document.getElementById(target) : target;

  if (!element) {
    console.error("generatePDF error: Target element not found.");
    alert("Resume content is not ready yet. Please try again.");
    return;
  }

  try {
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pdfWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    // Add more pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save("resume.pdf");
  } catch (error) {
    console.error("PDF generation failed:", error);
    alert("Something went wrong while generating the PDF.");
  }
};
