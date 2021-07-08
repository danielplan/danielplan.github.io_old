import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Creations from 'pages/Creations';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { CreationProvider } from 'data/CreationsContext';

export default function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <CreationProvider>
        <Switch>
          <Route path="/creations" component={Creations} />
          <Route path="/" component={Home} />
        </Switch>
      </CreationProvider>
      <Footer />
    </Router>
  );
}