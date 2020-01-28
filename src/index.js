import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
