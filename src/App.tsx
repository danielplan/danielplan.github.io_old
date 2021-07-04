import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import References from 'pages/References';
import Header from 'components/layout/Header';

export default function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/references" component={References} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}