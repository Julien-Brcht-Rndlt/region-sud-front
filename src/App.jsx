import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import RouterPaf from './RouterPaf';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterPaf>
          <HomePage />
        </RouterPaf>
      </ThemeProvider>
    </>
  );
}

export default App;
