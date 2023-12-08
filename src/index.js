import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import { BrowserRouter } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />

    {/* </BrowserRouter> */}
  </React.StrictMode>
);

//basename='/localhost:3000'
