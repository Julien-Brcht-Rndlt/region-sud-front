import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EvaluateImpact from './components/emi/EvaluateImpact';
import FaqHome from './components/faq/FaqHome';
import EvalResult from './components/emi/EvalResult';
import RequireModal from './components/requirements/RequireModal';
import EvalProcess from './components/funnel/EvalProcess';

export default function EmiRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/EmiStart" component={EvaluateImpact} />
        <Route path="/EmiEval/:id" component={EvalProcess} />
        <Route path="/EmiResult" component={EvalResult} />
        <Route path="/FaqHome" component={FaqHome} />
        <Route path="/RequireModal" component={RequireModal} />
      </Switch>
      <Footer />
    </Router>
  );
}
