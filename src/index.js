import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MovieProvider } from './context/movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MovieProvider>
  <App />

  </MovieProvider>
);

