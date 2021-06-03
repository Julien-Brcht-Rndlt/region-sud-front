import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
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
        <Header />
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
