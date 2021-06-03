import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
// import { theme } from './styles/theme';
import RouterPaf from './RouterPaf';
import HomePage from './components/HomePage';
import Testimonies from './components/Testimonies';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <RouterPaf>
          <HomePage />
        </RouterPaf>
        <Testimonies />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
