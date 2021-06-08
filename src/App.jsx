import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import RouterPaf from './RouterPaf';
import theme from './assets/styles/theme';
import InfosForm from './components/InfosForm/InfosForm';

function App() {
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterPaf />
        <InfosForm />
      </ThemeProvider>
    </>
  );
}

export default App;
