// // // // src/pages/User/ResumeGenerated/templates/PDFTemplateOne.jsx
// // // import React from "react";
// // // import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";


// // // const formatMonthYear = (monthYear) => {
// // //   if (!monthYear) return "";
// // //   const [year, month] = monthYear.split("-");
// // //   const monthNames = [
// // //     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
// // //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
// // //   ];
// // //   const m = parseInt(month, 10);
// // //   return monthNames[m - 1] + " " + year;
// // // };

// // // const styles = StyleSheet.create({
// // //   page: {
// // //     fontFamily: "Helvetica",
// // //     padding: 40,
// // //     fontSize: 11,
// // //     lineHeight: 1.6,
// // //     color: "#333",
// // //     // backgroundColor:"red"
// // //   },
// // //   section: { marginBottom: 1 },
// // //   heading: {
// // //     fontSize: 14,
// // //     fontWeight: "bold",
// // //     textTransform: "uppercase",
// // //     marginTop: 5,
// // //   },
// // //   subheading: {
// // //     fontSize: 12,
// // //     fontWeight: "bold",
// // //     marginTop: 4,
// // //   },
// // //   bullet: { marginLeft: 10 },

// // //   // old
// // //   name: {
// // //     fontSize: 22,
// // //     fontWeight: "bold",
// // //     textTransform: "uppercase",
// // //     marginBottom: 13,
// // //     textAlign: "center"
// // //   },
// // //   centerText: {
// // //     marginBottom: 1,
// // //     textAlign: "center",
// // //   },
// // //   heading: {
// // //     fontSize: 14,
// // //     fontWeight: "bold",
// // //     textTransform: "uppercase",
// // //     marginTop: 10,
// // //   }
// // //   ,
// // //   objective: {
// // //     marginBottom: 2,
// // //     textAlign: "center",
// // //     padding: 7
// // //   },
// // //   horizontalLine: {
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#282828',
// // //     marginVertical: 2,
// // //   },
// // //   spaceBetween: {
// // //     display: "flex",
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     alignItems: "center"
// // //   },
// // //   link: {
// // //     textDecoration: 'underline',
// // //     color: "#0b1f6b"
// // //   },
// // //   miniHeading: {
// // //     fontWeight: 700
// // //   },
// // //   flex: {
// // //     display: "flex",
// // //     flexDirection: "row"
// // //   }


// // // });

// // // const PDFTemplateOne = ({ formData }) => (
// // //   <Document>
// // //     <Page size="A4" style={styles.page}>
// // //       <View style={styles.section}>
// // //         <Text style={styles.name}>{formData.name }</Text>


// // //         <Text style={styles.centerText}> {formData.location} |  {formData.email} | {formData.phone} |  {formData.website}</Text>


// // //         <Text style={styles.centerText}>{formData.linkedin} | {formData.github}</Text>
// // //       </View>


// // //       <View styles={styles.objective}>
// // //         <Text style={styles.heading}>Objective</Text>
// // //         <View style={styles.horizontalLine} />
// // //         <Text >{formData.objective}</Text>
// // //       </View>

// // //       <View style={styles.section}>
// // //         <Text style={styles.heading}>Education</Text>
// // //         <View style={styles.horizontalLine} />
// // //         {formData.education.map((edu, idx) => (
// // //           <View key={idx}>
// // //             <View style={styles.spaceBetween}>
// // //               <Text style={styles.subheading}>{edu.institution}</Text>
// // //               <Text>
// // //                 {formatMonthYear(edu.startDate)} – {formatMonthYear(edu.endDate)}
// // //               </Text>
// // //             </View>
// // //             {/* <Text >{edu.educationLevel}  {edu.gpa} </Text> */}
// // //             <Text>
// // //               {edu.educationLevel} –
// // //               {edu.gradingType === "percentage"
// // //                 ? `Percentage: ${edu.gpa}%`
// // //                 : `GPA: ${edu.gpa}`}
// // //             </Text>
// // //             {/* <Text>{edu.educationLevel}</Text> */}
// // //           </View>
// // //         ))}
// // //       </View>

