import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import RouterPaf from './RouterPaf';
import theme from './assets/styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterPaf />
      </ThemeProvider>
    </>
  );
}

export default App;
