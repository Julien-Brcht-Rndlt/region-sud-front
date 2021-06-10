import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EmiHome from './components/EvaluateMyImpact/EmiHome';

export default function EmiRouter() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/EmiHome" component={EmiHome} />
          <Route path="#" component="" />
          <Route path="#" component="" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