// // //       <View style={styles.section}>
// // //         <Text style={styles.heading}>Experience</Text>
// // //         <View style={styles.horizontalLine} />
// // //         {formData.experience.map((exp, idx) => (
// // //           <View key={idx}>
// // //             <View style={styles.spaceBetween}>
// // //               <Text style={styles.subheading}>{exp.title} – {exp.company}</Text>
// // //               <Text>
// // //                 {formatMonthYear(exp.startDate)} – {formatMonthYear(exp.endDate)}
// // //               </Text>
// // //             </View>

// // //             <Text>{exp.location} </Text>
// // //             {exp.bullets.map((b, j) => (
// // //               <Text key={j} style={styles.bullet}>• {b}</Text>
// // //             ))}
// // //           </View>
// // //         ))}
// // //       </View>

// // //       <View style={styles.section}>
// // //         <Text style={styles.heading}>Projects</Text>
// // //         <View style={styles.horizontalLine} />
// // //         {formData.projects.map((proj, idx) => (
// // //           <View key={idx}>
// // //             <View style={styles.spaceBetween}>
// // //               <Text style={styles.subheading}>{proj.name}</Text>
// // //               <Text>
// // //                 {formatMonthYear(proj.startDate)} – {formatMonthYear(proj.endDate)}
// // //               </Text>
// // //             </View>
// // //             <Text style={styles.link}>Link: {proj.link}</Text>
// // //             <View style={styles.flex}>
// // //               <Text style={styles.miniHeading}>Tools: </Text>
// // //               <Text >{proj.tools}</Text>
// // //             </View>
// // //             <Text>{proj.description}</Text>
// // //           </View>
// // //         ))}
// // //       </View>

// // //       <View style={styles.section}>
// // //         <Text style={styles.heading}>Skills</Text>
// // //         <View style={styles.horizontalLine} />
// // //         <Text style={styles.subheading}>Languages:</Text>
// // //         <Text>{formData.skills.languages.join(", ")}</Text>
// // //         <Text style={styles.subheading}>Tools & Technologies:</Text>
// // //         <Text>{formData.skills.tools.join(", ")}</Text>
// // //       </View>
// // //     </Page>
// // //   </Document>
// // // );

// // // export default PDFTemplateOne;


// // import React from "react";
// // import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// // const formatMonthYear = (dateString) => {
// //   if (!dateString) return "";
// //   const date = new Date(dateString);
// //   if (isNaN(date)) return dateString; // Return original if invalid date

// //   const monthNames = [
// //     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
// //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
// //   ];


// //   return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
// // };

// // const styles = StyleSheet.create({
// //   page: {
// //     fontFamily: "Helvetica",
// //     padding: 40,
// //     fontSize: 11,
// //     lineHeight: 1.6,
// //     color: "#333",
// //   },
// //   section: { marginBottom: 10 },
// //   name: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     textTransform: "uppercase",
// //     marginBottom: 5,
// //     textAlign: "center"
// //   },
// //   contactInfo: {
// //     marginBottom: 10,
// //     textAlign: "center",
// //   },
// //   heading: {
// //     fontSize: 14,
// //     fontWeight: "bold",
// //     textTransform: "uppercase",
// //     marginTop: 10,
// //     marginBottom: 5
// //   },
// //   subheading: {
// //     fontSize: 12,
// //     fontWeight: "bold",
// //     marginBottom: 3,
// //   },
// //   bullet: { 
// //     marginLeft: 10,
// //     marginBottom: 2 
// //   },
// //   objective: {
// //     marginBottom: 10,
// //     padding: 5
// //   },
// //   horizontalLine: {
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#282828',
// //     marginBottom: 5,
// //   },
// //   spaceBetween: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     marginBottom: 3,
// //   },
// //   link: {
// //     textDecoration: 'none',
// //     color: "#0b1f6b",
// //     marginBottom: 3,
// //   },
// //   skillsSection: {
// //     marginBottom: 3,
// //   }
// // });



// // const PDFTemplateOne = ({ formData }) => (
// //   <Document>
// //     <Page size="A4" style={styles.page}>
// //       {/* Personal Details Section */}
// //       <View style={styles.section}>
// //         <Text style={styles.name}>
// //           {formData.firstName} {formData.lastName}
// //         </Text>
// //         <View style={styles.contactInfo}>
// //           <Text>
// //             {formData.address} | {formData.email} | {formData.phone}
// //           </Text>
// //           <Text>
// //             {formData.linkedin && `LinkedIn: ${formData.linkedin}`} | 
// //             {formData.github && `GitHub: ${formData.github}`}
// //           </Text>
// //         </View>
// //       </View>

