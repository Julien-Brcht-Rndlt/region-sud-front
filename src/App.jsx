import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Testimonies from './components/Testimonies';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Region-Sud</h1>
        <Testimonies />
      </ThemeProvider>
    </>
  );
}

export default App;
