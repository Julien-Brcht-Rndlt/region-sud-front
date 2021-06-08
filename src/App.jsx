import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import RouterPaf from './RouterPaf';
import theme from './assets/styles/theme';
import FunnelContext from './components/context/funnel-context';
import datatest from './mockdata/datatest.json';

function App() {
  const [funnel] = useState(datatest);

  return (
    <>
      <FunnelContext.Provider value={{ funnel }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterPaf />
        </ThemeProvider>
      </FunnelContext.Provider>
    </>
  );
}

export default App;
