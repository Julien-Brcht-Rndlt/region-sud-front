import { useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import EmiRouter from './EmiRouter';
import theme from './styles/theme';
import FunnelContext from './contexts/FunnelContext';
import OrgContext from './contexts/OrgContext';
import EventContext from './contexts/EventContext';
import EvalContext from './contexts/EvalContext';
import formReducer from './reducers/formReducer';
import evalReducer from './reducers/evalReducer';
import datatest from './mockdata/datatest.json';

function App() {
  const [funnel] = useState(datatest);
  const [organization] = useState({});
  const [orgEvent] = useState({});
  const [eventEval] = useState({
    themes: [],
  });

  const [formState, dispatch] = useReducer(formReducer, { org: organization, orgEvent });
  const [evalState, evalDispatch] = useReducer(evalReducer, { eval: eventEval });

  return (
    <ThemeProvider theme={theme}>
      <FunnelContext.Provider value={{ funnel }}>
        <OrgContext.Provider value={{ org: formState.org, dispatch }}>
          <EventContext.Provider
            value={{ orgEvent: formState.orgEvent, dispatch }}
          >
            <EvalContext.Provider value={{ evalState, evalDispatch }}>
              <EmiRouter />
            </EvalContext.Provider>
          </EventContext.Provider>
        </OrgContext.Provider>
      </FunnelContext.Provider>
    </ThemeProvider>
  );
}

export default App;
