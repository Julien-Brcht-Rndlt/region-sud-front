import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EvaluateImpact from './components/emi/EvaluateImpact';
import FaqFome from './components/faq/FaqHome';

export default function EmiRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/EmiHome" component={EvaluateImpact} />
        <Route path="/FaqHome" component={FaqFome} />
        <Route path="#" component="" />
      </Switch>
      <Footer />
    </Router>
  );
}
