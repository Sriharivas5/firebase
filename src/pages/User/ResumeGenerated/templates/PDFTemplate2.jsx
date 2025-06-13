import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
    color: '#333',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2a2a2a',
  },
  section: {
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 14,
  },
  text: {
    fontSize: 12,
    marginBottom: 6,
  },
});

const PDFTemplate2 = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      
      <Text style={styles.header}>{formData.name} vdfgdgfghdf</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{formData.email}</Text>
        <Text style={styles.label}>Summary</Text>
        <Text style={styles.text}>{formData.summary}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFTemplate2;
