import App from './App';
import './index.scss';
import { hydrate, render } from 'react-dom';
 
const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}