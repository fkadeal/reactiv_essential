import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 

const [a,b] = [true,false,"cola","domino"];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authorized={a}/>
  </React.StrictMode>
);
 