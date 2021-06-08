import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RouterPaf() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="#" component="" />
          <Route path="#" component="" />
          <Route path="#" component="" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
