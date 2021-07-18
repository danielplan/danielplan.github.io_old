import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { CreationProvider } from 'data/CreationsContext';
import ScrollTop from 'components/helpers/ScrollTop';

const Home = lazy(() => import('pages/Home'));
const Creations = lazy(() => import('pages/Creations'));
const Contact = lazy(() => import('pages/Contact'));
const CreationsDetail = lazy(() => import('pages/Creations/Detail'));

export default function App(): JSX.Element {
  return (
    <Router>
      <ScrollTop />
      <Header />
      <CreationProvider>
        <Suspense fallback={(
          <div className="loading-container">
          </div>
        )}>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/creations/:slug" component={CreationsDetail} />
            <Route path="/creations" component={Creations} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </CreationProvider>
      <Footer />
    </Router>
  );
}