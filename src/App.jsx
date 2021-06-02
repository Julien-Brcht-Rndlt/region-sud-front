import { ThemeProvider } from 'styled-components';
import ImageHomePage from './components/ImageHomePage';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Title from './components/Title';
import MapHome from './components/MapHome';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Region-Sud</h1>
        <ImageHomePage />
        <Title />
        <MapHome />
      </ThemeProvider>
    </>
  );
}

export default App;
