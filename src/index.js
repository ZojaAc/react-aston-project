import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.scss';
import { store } from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <Router>
      <Provider store={store}>
        <App />
      </Provider>      
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);