// //       {/* Objective Section */}
// //       {formData.objective && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Objective</Text>
// //           <View style={styles.horizontalLine} />
// //           <Text style={styles.objective}>{formData.objective}</Text>
// //         </View>
// //       )}

// //       {/* Education Section */}
// //       {formData.education?.length > 0 && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Education</Text>
// //           <View style={styles.horizontalLine} />
// //           {formData.education.map((edu, idx) => (
// //             <View key={idx} style={{ marginBottom: 8 }}>
// //               <View style={styles.spaceBetween}>
// //                 <Text style={styles.subheading}>{edu.institution}</Text>
// //                 <Text>
// //                   {edu.startYear} - {edu.endYear || 'Present'}
// //                 </Text>
// //               </View>
// //               <Text>{edu.degree}</Text>
// //               {edu.grade && <Text>Grade: {edu.grade}</Text>}
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {/* Experience Section */}
// //       {formData.experience?.length > 0 && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Experience</Text>
// //           <View style={styles.horizontalLine} />
// //           {formData.experience.map((exp, idx) => (
// //             <View key={idx} style={{ marginBottom: 8 }}>
// //               <View style={styles.spaceBetween}>
// //                 <Text style={styles.subheading}>
// //                   {exp.jobTitle || "fallback role"} - {exp.company}
// //                 </Text>
// //                 <Text>
// //                   {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate) || 'Present'}
// //                 </Text>
// //               </View>
// //               {exp.bullets?.map((bullet, bulletIdx) => (
// //                 <Text key={bulletIdx} style={styles.bullet}>
// //                   • {bullet}
// //                 </Text>
// //               ))}
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {/* Projects Section */}
// //       {formData.projects?.length > 0 && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Projects</Text>
// //           <View style={styles.horizontalLine} />
// //           {formData.projects.map((proj, idx) => (
// //             <View key={idx} style={{ marginBottom: 8 }}>
// //               <Text style={styles.subheading}>{proj.title}</Text>
// //               {proj.link && (
// //                 <Text style={styles.link}>
// //                   {proj.link.startsWith('http') ? (
// //                     <Text>Link: {proj.link}</Text>
// //                   ) : (
// //                     <Text>Link: https://{proj.link}</Text>
// //                   )}
// //                 </Text>
// //               )}
// //               <Text>{proj.description}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {/* Skills Section */}
// //       {(formData.skills?.languages?.length > 0 || formData.skills?.tools?.length > 0) && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Skills</Text>
// //           <View style={styles.horizontalLine} />
// //           {formData.skills.languages?.length > 0 && (
// //             <View style={styles.skillsSection}>
// //               <Text style={styles.subheading}>Languages:</Text>
// //               <Text>{formData.skills.languages.join(", ")}</Text>
// //             </View>
// //           )}
// //           {formData.skills.tools?.length > 0 && (
// //             <View style={styles.skillsSection}>
// //               <Text style={styles.subheading}>Tools & Technologies:</Text>
// //               <Text>{formData.skills.tools.join(", ")}</Text>
// //             </View>
// //           )}
// //         </View>
// //       )}

// //       {/* Certifications Section */}
// //       {formData.certifications?.length > 0 && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Certifications</Text>
// //           <View style={styles.horizontalLine} />
// //           {formData.certifications.map((cert, idx) => (
// //             <View key={idx} style={{ marginBottom: 5 }}>
// //               <Text style={styles.subheading}>{cert.name}</Text>
// //               <Text>{cert.organization} • Issued {cert.issueDate}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       )}

// //       {/* Extracurricular Activities Section */}
// //       {formData.extracurricularActivities?.length > 0 && (
// //         <View style={styles.section}>
// //           <Text style={styles.heading}>Extracurricular Activities</Text>
// //           <View style={styles.horizontalLine} />
// //           {formData.extracurricularActivities.map((activity, idx) => (
// //             <View key={idx} style={{ marginBottom: 5 }}>
// //               <Text style={styles.subheading}>
// //                 {activity.jobTitle} - {activity.organization}
// //               </Text>
// //               <Text>{activity.description}</Text>
// //             </View>
// //           ))}
// //         </View>
// //       )}
// //     </Page>
// //   </Document>
// // );

