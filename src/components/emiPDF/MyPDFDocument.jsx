import React from 'react';
import PropTypes from 'prop-types';
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
/* import { TitleTheme, QuestionTheme } from './DocumentList'; */

// Create styles
const styles = StyleSheet.create({
  page: {
/*     justifyContent: 'center', */
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  title: {
    alignItems: 'center',
  },
  section: {
    alignItems: 'start',
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  themeContainer: {
    backgroundColor: '#f6f6f5',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  themeDetails: {
    display: 'flex',
    marginLeft: 5,
    height: 300,
  },
  themeTitle: {
    fontSize: 15,
    marginBottom: 10,
  },
  themeContent: {
    fontSize: 11,
  },
  image: {
    height: 200,
    width: 150,
  },
  questionDetails: {
    display: 'flex',
    marginLeft: 15,
  },
  questionTitle: {
    fontSize: 12,
    marginBottom: 10,
  },
});

// Create Document Component
export default function MyPDFDocument({ evalPDF }) {
  console.log('pdf data to display', evalPDF);
  return (
    <Document styles="width: 100%">
      <Page wrap size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>Evaluer mon Impact: Résultats du sondage !</Text>
          <Text>(Retrouver ci-dessous, les résultats de l&#39;évaluation de votre évènement)</Text>
        </View>
        {
          evalPDF && evalPDF.themes
          && evalPDF.themes.map((theme) => (
            <>
              <View style={styles.themeContainer}>
                <Text style={styles.themeContent}>{theme.icon}</Text>
                <Image
                  style={styles.image}
                  source={theme.icon}
                />
              </View>
              <View style={styles.themeDetails}>
                <Text style={styles.themeTitle}>{theme.title}</Text>
                <Text style={styles.themeContent}>nombre de questions:</Text>
                <Text style={styles.themeContent}>{theme.questions.length}</Text>
              </View>
              <View style={styles.questionDetails}>
                <Text style={styles.questionTitle}>{theme.questions[1].title}</Text>
              </View>
            </>
          ))
        }
      </Page>
    </Document>
  );
}

MyPDFDocument.propTypes = {
  evalPDF: PropTypes.func.isRequired,
};
