import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EvaluateImpact from './components/emi/EvaluateImpact';
import EvalGlobalScore from './components/emi/EvalGlobalScore';
import FaqHome from './components/faq/FaqHome';

export default function EmiRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/EmiHome" component={EvaluateImpact} />
        <Route path="/FaqHome" component={FaqHome} />
        <Route path="/EmiScore" component={EvalGlobalScore} />
      </Switch>
      <Footer />
    </Router>
  );
}
