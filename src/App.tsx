import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { CreationProvider } from 'data/CreationsContext';
import ScrollTop from 'components/helpers/ScrollTop';

import Home from 'pages/Home';
import Creations from 'pages/Creations';
import CreationsDetail from 'pages/Creations/Detail';
import Contact from 'pages/Contact';

export default function App(): JSX.Element {
  return (
    <Router>
      <ScrollTop />
      <Header />
      <CreationProvider>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/creations/:slug" component={CreationsDetail} />
          <Route path="/creations" component={Creations} />
          <Route path="/" component={Home} />
        </Switch>
      </CreationProvider>
      <Footer />
    </Router>
  );
}