// // export default PDFTemplateOne;

// import React from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// const formatMonthYear = (dateString) => {
//   if (!dateString) return "Present";

//   // Handle both "YYYY-MM" format and full date strings
//   const date = new Date(dateString.includes('-') ? dateString : dateString);
//   if (isNaN(date.getTime())) return dateString; // Return original if invalid

//   const monthNames = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//   ];
//   return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
// };

// const styles = StyleSheet.create({
//   page: {
//     fontFamily: "Helvetica",
//     padding: 40,
//     fontSize: 11,
//     lineHeight: 1.6,
//     color: "#333",
//   },
//   section: { 
//     marginBottom: 15,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     marginBottom: 5,
//     textAlign: "center"
//   },
//   contactInfo: {
//     marginBottom: 15,
//     textAlign: "center",
//     lineHeight: 1.4,
//   },
//   heading: {
//     fontSize: 14,
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     marginBottom: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     paddingBottom: 3,
//   },
//   subheading: {
//     fontSize: 12,
//     fontWeight: "bold",
//     marginBottom: 3,
//   },
//   bullet: { 
//     marginLeft: 10,
//     marginBottom: 3,
//   },
//   objective: {
//     marginBottom: 10,
//     textAlign: "left",
//   },
//   spaceBetween: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 3,
//   },
//   link: {
//     color: "#0b1f6b",
//     marginBottom: 3,
//     textDecoration: "none",
//   },
//   skillsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     gap: 5,
//     marginBottom: 3,
//   },
//   skillItem: {
//     backgroundColor: "#f0f0f0",
//     paddingHorizontal: 5,
//     borderRadius: 3,
//   },
// });

// const PDFTemplateOne = ({ formData }) => {
//   // Debug output - remove in production
//   console.log("PDF Template Received Data:", formData);

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         {/* Header Section */}
//         <View style={styles.section}>
//           <Text style={styles.name}>
//             {formData.firstName || "First"} {formData.lastName || "Last"}
//           </Text>
//           <View style={styles.contactInfo}>
//             <Text>
//               {[
//                 formData.address,
//                 formData.email,
//                 formData.phone,
//               ].filter(Boolean).join(" | ")}
//             </Text>
//             <Text>
//               {[
//                 formData.linkedin && `LinkedIn: ${formData.linkedin}`,
//                 formData.github && `GitHub: ${formData.github}`
//               ].filter(Boolean).join(" | ")}
//             </Text>
//           </View>
//         </View>

//         {/* Objective Section */}
//         {formData.objective && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Objective</Text>
//             <Text style={styles.objective}>{formData.objective}</Text>
//           </View>
//         )}

//         {/* Education Section */}
//         {formData.education?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Education</Text>
//             {formData.education.map((edu, idx) => (
//               <View key={idx} style={{ marginBottom: 10 }}>
//                 <View style={styles.spaceBetween}>
//                   <Text style={styles.subheading}>{edu.institution || "Educational Institution"}</Text>
//                   <Text>
//                     {edu.startYear || "Start"} - {edu.endYear || "Present"}
//                   </Text>
//                 </View>
//                 <Text>{edu.degree || "Degree/Field of Study"}</Text>
//                 {edu.grade && <Text>Grade: {edu.grade}</Text>}
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Experience Section - Fixed jobTitle display */}
//         {formData.experience?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Work Experience</Text>
//             {formData.experience.map((exp, idx) => (
//               <View key={idx} style={{ marginBottom: 10 }}>
//                 <View style={styles.spaceBetween}>
//                   <Text style={styles.subheading}>
//                     {exp.title || "Position"} at {exp.company || "Company"}
//                   </Text>
//                   <Text>
//                     {exp.startDate ? formatMonthYear(exp.startDate) : "Start"} - 
//                     {exp.endDate ? formatMonthYear(exp.endDate) : "Present"}
//                   </Text>
//                 </View>

