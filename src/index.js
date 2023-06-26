import React from 'react';
import { render } from 'react-dom'; import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';
atatus.config('2df1805bec4443dab85fbd9157344dd5').install();

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

serviceWorkerRegistration.unregister();

reportWebVitals();