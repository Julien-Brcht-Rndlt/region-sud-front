import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
// import { theme } from './styles/theme';
import RouterPaf from './RouterPaf';

function App() {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <RouterPaf />
      </ThemeProvider>
    </>
  );
}

export default App;
