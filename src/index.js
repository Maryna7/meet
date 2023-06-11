import React from 'react';
import { render } from 'react-dom'; import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

serviceWorkerRegistration.unregister();

reportWebVitals();