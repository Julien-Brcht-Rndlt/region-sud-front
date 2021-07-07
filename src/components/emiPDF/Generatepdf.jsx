import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    textAlign: 'center',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export default function MyDocument() {
  return (
    <Document styles="width: 100%">
      <Page wrap size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Bientôt l&#39;affichage des résultats</Text>
        </View>
      </Page>
    </Document>
  );
}
