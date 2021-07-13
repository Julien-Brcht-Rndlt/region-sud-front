/* import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import EvalData from '../../mockdata/datatest.json';
import { TitleTheme, TitleContain } from './DocumentList';

// Create styles
const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    flexDirection: 'column',
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
          <Text>Pour l&#39;ensemble de l&#39;évaluation, voici les résultats :</Text>
          <Text>
            {EvalData.themes.map((theme) => (
              <TitleTheme title={theme.title} />
            ))}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            <>
              {EvalData.themes.map((questions) => (
                <Text>
                  {questions.map((list) => (
                    <TitleContain questions={list.questions} />
                  ))}
                </Text>
            ))}
            </>
          </Text>
        </View>
      </Page>
    </Document>
  );
}
 */
