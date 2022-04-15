import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import {Store } from './redux/store/store';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Provider store={ Store  }>
      <App />
    </Provider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
