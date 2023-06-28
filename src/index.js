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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();

reportWebVitals();