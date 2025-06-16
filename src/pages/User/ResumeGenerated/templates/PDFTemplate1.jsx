// src/pages/User/ResumeGenerated/templates/PDFTemplateOne.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";


const formatMonthYear = (monthYear) => {
  if (!monthYear) return "";
  const [year, month] = monthYear.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const m = parseInt(month, 10);
  return monthNames[m - 1] + " " + year;
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 40,
    fontSize: 11,
    lineHeight: 1.6,
    color: "#333",
    // backgroundColor:"red"
  },
  section: { marginBottom: 1 },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 5,
  },
  subheading: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
  },
  bullet: { marginLeft: 10 },

  // old
  name: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 13,
    textAlign: "center"
  },
  centerText: {
    marginBottom: 1,
    textAlign: "center",
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 10,
  }
  ,
  objective: {
    marginBottom: 2,
    textAlign: "center",
    padding: 7
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
    marginVertical: 2,
  },
  spaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    textDecoration: 'underline',
    color: "#0b1f6b"
  },
  miniHeading: {
    fontWeight: 700
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  }


});

const PDFTemplateOne = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.name}>{formData.name }</Text>


        <Text style={styles.centerText}> {formData.location} |  {formData.email} | {formData.phone} |  {formData.website}</Text>


        <Text style={styles.centerText}>{formData.linkedin} | {formData.github}</Text>
      </View>


      <View styles={styles.objective}>
        <Text style={styles.heading}>Objective</Text>
        <View style={styles.horizontalLine} />
        <Text >{formData.objective}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <View style={styles.horizontalLine} />
        {formData.education.map((edu, idx) => (
          <View key={idx}>
            <View style={styles.spaceBetween}>
              <Text style={styles.subheading}>{edu.institution}</Text>
              <Text>
                {formatMonthYear(edu.startDate)} – {formatMonthYear(edu.endDate)}
              </Text>
            </View>
            {/* <Text >{edu.educationLevel}  {edu.gpa} </Text> */}
            <Text>
              {edu.educationLevel} –
              {edu.gradingType === "percentage"
                ? `Percentage: ${edu.gpa}%`
                : `GPA: ${edu.gpa}`}
            </Text>
            {/* <Text>{edu.educationLevel}</Text> */}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <View style={styles.horizontalLine} />
        {formData.experience.map((exp, idx) => (
          <View key={idx}>
            <View style={styles.spaceBetween}>
              <Text style={styles.subheading}>{exp.title} – {exp.company}</Text>
              <Text>
                {formatMonthYear(exp.startDate)} – {formatMonthYear(exp.endDate)}
              </Text>
            </View>

            <Text>{exp.location} </Text>
            {exp.bullets.map((b, j) => (
              <Text key={j} style={styles.bullet}>• {b}</Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        <View style={styles.horizontalLine} />
        {formData.projects.map((proj, idx) => (
          <View key={idx}>
            <View style={styles.spaceBetween}>
              <Text style={styles.subheading}>{proj.name}</Text>
              <Text>
                {formatMonthYear(proj.startDate)} – {formatMonthYear(proj.endDate)}
              </Text>
            </View>
            <Text style={styles.link}>Link: {proj.link}</Text>
            <View style={styles.flex}>
              <Text style={styles.miniHeading}>Tools: </Text>
              <Text >{proj.tools}</Text>
            </View>
            <Text>{proj.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.subheading}>Languages:</Text>
        <Text>{formData.skills.languages.join(", ")}</Text>
        <Text style={styles.subheading}>Tools & Technologies:</Text>
        <Text>{formData.skills.tools.join(", ")}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFTemplateOne;
