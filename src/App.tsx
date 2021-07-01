import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import References from 'pages/References';
import Navigation from 'components/layout/Navigation';

export default function App(): JSX.Element {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/references" component={References} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}