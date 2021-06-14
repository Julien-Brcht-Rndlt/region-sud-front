import { ThemeProvider } from 'styled-components';
import EmiRouter from './EmiRouter';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EmiRouter />
    </ThemeProvider>
  );
}

export default App;
