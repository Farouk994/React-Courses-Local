import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom"

render(
 
    <Router>
    <App />
    </Router>,
  document.getElementById('root')
);
