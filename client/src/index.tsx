import React from 'react';
import ReactDOM from 'react-dom/client';
import './dist/css/main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='index--container'>
      <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