//                 {exp.bullets?.length > 0 && (
//                   <View style={{ marginTop: 5 }}>
//                     {exp.bullets.map((bullet, bulletIdx) => (
//                       bullet && (
//                         <Text key={bulletIdx} style={styles.bullet}>
//                           • {bullet}
//                         </Text>
//                       )
//                     ))}
//                   </View>
//                 )}
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Projects Section */}
//         {formData.projects?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Projects</Text>
//             {formData.projects.map((proj, idx) => (
//               <View key={idx} style={{ marginBottom: 10 }}>
//                 <Text style={styles.subheading}>{proj.title || "Project Title"}</Text>
//                 {proj.link && (
//                   <Text style={styles.link}>
//                     {proj.link.startsWith('http') ? proj.link : `https://${proj.link}`}
//                   </Text>
//                 )}
//                 <Text>{proj.description || "Project description"}</Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Skills Section */}
//         {(formData.skills?.languages?.length > 0 || formData.skills?.tools?.length > 0) && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Skills</Text>
//             {formData.skills.languages?.length > 0 && (
//               <View style={{ marginBottom: 5 }}>
//                 <Text style={styles.subheading}>Languages:</Text>
//                 <View style={styles.skillsContainer}>
//                   {formData.skills.languages.map((skill, idx) => (
//                     <Text key={idx} style={styles.skillItem}>{skill}</Text>
//                   ))}
//                 </View>
//               </View>
//             )}
//             {formData.skills.tools?.length > 0 && (
//               <View>
//                 <Text style={styles.subheading}>Tools & Technologies:</Text>
//                 <View style={styles.skillsContainer}>
//                   {formData.skills.tools.map((tool, idx) => (
//                     <Text key={idx} style={styles.skillItem}>{tool}</Text>
//                   ))}
//                 </View>
//               </View>
//             )}
//           </View>
//         )}

//         {/* Certifications Section */}
//         {formData.certifications?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Certifications</Text>
//             {formData.certifications.map((cert, idx) => (
//               <View key={idx} style={{ marginBottom: 5 }}>
//                 <Text style={styles.subheading}>{cert.name || "Certification Name"}</Text>
//                 <Text>
//                   {cert.organization || "Issuing Organization"} • 
//                   {cert.issueDate ? ` Issued ${cert.issueDate}` : ""}
//                 </Text>
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Extracurricular Activities Section */}
//         {formData.extracurricularActivities?.length > 0 && (
//           <View style={styles.section}>
//             <Text style={styles.heading}>Extracurricular Activities</Text>
//             {formData.extracurricularActivities.map((activity, idx) => (
//               <View key={idx} style={{ marginBottom: 5 }}>
//                 <Text style={styles.subheading}>
//                   {activity.role || "Role"} - {activity.organization || "Organization"}
//                 </Text>
//                 <Text>{activity.description || "Activity description"}</Text>
//               </View>
//             ))}
//           </View>
//         )}
//       </Page>
//     </Document>
//   );
// };

// export default PDFTemplateOne;

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const formatMonthYear = (dateString) => {
  if (!dateString) return "Present";

  const date = new Date(dateString.includes('-') ? dateString : dateString);
  if (isNaN(date.getTime())) return dateString;

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 40,
    fontSize: 11,
    lineHeight: 1.5,
    color: "#333",
  },
  section: {
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 5,
    textAlign: "center",
    letterSpacing: 1
  },
  contactInfo: {
    marginBottom: 15,
    textAlign: "center",
    lineHeight: 1.4,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 3,
    letterSpacing: 0.5
  },
  subheading: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 3,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 3,
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  link: {
    color: "#0b1f6b",
    marginBottom: 3,
    textDecoration: "none",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginBottom: 5,
  },
  skillItem: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 10,
  },
  techStack: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 3,
  },
  hackathonEntry: {
    marginBottom: 12,
  },
  hobbiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 5,
  },
  hobbyItem: {
    backgroundColor: "#f0f7ff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 10,
    color: "#0369a1",
  },
});

