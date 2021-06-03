import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Testimonies from './components/Testimonies';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Testimonies />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
