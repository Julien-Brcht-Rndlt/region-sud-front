import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import EmiHome from './components/EvaluerMonImpact/EmiHome';

export default function RouterPaf() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/EmiHome" component={EmiHome} />
          <Route path="#" component="" />
          <Route path="#" component="" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
