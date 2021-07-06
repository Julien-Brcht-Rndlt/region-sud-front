import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EvalMyImpact from './components/emi/EvalMyImpact';
import FaqHome from './components/faq/FaqHome';
import EvalResult from './components/emi/EvalResult';
import RequireModal from './components/requirements/RequireModal';
import DisplayPdf from './components/emiPDF/DisplayPdf';

export default function EmiRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/EmiStart" component={EvalMyImpact} />
        <Route path="/EmiEval/:id" component={EvalMyImpact} />
        <Route path="/EmiResult" component={EvalResult} />
        <Route path="/FaqHome" component={FaqHome} />
        <Route path="/RequireModal" component={RequireModal} />
        <Route path="/pdf" component={DisplayPdf} />
      </Switch>
      <Footer />
    </Router>
  );
}