const PDFTemplateOne = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.section}>
          <Text style={styles.name}>
            {formData.firstName} {formData.lastName}
          </Text>
          <View style={styles.contactInfo}>
            <Text>
              {[formData.email, formData.phone, formData.address].filter(Boolean).join(" • ")}
            </Text>
            <Text>
              {[formData.linkedin && `LinkedIn: ${formData.linkedin}`,
              formData.github && `GitHub: ${formData.github}`].filter(Boolean).join(" • ")}
            </Text>
          </View>
        </View>

        {/* Objective */}
        {formData.objective && (
          <View style={styles.section}>
            <Text style={styles.heading}>PROFESSIONAL SUMMARY</Text>
            <Text>{formData.objective}</Text>
          </View>
        )}

        {/* Experience */}
        {formData.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>PROFESSIONAL EXPERIENCE</Text>
            {formData.experience.map((exp, idx) => (
              <View key={idx} style={{ marginBottom: 12 }}>
                <View style={styles.spaceBetween}>
                  <Text style={styles.subheading}>
                    {exp.title || exp.jobTitle}, {exp.company}
                  </Text>
                  <Text>
                    {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate)}
                  </Text>
                </View>
                {exp.bullets?.map((bullet, bi) => (
                  <Text key={bi} style={styles.bullet}>• {bullet}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Hackathons/Competitions */}
        {formData.hackathons?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>HACKATHONS & COMPETITIONS</Text>
            {formData.hackathons.map((hack, idx) => (
              <View key={idx} style={styles.hackathonEntry}>
                <View style={styles.spaceBetween}>
                  <Text style={styles.subheading}>{hack.name}</Text>
                  <Text>{formatMonthYear(hack.date)}</Text>
                </View>
                <Text>{hack.organizer}</Text>
                {hack.rank && <Text>Achievement: {hack.rank}</Text>}
                {hack.techStack && (
                  <View style={styles.techStack}>
                    <Text>Tech: </Text>
                    {hack.techStack.split(',').map((tech, i) => (
                      <Text key={i} style={styles.skillItem}>{tech.trim()}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {formData.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>PROJECTS</Text>
            {formData.projects.map((proj, idx) => (
              <View key={idx} style={{ marginBottom: 10 }}>
                <Text style={styles.subheading}>{proj.title}</Text>
                {proj.link && <Text style={styles.link}>{proj.link}</Text>}
                <Text>{proj.description}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {formData.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>EDUCATION</Text>
            {formData.education.map((edu, idx) => (
              <View key={idx} style={{ marginBottom: 8 }}>
                <View style={styles.spaceBetween}>
                  <Text style={styles.subheading}>{edu.institution}</Text>
                  <Text>
                    {edu.startYear} - {edu.endYear || 'Present'}
                  </Text>
                </View>
                <Text>{edu.degree}</Text>
                {edu.grade && <Text>Grade: {edu.grade}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {(formData.skills?.languages?.length > 0 || formData.skills?.tools?.length > 0) && (
          <View style={styles.section}>
            <Text style={styles.heading}>TECHNICAL SKILLS</Text>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              {formData.skills.languages?.length > 0 && (
                <View>
                  <Text style={styles.subheading}>Languages:</Text>
                  <View style={styles.skillsContainer}>
                    {formData.skills.languages.map((skill, idx) => (
                      <Text key={idx} style={styles.skillItem}>{skill}</Text>
                    ))}
                  </View>
                </View>
              )}
              {formData.skills.tools?.length > 0 && (
                <View>
                  <Text style={styles.subheading}>Tools:</Text>
                  <View style={styles.skillsContainer}>
                    {formData.skills.tools.map((tool, idx) => (
                      <Text key={idx} style={styles.skillItem}>{tool}</Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Certifications */}
        {formData.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>CERTIFICATIONS</Text>
            {formData.certifications.map((cert, idx) => (
              <View key={idx} style={{ marginBottom: 5 }}>
                <Text style={styles.subheading}>{cert.name}</Text>
                <Text>{cert.organization} • {cert.issueDate}</Text>
              </View>
            ))}
          </View>
        )}
        {/* hobbies */}
        {formData.hobbies?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>HOBBIES & INTERESTS</Text>
            <View style={styles.skillsContainer}>
              {formData.hobbies.map((hobby, idx) => (
                <Text key={idx} style={styles.skillItem}>
                  {hobby}
                </Text>
              ))}
            </View>
          </View>
        )}
        {/* Extracurricular */}
        {formData.extracurricularActivities?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>LEADERSHIP & ACTIVITIES</Text>
            {formData.extracurricularActivities.map((act, idx) => (
              <View key={idx} style={{ marginBottom: 5 }}>
                <Text style={styles.subheading}>
                  {act.role}, {act.organization}
                </Text>
                <Text>{act.description}</Text>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PDFTemplateOne;