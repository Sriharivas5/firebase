
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
        fontFamily: 'Times-Roman',
        padding: 40,
        fontSize: 11,
        lineHeight: 1.4,
        color: "#333",
    },
    section: {
        marginBottom: 5,
    },
    headersSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,

    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 0.5,
        color: "#cd8c01",
        lineHeight: 1.2,
    },
    contactInfo: {
        color: "#cd8c01"

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
    subheading: {
        color: "#000",
        fontWeight: "700",
        fontSize: 11
    },
    italic: {
        fontFamily: "Helvetica",
        fontStyle: "italic",
        fontSize: 10
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
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
    skillItem: {
        marginVertical: 10,
        backgroundColor: "#e7e7e7",
        borderRadius: 3,
        padding: "3px 10px",
    },





});

const PDFTemplateThree = ({ formData }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header Section */}
                <View style={styles.headersSection}>
                    <View>
                        <Text style={styles.name}>
                            {formData.firstName}
                        </Text>
                        <Text style={styles.name}>
                            {formData.lastName}
                        </Text>
                    </View>
                    <View style={styles.contactInfo}>
                        {formData.address && <Text>{formData.address}</Text>}
                        {formData.email && <Text>{formData.email}</Text>}
                        {formData.phone && <Text>{formData.phone}</Text>}
                        {formData.linkedin && <Text>{formData.linkedin}</Text>}
                        {formData.github && <Text>{formData.github}</Text>}
                    </View>
                </View>

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


                {/* Skills */}
                {(formData.skills?.languages?.length > 0 || formData.skills?.tools?.length > 0) && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>TECHNICAL SKILLS</Text>
                        <View style={styles.hr}></View>
                        <View >
                            {formData.skills.languages?.length > 0 && (
                                <View>
                                    <Text style={styles.subheading}>Skills:</Text>
                                    <View style={styles.flex}>
                                        {formData.skills.languages.map((skill, idx) => (
                                            <Text key={idx} style={styles.skillItem}>{skill}</Text>
                                        ))}
                                    </View>
                                </View>
                            )}
                            {formData.skills.tools?.length > 0 && (
                                <View>
                                    <Text style={styles.subheading}>Tools:</Text>
                                    <View style={styles.flex}>
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
                        <View style={styles.hr}></View>

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


                {/* Hackathons/Competitions */}
                {formData.hackathons?.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>HACKATHONS & COMPETITIONS</Text>
                        <View style={styles.hr}></View>
                        {formData.hackathons.map((hack, idx) => (
                            <View key={idx} >
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.subheading}>{hack.name}</Text>
                                    <Text style={{ fontStyle: "italic" }}>{formatMonthYear(hack.date)}</Text>
                                </View>
                                <View style={styles.flex}>
                                    <Text style={{ fontWeight: 600 }}>Organized by:</Text>
                                    <Text>{hack.organizer}</Text>
                                </View>
                                {hack.rank &&
                                    <View style={styles.flex}><Text style={{ fontWeight: 600 }}>Achievement:</Text> <Text> {hack.rank}</Text></View>}
                                {hack.techStack && (
                                    <View style={styles.flex}>
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

            </Page>
        </Document>
    );
};

export default PDFTemplateThree;