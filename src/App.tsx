import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Creations from 'pages/Creations';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { getAllCreations } from 'data/creations';

export default function App(): JSX.Element {
  console.log(getAllCreations());
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/creations" component={Creations} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}