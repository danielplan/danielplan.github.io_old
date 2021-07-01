import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';

export default function App(): JSX.Element {
  return (
    <div className="app-wrapper">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}