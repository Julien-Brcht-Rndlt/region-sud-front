import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import EvalMyImpact from './components/emi/EvalMyImpact';
import EvalResult from './components/emi/EvalResult';
import RequireModal from './components/requirements/RequireModal';
import DisplayPdf from './components/emiPDF/DisplayPdf';
import InfosEvalForm from './components/infosEvalForm/InfosEvalForm';

export default function EmiRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/EmiStart" component={EvalMyImpact} />
        <Route exact path="/Form" component={InfosEvalForm} />
        <Route path="/EmiEval/:id" component={EvalMyImpact} />
        <Route path="/EmiResult" component={EvalResult} />
        <Route path="/RequireModal" component={RequireModal} />
        <Route path="/EmiPDF" component={DisplayPdf} />
      </Switch>
      <Footer />
    </Router>
  );
}
