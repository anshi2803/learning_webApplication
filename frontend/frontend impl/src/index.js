import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './App';
// import '@fortawesome/fontawesome-free/css.all.min.css';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Router>
  //   <App/>
  // </Router>
);

