import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import RouterPaf from './RouterPaf';
import theme from './assets/styles/theme';
import FunnelContext from './components/context/funnel-context';

function App() {
  return (
    <>
      <FunnelContext.Provider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterPaf />
        </ThemeProvider>
      </FunnelContext.Provider>
    </>
  );
}

export default App;
