import { useEffect, useReducer, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import EmiRouter from './EmiRouter';
import theme from './styles/theme';
import FunnelContext from './contexts/FunnelContext';
import OrgContext from './contexts/OrgContext';
import EventContext from './contexts/EventContext';
import EvalContext from './contexts/EvalContext';
import formReducer from './reducers/formReducer';
import evalReducer from './reducers/evalReducer';

function App() {
  const handleUnload = () => {
    localStorage.clear();
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  const [funnel, setFunnel] = useState({});
  const [organization] = useState({});
  const [orgEvent] = useState({});
  const [eventEval] = useState({
    themes: [],
    completedThemes: [],
  });
  const [loadUpdate, setLoadUpdate] = useState(0);

  const updateDisplay = () => {
    setLoadUpdate((prevState) => prevState + 1);
  };

  useEffect(() => {
    const getEmiFunnel = () => {
      axios.get('http://localhost:8080/emi/funnels')
      .then((response) => response.data)
      .then((data) => {
        setFunnel(data);
      })
      .catch((err) => {
        console.error(err);
      });
    };
    getEmiFunnel();
  }, []);

  const [formState, dispatch] = useReducer(formReducer, { org: organization, orgEvent });
  const [evalState, evalDispatch] = useReducer(evalReducer, { ...eventEval });
  return (
    <ThemeProvider theme={theme}>
      <FunnelContext.Provider value={{ funnel }}>
        <OrgContext.Provider value={{ org: formState.org, dispatch }}>
          <EventContext.Provider
            value={{ orgEvent: formState.orgEvent, dispatch }}
          >
            <EvalContext.Provider value={{
              evalState,
              evalDispatch,
              loadUpdate,
              updateDisplay,
              }}
            >
              <EmiRouter />
            </EvalContext.Provider>
          </EventContext.Provider>
        </OrgContext.Provider>
      </FunnelContext.Provider>
    </ThemeProvider>
  );
}

export default App;
