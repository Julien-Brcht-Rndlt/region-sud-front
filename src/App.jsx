import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import InfosForm from './components/InfosForm/InfosForm';
import EmiRouter from './EmiRouter';
import theme from './styles/theme';

function App() {
  const [funnel] = useState(datatest);

  return (
    <ThemeProvider theme={theme}>
      <EmiRouter />
      <InfosForm />
    </ThemeProvider>
  );
}

export default App;
