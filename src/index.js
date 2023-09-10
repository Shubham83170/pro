import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './custom';
import { Myhome } from './custom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Home/>
   <Myhome/>
  </React.StrictMode>
);


