import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('Index.tsx loaded');

const container = document.getElementById('root');
console.log('Root element:', container);

if (!container) {
  console.error('Root element not found!');
  throw new Error('Root element with id "root" not found');
}

const root = createRoot(container);

console.log('Rendering App...');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('App rendered successfully');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
