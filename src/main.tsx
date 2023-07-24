import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter basename='/rps'>
    <App />
  </BrowserRouter>,
  document.getElementById('app')!
);
