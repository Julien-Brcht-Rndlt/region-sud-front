import { ThemeProvider } from 'styled-components';
import RouterPaf from './RouterPaf';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterPaf />
    </ThemeProvider>
  );
}

export default App;
