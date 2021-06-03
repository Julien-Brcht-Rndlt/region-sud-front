import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

export default function RouterPaf() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="#" component="" />
          <Route path="#" component="" />
          <Route path="#" component="" />
        </Switch>
      </Router>
    </>
  );
}
