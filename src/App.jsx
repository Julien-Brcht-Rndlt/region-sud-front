import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import EmiRouter from './EmiRouter';
import theme from './styles/theme';
import FunnelContext from './contexts/funnel-context';
import datatest from './mockdata/datatest.json';

function App() {
  const [funnel] = useState(datatest);
  /* console.log(funnel); */
  return (
    <ThemeProvider theme={theme}>
      <FunnelContext.Provider value={{ funnel }}>
        <EmiRouter />
      </FunnelContext.Provider>
    </ThemeProvider>
  );
}

export default App;
