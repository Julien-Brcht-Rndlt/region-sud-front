import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import { DocumentTitle, TitleContain } from './DocumentList';
import EvalData from '../../mockdata/datatest.json';

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
          <Text>
            {EvalData.themes.map((theme) => (
              <>
                <DocumentTitle />
                <TitleContain theme={theme} />
              </>
            ))}
          </Text>
          <Text>test</Text>
        </View>
      </Page>
    </Document>
  );
}
