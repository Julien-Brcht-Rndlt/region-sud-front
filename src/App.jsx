import { useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import EmiRouter from './EmiRouter';
import theme from './styles/theme';
import FunnelContext from './contexts/FunnelContext';
import OrgContext from './contexts/OrgContext';
import EventContext from './contexts/EventContext';
import EvalContext from './contexts/EvalContext';
import formReducer from './reducers/formReducer';
import datatest from './mockdata/datatest.json';

function App() {
  const [funnel] = useState(datatest);
  const [organization] = useState({});
  const [orgEvent] = useState({});
  const [eventEval] = useState({});
  const [score] = useState(5);
  // ok

  const [formState, dispatch] = useReducer(formReducer, { org: organization, orgEvent });

  return (
    <ThemeProvider theme={theme}>
      <FunnelContext.Provider value={{ funnel }}>
        <OrgContext.Provider value={{ org: formState.org, dispatch }}>
          <EventContext.Provider
            value={{ orgEvent: formState.orgEvent, dispatch }}
          >
            <EvalContext.Provider value={{ eventEval, score }}>
              <EmiRouter />
            </EvalContext.Provider>
          </EventContext.Provider>
        </OrgContext.Provider>
      </FunnelContext.Provider>
    </ThemeProvider>
  );
}

export default App;
