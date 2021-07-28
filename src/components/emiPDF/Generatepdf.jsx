import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { TitleTheme } from './DocumentList';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function MyDocument() {
  return (
    <Document styles="width: 100%">
      <Page wrap size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Evaluer mon Impact: Résultats du sondage !</Text>
        </View>
      </Page>
    </Document>
  );
}
