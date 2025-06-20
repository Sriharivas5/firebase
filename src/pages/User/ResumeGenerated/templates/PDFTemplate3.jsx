
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
        fontFamily: 'Helvetica',
        // padding: 40,
        fontSize: 11,
        lineHeight: 1.4,
        color: "#333",
    },
    section: {
        marginBottom: 5,
    },



    heading: {
        color: "#db9b0f",
        fontWeight: "700",
        fontSize: 12
    },
    hr: {
        width: "100%",
        height: 1,
        backgroundColor: "#db9b0f",
        marginBottom: 10
    },

    italic: {
        fontFamily: "Helvetica",
        fontStyle: "italic",
        fontSize: 10
    },

    bullet: {
        marginTop: 1
    },
    spaceBetween: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    link: {
        fontStyle: "italic",
        color: "blue",
        fontSize: 10,
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
  
    },



    left: {
        width: "35%",
        backgroundColor: "#454D58",
        paddingVertical: 20,
    },
    headersSection: {

        marginBottom: 10,

    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 0.5,
        color: "#FFFFFF",
        lineHeight: 1.2,
        paddingLeft: 15
    },
    leftHeading: {
        backgroundColor: "#373C45",
        color: "#fff",
        width: "100%",
        padding: 5,
        paddingLeft: 15,
        fontSize: 15,
        marginBottom: 7
    },
    contactInfo: {
        color: "#d4d4d4",
        paddingLeft: 15,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: 5
    },
    subheading: {
        color: "#FFFFFF",
        fontWeight: "800",
        fontSize: 11,
    },
    leftFlex: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "wrap",
        padding: 15
    },
    skillItem: {
        color: "#fff"
    },

    right: {
        width: "65%"
    }



});

const PDFTemplateThree = ({ formData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>




                <View style={styles.flex}>
                    <View style={styles.left}>
                        <View style={styles.headersSection}>
                            <Text style={styles.name}>
                                {formData.firstName}
                            </Text>
                            <Text style={styles.name}>
                                {formData.lastName}
                            </Text>
                        </View>
                        <View >
                            <Text style={styles.leftHeading}>Personal Info</Text>
                            <View style={styles.contactInfo}>
                                <View>
                                    <Text style={styles.subheading}>Email :-</Text>
                                    {formData.email && <Text>{formData.email}</Text>}
                                </View>
                                <View>
                                    <Text style={styles.subheading}>Phone :-</Text>
                                    {formData.phone && <Text>{formData.phone}</Text>}
                                </View>
                                <View>
                                    <Text style={styles.subheading}>LinkedIn :-</Text>
                                    {formData.linkedin && <Text>{formData.linkedin}</Text>}
                                </View>
                                <View>
                                    <Text style={styles.subheading}>Github :-</Text>
                                    {formData.github && <Text>{formData.github}</Text>}
                                </View>

                            </View>
                        </View>
                        {/* Skills */}
                        {(formData.skills?.languages?.length > 0 || formData.skills?.tools?.length > 0) && (
                            <View style={styles.section}>
                                <Text style={styles.leftHeading}>SKILLS</Text>
                                <View style={styles.contactInfo}>
                                    {formData.skills.languages?.length > 0 && (
                                        <View>
                                            <Text style={styles.subheading}>Skills:</Text>
                                            <View style={styles.leftFlex}>
                                                {formData.skills.languages.map((skill, idx) => (
                                                    <Text key={idx} style={styles.skillItem}>{skill}</Text>
                                                ))}
                                            </View>
                                        </View>
                                    )}
                                    {formData.skills.tools?.length > 0 && (
                                        <View>
                                            <Text style={styles.subheading}>Tools:</Text>
                                            <View style={styles.leftFlex}>
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
                                <Text style={styles.leftHeading}>CERTIFICATIONS</Text>
                                {formData.certifications.map((cert, idx) => (
                                    <View key={idx} style={{ marginBottom: 5 }}>
                                        <Text style={styles.subheading}>{cert.name}</Text>
                                        <View style={styles.flex}>
                                            <Text> Certified By {cert.organization} In</Text>
                                            <Text style={{ fontStyle: "italic" }}>{cert.issueDate}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                    <View style={styles.right}>
                        {/* Objective */}
                        {formData.objective && (
                            <View style={styles.section}>
                                <Text>{formData.objective}</Text>
                            </View>
                        )}

                        {/* Experience */}
                        {formData.experience?.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.heading}>PROFESSIONAL EXPERIENCE</Text>
                                <View style={styles.hr}></View>
                                {formData.experience.map((exp, idx) => (
                                    <View key={idx} style={{ marginBottom: 7 }}>
                                        <View style={styles.flex}>
                                            <View style={styles.flex}>
                                                <Text style={styles.subheading}>
                                                    {exp.title || exp.jobTitle},
                                                </Text>
                                                <Text style={styles.italic}>
                                                    {exp.company}
                                                </Text>
                                            </View>
                                            <Text>
                                                |  {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate)}
                                            </Text>
                                        </View>
                                        {exp.bullets?.map((bullet, bi) => (
                                            <Text key={bi} style={styles.bullet}>• {bullet}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        )}

                        {/* Projects */}
                        {formData.projects?.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.heading}>PROJECTS</Text>
                                <View style={styles.hr}></View>
                                {formData.projects.map((proj, idx) => (
                                    <View key={idx} style={{ marginBottom: 5 }}>
                                        <View style={styles.spaceBetween}>
                                            <Text style={styles.subheading}>{proj.title}</Text>
                                            <Text style={styles.link}>{proj.link && <Text style={styles.link}>{proj.link}</Text>}</Text>
                                        </View>
                                        <Text>{proj.description}</Text>
                                    </View>
                                ))}
                            </View>
                        )}


                        {/* Education */}
                        {formData.education?.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.heading}>EDUCATION</Text>
                                <View style={styles.hr}></View>
                                {formData.education.map((edu, idx) => (
                                    <View key={idx} style={{ marginBottom: 7 }}>
                                        <View style={styles.flex}>
                                            <Text style={styles.subheading} >{edu.degree}</Text>
                                            <Text style={styles.italic} >{edu.institution}</Text>
                                            <Text>  {edu.startYear} - {edu.endYear || 'Present'} </Text>
                                        </View>

                                    </View>
                                ))}
                            </View>
                        )}

                    </View>
                </View>





















            </Page>
        </Document>
    );
};

export default PDFTemplateThree;